import { useEffect, useState, useReducer } from 'react';

interface SkillGroupProp {
    groups: SkillGroup[];
    skillsShown: boolean;
    toggleSkillsShown: () => void;
    notifySkillHighlight: (data: SkillProp | null) => void;
}

interface SkillGroup {
    header: string;
    skills: Skill[];
}

interface Skill {
    name: string,
    desc: string | JSX.Element;
}

interface SkillProp {
    element: HTMLElement;
    header: string;
    title: string;
    description: string | JSX.Element;
}

function Skills({ groups, skillsShown, toggleSkillsShown, notifySkillHighlight }: SkillGroupProp) {
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
        <div id="skills-main" className='flex ml-8'>
            <div className='text-nowrap'>
                {groups.map(({ header, skills }) => (
                    <div key={key++}>
                        <p className="text-4xl text-white fira-code-bold text-right transition-transform ease-in-out duration-[350ms]" style={{transform: getWidth(), transitionDelay: transitionIndex++ * 50 + 'ms'}}>{header.toUpperCase()}</p>
                        {skills.map(({ name, desc }) => (
                            <div key={key++} className="transition-transform ease-in-out duration-[350ms]" style={{transform: getWidth(), transitionDelay: transitionIndex++ * 50 + 'ms'}}>
                                <button onClick={(e) => notifySkillHighlight({
                                        element: (e.target as HTMLElement).firstChild as HTMLElement, // expected to be the <p> child node
                                        header: header,
                                        title: name,
                                        description: desc
                                    })} className='w-full group flex justify-end pt-2'>
                                    <p className="text-xl text-off-white text-right leading-tight pointer-events-none transition-[margin-right]">
                                        <i className="ri-arrow-down-s-line inline-block"></i>
                                        {name}
                                    </p>
                                    <span className="absolute group-hover:opacity-100 w-1 h-full bg-red-main translate-x-4 opacity-0 pointer-events-none"></span>
                                </button>
                            </div>
                        ))}
                        <div className='h-8'></div>
                    </div>
                ))}
            </div>
            <div className='h-full shrink-0 flex flex-col justify-between items-center mr-8'>
                <div className="h-full bg-off-white w-0.5"></div>
                <button onClick={toggleSkillsShown} className={'transition-transform duration-200 ' + arrowDir}>
                    <i className={"text-off-white ri-2x p-4 " + arrow}></i>
                </button>
                <div className="h-full bg-off-white w-0.5"></div>
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
        }

        setIsSkillShown(titleSubsection !== null);
    }

    return (
        <div id="information-main" className="flex flex-col gap-4">
            <p id="information-title" className="text-6xl text-white fira-code-font align-text-bottom">C:&#92;ABOUT
                <span className='text-4xl'>
                    <span id="about-section" className='opacity-0 -translate-x-64 inline-block'>&nbsp;&#92;&nbsp;{(titleSubsection === null ? cachedSections[0] : prevSection).toUpperCase()}</span>
                    <span id="about-subsection" className='opacity-0 -translate-x-64 inline-block'>&nbsp;&#92;&nbsp;{(titleSubsection === null ? cachedSections[1] : prevSubsection).toUpperCase()}</span>
                </span>
            </p>
            <div className='grid grid-rows-2 grid-flow-col mt-4 gap-y-2' style={{gridTemplateRows: '1fr auto', gridTemplateColumns: '1fr 3fr'}}>
                <img src="self.jpg"/>
                <div id="information-contact-link-header" className="mt-4 leading-relaxed text-white text-md tracking-wide text-nowrap">
                    {links.map(({ id, icon, title, newSection }) => (
                        <ContactLinkTitle key={id} icon={icon} title={title} newSection={newSection}></ContactLinkTitle>
                    ))}
                </div>
                <div className="bg-black-main/30 w-full h-full rounded-sm text-white relative backdrop-blur-[2px]">
                    <div className="pl-4 pr-4 pt-4 pb-2 text-lg tracking-wide leading-normal">
                        {/* red links are personal (i.e. github) 
                            blue is academic related
                            purple is misc/flavor*/}
                        {
                            (titleSubsection === null) ? (<>
                                <p className='font-semibold'>Hello! Thanks for stopping by!</p><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;My name is Leo Wang, an undergraduate studying computer science at the <a target='_blank' href="https://umd.edu/" className="font-semibold link-blue-2">University of Maryland, College Park</a> as part of the <a target='_blank' href="https://aces.umd.edu/" className="font-semibold link-blue-2">Advanced Cybersecurity Experience (ACES)</a> Honors College. I have the most experience in high-performance scientific simulations and large-scale (billions (!)) data processing/visualization, especially as a result of my <a target='_blank' href='https://github.com/Andallfor/MVT' className='font-semibold link-blue-2'>3 year long internship with NASA</a>. I primarily work with C#, though I also have experience with TypeScript, C++, Python, and Java.
                                <br/><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;To the right is an abridged list of the technologies I am proficient in - each will have a linked project(s) to demonstrate this knowledge. The subsections are not sorted in any particular order.
                                <br/><br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;Outside of programming, I enjoy metal model building (the <a target='_blank' className='font-semibold link-purple-2' href='https://www.metalearth.com/premium'>Metal Earth</a> series is great!), astronomy, and reading. Currently, my favorite book is <a target='_blank' href='https://en.wikipedia.org/wiki/Babel,_or_the_Necessity_of_Violence' className='font-semibold link-purple-2 italic'>Babel, or the Necessity of Violence</a> by R.F. Kuang - I cannot recommend this book enough if you are into fantasy with elements of social commentary. When I have time, I like to go exploring and/or hiking. Otherwise, I spend my time admiring how strange my dogs are.
                                <br/><br/>
                                <div className="w-5/6 text-right">- Leo Wang</div>
                            </>) : (<>
                                <button onClick={() => notifySkillHighlight(null)} className="font-semibold mb-4 text-xl tracking-wider hover:-translate-x-2 transition-transform duration-250"><i className="ri-arrow-left-s-line mr-2 ml-2"></i>Return</button>
                                <br/>
                                {titleSubsection.description}
                            </>)
                        }
                    </div>
                </div>
                <div id="information-contact-link-body" className="mt-4 leading-relaxed text-white text-md tracking-wide w-0 min-w-full">
                    {links.map(({ id, url, urlCover, newSection }) => (
                        <ContactLinkBody key={id + links.length} url={url} urlCover={urlCover} newSection={newSection}></ContactLinkBody>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Information() {
    const li = [
        {id: 0, icon: 'ri-mail-star-fill',     title: 'Personal Email (Preferred)',    url: 'mailto:leozwang2005@gmail.com',                   urlCover: 'leozwang2005@gmail.com',             newSection: false},
        {id: 1, icon: 'ri-mail-fill',          title: 'College Email',                 url: 'mailto:leowang@terpmail.umd.edu',                 urlCover: 'leowang@terpmail.umd.edu',           newSection: false},
        {id: 2, icon: 'ri-github-fill',        title: 'Github',                        url: 'https://github.com/Andallfor',                    urlCover: 'github.com/Andallfor',               newSection: true },
        {id: 3, icon: 'ri-linkedin-box-fill',  title: 'LinkedIn',                      url: 'https://www.linkedin.com/in/leo-wang-765251292/', urlCover: 'linkedin.com/in/leo-wang-765251292', newSection: true },
        {id: 4, icon: 'ri-file-list-2-fill',   title: 'Resume',                        url: '',                                                urlCover: 'Download',                           newSection: false}
    ];

    const sk = [
        {header: 'experiences', skills: [
            {name: 'NASA', desc: ``},
            {name: 'NASA App Development Challenge', desc: ``},
            {name: 'FIRST Tech Challenge', desc: ``},
        ]},
        {header: 'platforms', skills: [
            {name: 'TailwindCSS', desc: `this is a description`},
            {name: 'Unity', desc: ``},
            {name: 'AWS', desc: ``}
        ]},
        {header: 'skills', skills: [
            {name: 'High-Performance Computing', desc: ``},
            {name: 'Scientific Simulations', desc: ``},
            {name: 'Web Development', desc: ``},
        ]},
        {header: 'languages', skills: [
            {name: 'C/C++', desc: ``},
            {name: 'C#', desc: <p className='font-semibold'>Hello! Thanks for stopping by!</p>},
            {name: 'TypeScript/JavaScript', desc: ``}
        ]}
    ];

    const [highlightedSkill, setHighlightedSkill] = useState<(SkillProp | null)>(null);
    const [skillsShown, setSkillsShown] = useState(true);

    function updateSkillHighlight(data: SkillProp | null) {
        if (highlightedSkill !== null) {
            highlightedSkill.element.classList.remove('mr-6');
            highlightedSkill.element.firstElementChild?.classList.remove('rotate-90');
        }
        if (data !== null && data.element !== null) {
            data.element.classList.add('mr-6');
            data.element.firstElementChild?.classList.add('rotate-90');
        }

        setHighlightedSkill(data);
    }

    return (
         <div className="w-full flex justify-center mt-16">
            <div className="w-full flex gap-8 justify-between">
                <div className={'h-full shrink-0 w-8'}></div>
                <About links={li} titleSubsection={highlightedSkill} notifySkillHighlight={updateSkillHighlight}></About>
                <Skills groups={sk} skillsShown={skillsShown} toggleSkillsShown={() => {setSkillsShown(!skillsShown); updateSkillHighlight(null)}} notifySkillHighlight={updateSkillHighlight}></Skills>
            </div>
         </div>
    );
}