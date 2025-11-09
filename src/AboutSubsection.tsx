import { useState } from "react";
import { SkillProp } from "./SkillSubsection";
import Brief from "./descriptions/Brief";

interface AboutProp {
    titleSubsection: SkillProp | null;
    notifySkillHighlight: (data: SkillProp | null) => void;
}

// undefined denotes that there should be a gap between this and the next entry
export default function About({ titleSubsection, notifySkillHighlight }: AboutProp) {
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
            <p id="information-title" className="text-3xl sm:text-4xl 2xl:text-6xl text-white fira-code-font align-text-bottom mt-4 ml-2 mr-2">C:&#92;ABOUT
                <span className='text-lg sm:text-2xl 2xl:text-4xl'>
                    <span id="about-section" className='opacity-0 -translate-x-64 inline-block'>&nbsp;&#92;&nbsp;{(titleSubsection === null ? cachedSections[0] : prevSection).toUpperCase()}</span>
                    <span id="about-subsection" className='opacity-0 -translate-x-64 inline-block'>&nbsp;&#92;&nbsp;{(titleSubsection === null ? cachedSections[1] : prevSubsection).toUpperCase()}</span>
                </span>
            </p>
            <div className="bg-black-main/30 w-full max-w-[1024px] h-full rounded-sm text-white relative backdrop-blur-[2px] col-span-4">
                <div className="pl-4 pr-4 pt-4 pb-2 text-content tracking-wide leading-normal">
                    {(titleSubsection === null) ? (<>
                        <br/><Brief data={[
                            {title: 'experience', desc: '7+ Years'}, // 7 years as of 10/23/2025 (started in 6th? 7th?)
                            {title: 'primary language', desc: 'Python, TypeScript'},
                            {title: 'role', desc: 'Software Engineering'},
                        ]}></Brief>
                        <p className='font-semibold'>Hello! Thanks for stopping by!</p><br/>
                        <div className='indent-6'>
                            My name is Leo Wang, an undergraduate studying <span className="font-semibold link-purple-2">Computer Science</span> (Data Science specialization) and <span className="font-semibold link-purple-2">Math</span> at the <a target='_blank' href="https://umd.edu/" className="font-semibold link-blue-2">University of Maryland, College Park</a>, with a <span className="font-semibold link-purple-2">4.0 GPA</span>. I am currently part of the <a target='_blank' href="https://www.cs.umd.edu/~dml/new-honors/" className="font-semibold link-blue-2">Computer Science Departmental Honors</a> program, which focuses on undergraduate research. I was also accepted into the <a target='_blank' href="https://aces.umd.edu/" className="font-semibold link-blue-2">Advanced Cybersecurity Experience (ACES)</a> Honors College though I have since moved on. I plan to graduate in the Spring of 2027.
                        </div><br/>
                        <div className='indent-6'>
                            I have significant experience in web development, especially using TypeScript and React. That said, I am currently branching out into more traditional software engineering, and so also have experience with C++ and C#. In general, I find my interests in data science (especially within a geospatial context), software engineering, and scientific computing.
                        </div><br/>
                        {/* <div className='indent-6'><span className="link-purple-2">To the right{window.innerWidth < 768 ? ' of my portrait' : ''}</span> is an abridged list of just the technologies I am proficient in - each will have a linked project(s) to demonstrate this knowledge. The subsections are sorted strongest to weakest (though I consider myself proficient in all listed technologies). <span className='link-blue-2'>Blue links</span> will link to outside sources, such as technologies or context. <span className='link-red-2'>Red links</span> will refer to something I have created, such as a project.
                        </div><br/> */}
                        <div className='indent-6'>
                            Outside of programming, I enjoy metal model building (the <a target='_blank' className='font-semibold link-purple-2' href='https://www.metalearth.com/premium'>Metal Earth</a> series is great!), gaming, and reading. Currently, my favorite book is the novel <a target='_blank' href='https://en.wikipedia.org/wiki/Martyr!' className='font-semibold link-purple-2 italic'>Martyr!</a> by Kaveh Akbar, which is broadly about the meaningfulness (or lack thereof) of martyrdom, both as it relates to traditional martyrdom (think Joan of Arc) and "earth martyrs" (defined as "people who die for other people"). When I have the time, I also like to go exploring/hiking with my bike.
                        </div><br/>
                        <div className="w-5/6 text-right">- Leo Wang</div>
                    </>) : (<>
                        <button onClick={() => notifySkillHighlight(null)} className="font-semibold mb-4 tracking-wider hover:-translate-x-2 transition-transform duration-250 text-header"><i className="ri-arrow-left-s-line mr-2 ml-2"></i>Back</button>
                        <br/>
                        {titleSubsection.description}
                    </>)}
                </div>

                <div className='w-full flex justify-center mt-12 hidden'>
                    <button onClick={() => document.getElementById('about')!.scrollIntoView({behavior: 'smooth'})} className="font-semibold mb-4 text-header tracking-wider"><i className="ri-arrow-up-s-line mr-2 ml-2"></i>Return to Top</button>
                </div>
            </div>
        </div>
    );
}
