import { useState, useEffect } from 'react';
import { Exp_NASA, Exp_FTC } from './descriptions/Experiences';
import { Skl_DataProcessing, Skl_Optimization, Skl_WebDev } from './descriptions/Skills';
import { Plf_AWS, Plf_TailwindReact, Plf_Unity } from './descriptions/Platforms';
import { Lng_CPlusPlus, Lng_CSharp, Lng_JSTS, Lng_Python } from './descriptions/Languages';
import Skills, { SkillProp } from './SkillSubsection';
import About from './AboutSubsection';

export default function Information() {
    const [highlightedSkill, setHighlightedSkill] = useState<(SkillProp | null)>(null);
    const [skillsShown, setSkillsShown] = useState(false);
    const [collapsed, setCollapse] = useState<{[header: string]: boolean}>({
        'experiences': false,
        'skills': false,
        'platforms': false,
        'languages': false,
        'ignore': false,
        'didAlreadyUpdate': false
    });
    const [doesNeedUpdate, setDoesNeedUpdate] = useState(true);

    const sk = [
        {header: 'experiences', skills: [
            {name: 'NASA', desc: <Exp_NASA/>},
            {name: 'FIRST Tech Challenge', desc: <Exp_FTC/>},
        ]},
        {header: 'skills', skills: [
            {name: 'Software Optimization', desc: <Skl_Optimization/>},
            {name: 'Large-Scale Data Processing', desc: <Skl_DataProcessing/>},
            {name: 'Web Development', desc: <Skl_WebDev/>},
        ]},
        {header: 'platforms', skills: [
            {name: 'Unity', desc: <Plf_Unity/>},
            {name: 'TailwindCSS & React', desc: <Plf_TailwindReact/>},
            {name: 'AWS', desc: <Plf_AWS/>},
        ]},
        {header: 'languages', skills: [
            {name: 'C#', desc: <Lng_CSharp/>},
            {name: 'Python', desc: <Lng_Python/>},
            {name: 'TypeScript & JavaScript', desc: <Lng_JSTS/>},
            {name: 'C++', desc: <Lng_CPlusPlus/>},
        ]}
    ];

    function updateSkillHighlight(data: SkillProp | null) {
        notifySkillsShownChange(false);

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
        if (window.innerWidth >= 1024 && (!copy['ignore'] || !copy['didAlreadyUpdate'])) {
            Object.keys(copy).forEach((k) => copy[k] = false);
            copy['ignore'] = true;
            copy['didAlreadyUpdate'] = true;
            setCollapse(copy);
        } else if (window.innerWidth < 1024 && (copy['ignore'] || !copy['didAlreadyUpdate'])) {
            Object.keys(copy).forEach((k) => copy[k] = true);
            copy['ignore'] = false;
            copy['didAlreadyUpdate'] = true;
            setCollapse(copy);
        }
    }

    function notifySkillsShownChange(change: boolean) {
        const blocker = document.getElementById("skills-blocker");
        const container = document.getElementById('skills-container');
        if (!change) {
            (blocker?.firstChild as HTMLElement).classList.replace('pointer-events-auto', 'pointer-events-none');
            blocker?.classList.replace('opacity-100', 'opacity-0');
            container?.classList.replace('pointer-events-auto', 'pointer-events-none');
        } else {
            (blocker?.firstChild as HTMLElement).classList.replace('pointer-events-none', 'pointer-events-auto');
            blocker?.classList.replace('opacity-0', 'opacity-100');
            container?.classList.replace('pointer-events-none', 'pointer-events-auto');
        }

        setSkillsShown(change);
    }

    useEffect(() => { // scuffed, look into https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
        if (doesNeedUpdate) {
            notifySkillsShownChange(false);
            checkCollapse();
    
            window.addEventListener('resize', () => {
                checkCollapse();
                setDoesNeedUpdate(true);
            });
    
            setDoesNeedUpdate(false);
        }
    }, [doesNeedUpdate]);

    return (
        <div className='md:mr-8 md:ml-8 sm:mr-2 sm:ml-2 mt-16'>
            <div className="w-full flex justify-center">
                <div className="w-full">
                    {window.innerWidth < 1024 ? (<>
                        <div className='flex justify-between w-full'>
                            <div className='flex'>
                                <div className='md:flex-grow-1 flex-grow-0 relative'>
                                    <img src="self.jpg" className='h-full absolute max-w-fit'/>
                                </div>
                            </div>
                            <div className='h-full'>
                                <Skills groups={sk} skillsShown={skillsShown} toggleSkillsShown={() => notifySkillsShownChange(!skillsShown)} notifySkillHighlight={updateSkillHighlight} notifyCollapse={updateCollapse} collapsed={collapsed}/>
                            </div>
                        </div>
                        <About titleSubsection={highlightedSkill} notifySkillHighlight={updateSkillHighlight}/>
                    </>) : <>
                        <div className='w-full flex justify-between gap-4'>
                            <div className='flex-grow-[0.5] min-w-[270px]'>
                                <img src="self.jpg" className=''/>
                            </div>
                            <div className='flex-grow-[3] w-[70%] min-w-[60%] xl:min-w-[70%]'>
                                <About titleSubsection={highlightedSkill} notifySkillHighlight={updateSkillHighlight}/>
                            </div>
                            <div className=''>
                                <Skills groups={sk} skillsShown={skillsShown} toggleSkillsShown={() => notifySkillsShownChange(!skillsShown)} notifySkillHighlight={updateSkillHighlight} notifyCollapse={updateCollapse} collapsed={collapsed}/>
                            </div>
                        </div>
                    </>}
                </div>
            </div>
         </div>
    );
}
