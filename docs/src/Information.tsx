import { useState, useEffect } from 'react';
import { Exp_NASA, Exp_FTC } from './descriptions/Experiences';
import { Skl_DataProcessing, Skl_Optimization, Skl_WebDev } from './descriptions/Skills';
import { Plf_TailwindReact } from './descriptions/Platforms';
import { Lng_CSharp } from './descriptions/Languages';

interface SkillGroupProp {
    groups: SkillGroup[];
    skillsShown: boolean;
    collapsed: {[header: string]: boolean};
    toggleSkillsShown: () => void;
    notifySkillHighlight: (data: SkillProp | null) => void;
    notifyCollapse: (header: string) => void;
}

interface SkillGroup {
    header: string;
    skills: Skill[];
}

interface Skill {
    name: string;
    desc: string | JSX.Element;
}

interface SkillProp {
    element: HTMLElement;
    header: string;
    title: string;
    description: string | JSX.Element;
}

function Skills({ groups, skillsShown, collapsed, toggleSkillsShown, notifySkillHighlight, notifyCollapse }: SkillGroupProp) {
    let key = 0;
    let transitionIndex = 0;

    let arrow = skillsShown ? 'ri-arrow-right-double-fill' : 'ri-arrow-left-double-fill'
    let arrowDir = skillsShown ? 'hover:translate-x-2' : 'hover:-translate-x-2';

    function getWidth(): string {
        if (skillsShown) return 'translateX(0)';

        const sk = document.getElementById('skills-main');
        if (sk === null) return 'translateX(0)';

        const rect = sk.getBoundingClientRect();
        const d = document.body.scrollWidth - rect.left

        return 'translateX(' + d + 'px)';
    }

    return (
        <div id="skills-main" className='flex ml-8 min-h-[270px] h-full'>
            <div className='text-nowrap mr-1'>
                {groups.map(({ header, skills }) => (
                    <div key={key++}>
                        <button style={{transform: getWidth(), transitionDelay: transitionIndex++ * 50 + 'ms'}} className='transition-transform ease-in-out duration-[350ms] w-full' disabled={collapsed['ignore']} onClick={() => notifyCollapse(header)}>
                            <p className="text-base md:text-xl 2xl:text-4xl text-white fira-code-bold text-right">
                                {header.toUpperCase()}
                            </p>
                        </button>
                        {collapsed[header] ? <></> : skills.map(({ name, desc }) => (
                            <div key={key++} className="transition-transform ease-in-out duration-[350ms]" style={{transform: getWidth(), transitionDelay: transitionIndex++ * 50 + 'ms'}}>
                                <button onClick={(e) => notifySkillHighlight({
                                        element: (e.target as HTMLElement).firstChild as HTMLElement, // expected to be the <p> child node
                                        header: header,
                                        title: name,
                                        description: desc
                                    })} className='w-full group flex justify-end pt-2'>
                                    <p className="text-sidebar text-off-white text-right leading-tight pointer-events-none transition-transform text-sm xs:text-xl">
                                        <i className="ri-arrow-down-s-line inline-block"></i>
                                        {name}
                                    </p>
                                    <span className="absolute group-hover:opacity-100 w-1 h-full bg-red-main translate-x-4 opacity-0 pointer-events-none"></span>
                                </button>
                            </div>
                        ))}
                        <div className='h-4 xs:h-8'></div>
                    </div>
                ))}
            </div>
            <div className='h-full shrink-0 flex flex-col justify-between items-center xs:mr-8' style={{minHeight: 'inherit'}}>
                <div className="h-full bg-off-white w-0.5 flex-grow"></div>
                <button onClick={toggleSkillsShown} className={'transition-transform duration-200 ' + arrowDir}>
                    {/* tailwind breakpoints dont play nice with remix icon sizing */}
                    {(window.innerWidth > 768) ? 
                        <i className={"text-off-white ri-2x xs:p-4 " + arrow}></i> :
                        <i className={"text-off-white ri-lg xs:p-4 " + arrow}></i>}
                </button>
                <div className="h-full bg-off-white w-0.5 flex-grow"></div>
            </div>
        </div>
    );
}

interface ContactLinkProp {
    links: ContactLink[];
    titleSubsection: SkillProp | null;
    notifySkillHighlight: (data: SkillProp | null) => void;
}

interface ContactLink {
    id: number,
    icon: string,
    title: string,
    url: string,
    urlCover: string,
    newSection: boolean
}

interface ContactLinkTitleConfig { icon: string, title: string, newSection: boolean }
interface ContactLinkBodyConfig { url: string, urlCover: string, newSection: boolean }

function ContactLinkTitle({icon, title, newSection }: ContactLinkTitleConfig) {
    if (newSection) return (<div className="mt-2"><i className={icon + " ri-lg mr-2"}></i><span>{title}</span></div>);
    else return (<div><i className={icon + " ri-lg mr-2"}></i><span>{title}</span></div>);
}

function ContactLinkBody({url, urlCover, newSection}: ContactLinkBodyConfig) {
    if (newSection) return (<div className="mt-2"><a className="link-red-2" target="_blank" href={url}>{urlCover}</a></div>);
    else return (<div><a className="link-red-2" target="_blank" href={url}>{urlCover}</a></div>);
}

// undefined denotes that there should be a gap between this and the next entry
function About({ links, titleSubsection, notifySkillHighlight }: ContactLinkProp) {
    // um. it was very late when i coded this.

    function triggerAnimation(e: HTMLElement, a: string, dir: string) {
        e.classList.remove('animate-appear-delay', 'animate-appear');
        e.style.animationDirection = dir;
        e.offsetHeight;
        e.classList.add(a);
    }

    const [prevSection, setPrevSection] = useState('');
    const [prevSubsection, setPrevSubsection] = useState('');
    const [isSkillShown, setIsSkillShown] = useState(titleSubsection !== null);
    const [cachedSections, setCachedSections] = useState(['', '']);

    if (titleSubsection !== null) {
        let didChangeHeader = false;
        if (prevSection != titleSubsection.header) {
            const s = document.getElementById('about-section')!;
            triggerAnimation(s, 'animate-appear', 'normal');

            setPrevSection(titleSubsection.header);
            didChangeHeader = true;
        }

        if (prevSubsection != titleSubsection.title) {
            const s = document.getElementById('about-subsection')!;
            triggerAnimation(s, didChangeHeader ? 'animate-appear-delay' : 'animate-appear', 'normal');

            setPrevSubsection(titleSubsection.title);
        }
    }

    if (isSkillShown !== (titleSubsection !== null)) {
        if (titleSubsection === null) { // is now not shown, prev was
            const s = document.getElementById('about-section')!;
            const sb = document.getElementById('about-subsection')!;

            triggerAnimation(s, 'animate-appear', 'reverse');
            triggerAnimation(sb, 'animate-appear', 'reverse');

            setCachedSections([prevSection, prevSubsection]);
            setPrevSection('');
            setPrevSubsection('');
            setTimeout(() => setCachedSections(['', '']), 300);
        }

        setIsSkillShown(titleSubsection !== null);
    }

    return (
        <div id="information-main" className="flex flex-col gap-4">
            <p id="information-title" className="text-3xl sm:text-4xl 2xl:text-6xl text-white fira-code-font align-text-bottom mt-4">C:&#92;ABOUT
                <span className='text-lg sm:text-2xl 2xl:text-4xl'>
                    <span id="about-section" className='opacity-0 -translate-x-64 inline-block'>&nbsp;&#92;&nbsp;{(titleSubsection === null ? cachedSections[0] : prevSection).toUpperCase()}</span>
                    <span id="about-subsection" className='opacity-0 -translate-x-64 inline-block'>&nbsp;&#92;&nbsp;{(titleSubsection === null ? cachedSections[1] : prevSubsection).toUpperCase()}</span>
                </span>
            </p>
            <div className="bg-black-main/30 w-full h-full rounded-sm text-white relative backdrop-blur-[2px] col-span-4">
                <div className="pl-4 pr-4 pt-4 pb-2 text-content tracking-wide leading-normal">
                    {(titleSubsection === null) ? (<>
                        <p className='font-semibold'>Hello! Thanks for stopping by!</p><br/>
                        <div className='indent-6'>
                            My name is Leo Wang, an undergraduate studying computer science at the <a target='_blank' href="https://umd.edu/" className="font-semibold link-blue-2">University of Maryland, College Park</a> as part of the <a target='_blank' href="https://aces.umd.edu/" className="font-semibold link-blue-2">Advanced Cybersecurity Experience (ACES)</a> Honors College. I have the most experience in high-performance scientific simulations and large-scale (billions (!)) data processing/visualization, especially as a result of my <a target='_blank' href='https://github.com/Andallfor/MVT' className='font-semibold link-red-2'>3 year long internship with NASA</a>. The moon background image on this page was created using the code I wrote for the internship.
                        </div><br/>
                        <div className='indent-6'>To the right is an abridged list of technologies I am proficient in - each will have a linked project(s) to demonstrate this knowledge. The subsections are not sorted in any particular order. <span className='link-blue-2'>Blue links</span> will link to outside sources, such as technologies or context. <span className='link-red-2'>Red links</span> will refer to something I have created, such as a project.</div><br/>
                        <div className='indent-6'>
                            Outside of programming, I enjoy metal model building (the <a target='_blank' className='font-semibold link-purple-2' href='https://www.metalearth.com/premium'>Metal Earth</a> series is great!), astronomy, and reading. Currently, my favorite book is <a target='_blank' href='https://en.wikipedia.org/wiki/Babel,_or_the_Necessity_of_Violence' className='font-semibold link-purple-2 italic'>Babel, or the Necessity of Violence</a> by R.F. Kuang - I cannot recommend this book enough if you are into fantasy with elements of social commentary. When I have the time, I like to go exploring and/or hiking. Otherwise, I spend my time admiring how strange my dogs are.
                        </div><br/>
                        <div className="w-5/6 text-right">- Leo Wang</div>
                    </>) : (<>
                        <button onClick={() => notifySkillHighlight(null)} className="font-semibold mb-4 text-xl tracking-wider hover:-translate-x-2 transition-transform duration-250"><i className="ri-arrow-left-s-line mr-2 ml-2"></i>Back</button>
                        <br/>
                        {titleSubsection.description}
                    </>)}
                </div>

                <div className='w-full flex justify-center mt-12 2xl:hidden'>
                    <button onClick={() => document.getElementById('information-scroll-anchor')!.scrollIntoView({behavior: 'smooth'})} className="font-semibold mb-4 text-xl tracking-wider"><i className="ri-arrow-up-s-line mr-2 ml-2"></i>Return to Top</button>
                </div>
            </div>
        </div>
    );
}

export default function Information() {
    const [highlightedSkill, setHighlightedSkill] = useState<(SkillProp | null)>(null);
    const [skillsShown, setSkillsShown] = useState(true);
    const [collapsed, setCollapse] = useState<{[header: string]: boolean}>({
        'experiences': false,
        'skills': false,
        'platforms': false,
        'languages': false,
        'ignore': false,
    });

    const li = [
        {id: 0, icon: 'ri-mail-star-fill',     title: 'Personal Email (Preferred)',    url: 'mailto:leozwang2005@gmail.com',                   urlCover: 'leozwang2005@gmail.com',             newSection: false},
        {id: 1, icon: 'ri-mail-fill',          title: 'College Email',                 url: 'mailto:leowang@terpmail.umd.edu',                 urlCover: 'leowang@terpmail.umd.edu',           newSection: false},
        {id: 2, icon: 'ri-github-fill',        title: 'Github',                        url: 'https://github.com/Andallfor',                    urlCover: 'github.com/Andallfor',               newSection: true },
        {id: 3, icon: 'ri-linkedin-box-fill',  title: 'LinkedIn',                      url: 'https://www.linkedin.com/in/leo-z-wang', urlCover: 'linkedin.com/in/leo-wang-765251292', newSection: true },
        {id: 4, icon: 'ri-file-list-2-fill',   title: 'Resume',                        url: '',                                                urlCover: 'Download',                           newSection: false}
    ];

    const sk = [
        {header: 'experiences', skills: [
            {name: 'NASA', desc: <Exp_NASA></Exp_NASA>},
            {name: 'FIRST Tech Challenge', desc: <Exp_FTC></Exp_FTC>},
        ]},
        {header: 'skills', skills: [
            {name: 'Software Optimization', desc: <Skl_Optimization></Skl_Optimization>},
            {name: 'Large-Scale Data Processing', desc: <Skl_DataProcessing></Skl_DataProcessing>},
            {name: 'Web Development', desc: <Skl_WebDev></Skl_WebDev>},
        ]},
        {header: 'platforms', skills: [
            {name: 'TailwindCSS & React', desc: <Plf_TailwindReact></Plf_TailwindReact>},
            {name: 'Unity', desc: ``},
            {name: 'AWS', desc: ``}
        ]},
        {header: 'languages', skills: [
            {name: 'C#', desc: <Lng_CSharp></Lng_CSharp>},
            {name: 'C++', desc: ``},
            {name: 'TypeScript & JavaScript', desc: ``},
            {name: 'Python', desc: ``}
        ]}
    ];

    function updateSkillHighlight(data: SkillProp | null) {
        if (highlightedSkill !== null) {
            highlightedSkill.element.classList.remove('md:-translate-x-6', '-translate-x-3');
            highlightedSkill.element.classList.remove('text-white');
            highlightedSkill.element.firstElementChild?.classList.remove('rotate-90');
        }

        if (data !== null && data.element !== null) {
            data.element.classList.add('md:-translate-x-6', '-translate-x-3');
            data.element.classList.add('text-white');
            data.element.firstElementChild?.classList.add('rotate-90');
        }

        setHighlightedSkill(data);
    }

    function updateCollapse(header: string) {
        if (collapsed['ignore']) return;
        let copy = {...collapsed};
        let c = !copy[header];
        Object.keys(copy).forEach((k) => (k == 'ignore' ? {} : copy[k] = true));
        copy[header] = c;

        setCollapse(copy);
    }

    function checkCollapse() {
        let copy = {...collapsed};
        if (window.innerWidth >= 1536 && !copy['ignore']) {
            Object.keys(copy).forEach((k) => copy[k] = false);
            copy['ignore'] = true;
            setCollapse(copy);
        } else if (window.innerWidth < 1536 && copy['ignore']) {
            Object.keys(copy).forEach((k) => copy[k] = true);
            copy['ignore'] = false;
            setCollapse(copy);
        }
    }

    useEffect(() => {
        document.addEventListener('load', () => checkCollapse());
        window.addEventListener('resize', () => checkCollapse());
    });

    return (
         <div className="w-full flex justify-center mt-16">
            <div className="w-full md:mr-8 md:ml-8 mr-2 ml-2">
                {window.innerWidth < 1536 ? (<>
                    <div className='flex justify-between w-full'>
                        <div className='flex'>
                            <div className='flex-grow-0 relative'>
                                {window.innerWidth < 736 ? <img src="selfMobile.jpg" className='h-full absolute max-w-fit'/> : <img src="self.jpg" className='h-full absolute max-w-fit'/>}
                            </div>
                        </div>
                        <div className='h-full'>
                            <Skills groups={sk} skillsShown={skillsShown} toggleSkillsShown={() => setSkillsShown(!skillsShown)} notifySkillHighlight={updateSkillHighlight} notifyCollapse={updateCollapse} collapsed={collapsed}/>
                        </div>
                    </div>
                    <About links={[]} titleSubsection={highlightedSkill} notifySkillHighlight={updateSkillHighlight}/>
                </>) : <>
                    <div className='w-full flex justify-between gap-4'>
                        <div className='flex-grow-[0.5]'>
                            <img src="self.jpg" className=''/>
                        </div>
                        <div className='flex-grow-[3] min-w-[60%]'>
                            <About links={[]} titleSubsection={highlightedSkill} notifySkillHighlight={updateSkillHighlight}/>
                        </div>
                        <div className=''>
                            <Skills groups={sk} skillsShown={skillsShown} toggleSkillsShown={() => setSkillsShown(!skillsShown)} notifySkillHighlight={updateSkillHighlight} notifyCollapse={updateCollapse} collapsed={collapsed}/>
                        </div>
                    </div>
                </>}
            </div>
         </div>
    );
}
