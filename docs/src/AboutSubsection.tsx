import { useState } from "react";
import { SkillProp } from "./SkillSubsection";
import Brief from "./descriptions/Brief";

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
export default function About({ links, titleSubsection, notifySkillHighlight }: ContactLinkProp) {
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
        <div id="information-main" className="flex flex-col gap-4 w-full">
            <p id="information-title" className="text-3xl sm:text-4xl 2xl:text-6xl text-white fira-code-font align-text-bottom mt-4 ml-2">C:&#92;ABOUT
                <span className='text-lg sm:text-2xl 2xl:text-4xl'>
                    <span id="about-section" className='opacity-0 -translate-x-64 inline-block'>&nbsp;&#92;&nbsp;{(titleSubsection === null ? cachedSections[0] : prevSection).toUpperCase()}</span>
                    <span id="about-subsection" className='opacity-0 -translate-x-64 inline-block'>&nbsp;&#92;&nbsp;{(titleSubsection === null ? cachedSections[1] : prevSubsection).toUpperCase()}</span>
                </span>
            </p>
            <div className="bg-black-main/30 w-full h-full rounded-sm text-white relative backdrop-blur-[2px] col-span-4">
                <div className="pl-4 pr-4 pt-4 pb-2 text-content tracking-wide leading-normal">
                    {(titleSubsection === null) ? (<>
                        <br/><div className="w-full flex justify-evenly">
                            <Brief title="experience" desc="4+ Years"></Brief> {/* 6+ if based on when i started to code. 4+ if starting from NASA */}
                            <Brief title="primary language" desc="C#"></Brief>
                            <Brief title="role" desc="Backend Engineer"></Brief>
                        </div><br/>
                        <p className='font-semibold'>Hello! Thanks for stopping by!</p><br/>
                        <div className='indent-6'>
                            My name is Leo Wang, an undergraduate studying computer science at the <a target='_blank' href="https://umd.edu/" className="font-semibold link-blue-2">University of Maryland, College Park</a> as part of the <a target='_blank' href="https://aces.umd.edu/" className="font-semibold link-blue-2">Advanced Cybersecurity Experience (ACES)</a> Honors College. I have the most experience in high-performance scientific simulations and large-scale (billions (!)) data processing/visualization, especially as a result of my <a target='_blank' href='https://github.com/Andallfor/MVT' className='font-semibold link-red-2'>3 year long internship with NASA</a>. The moon background image on this page was created using the code I wrote for the internship.
                        </div><br/>
                        <div className='indent-6'>To the right {window.innerWidth < 768 ? 'of my portrait' : ''} is an abridged list of technologies I am proficient in - each will have a linked project(s) to demonstrate this knowledge. The subsections are not sorted in any particular order. <span className='link-blue-2'>Blue links</span> will link to outside sources, such as technologies or context. <span className='link-red-2'>Red links</span> will refer to something I have created, such as a project.</div><br/>
                        <div className='indent-6'>
                            Outside of programming, I enjoy metal model building (the <a target='_blank' className='font-semibold link-purple-2' href='https://www.metalearth.com/premium'>Metal Earth</a> series is great!), astronomy, and reading. Currently, my favorite book is <a target='_blank' href='https://en.wikipedia.org/wiki/Babel,_or_the_Necessity_of_Violence' className='font-semibold link-purple-2 italic'>Babel, or the Necessity of Violence</a> by R.F. Kuang - I cannot recommend this book enough if you are into fantasy with elements of social commentary. When I have the time, I like to go exploring and/or hiking. Otherwise, I spend my time admiring how strange my dogs are.
                        </div><br/>
                        <div className="w-5/6 text-right">- Leo Wang</div>
                    </>) : (<>
                        <button onClick={() => notifySkillHighlight(null)} className="font-semibold mb-4 tracking-wider hover:-translate-x-2 transition-transform duration-250 text-header"><i className="ri-arrow-left-s-line mr-2 ml-2"></i>Back</button>
                        <br/>
                        {titleSubsection.description}
                    </>)}
                </div>

                <div className='w-full flex justify-center mt-12 2xl:hidden'>
                    <button onClick={() => document.getElementById('information-scroll-anchor')!.scrollIntoView({behavior: 'smooth'})} className="font-semibold mb-4 text-header tracking-wider"><i className="ri-arrow-up-s-line mr-2 ml-2"></i>Return to Top</button>
                </div>
            </div>
        </div>
    );
}
