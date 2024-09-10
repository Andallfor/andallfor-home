import { useState, useEffect } from 'react';
import { Exp_NASA, Exp_FTC } from './descriptions/Experiences';
import { Skl_DataProcessing, Skl_Optimization, Skl_WebDev } from './descriptions/Skills';
import { Plf_TailwindReact } from './descriptions/Platforms';
import { Lng_CSharp } from './descriptions/Languages';
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
        if (window.innerWidth >= 768) {
            notifySkillsShownChange(false);
        }

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
        if (window.innerWidth >= 768 && !copy['ignore']) {
            Object.keys(copy).forEach((k) => copy[k] = false);
            copy['ignore'] = true;
            setCollapse(copy);
        } else if (window.innerWidth < 768 && copy['ignore']) {
            Object.keys(copy).forEach((k) => copy[k] = true);
            copy['ignore'] = false;
            setCollapse(copy);
        }
    }

    function notifySkillsShownChange(change: boolean) {
        setSkillsShown(change);

        const blocker = document.getElementById("skills-blocker");
        if (!change) blocker?.classList.replace('opacity-100', 'opacity-0');
        else blocker?.classList.replace('opacity-0', 'opacity-100');
    }

    useEffect(() => {
        checkCollapse(); // this might be causing some lag, but registering to onload doesnt seem to work
        window.addEventListener('resize', () => checkCollapse());
    });

    return (
         <div className="w-full flex justify-center mt-16">
            <div className="w-full md:mr-8 md:ml-8 mr-2 ml-2">
                {window.innerWidth < 1024 ? (<>
                    <div className='flex justify-between w-full'>
                        <div className='flex'>
                            <div className='flex-grow-0 relative'>
                                <img src="self.jpg" className='h-full absolute max-w-fit'/>
                            </div>
                        </div>
                        <div className='h-full'>
                            <Skills groups={sk} skillsShown={skillsShown} toggleSkillsShown={() => notifySkillsShownChange(!skillsShown)} notifySkillHighlight={updateSkillHighlight} notifyCollapse={updateCollapse} collapsed={collapsed}/>
                        </div>
                    </div>
                    <About links={[]} titleSubsection={highlightedSkill} notifySkillHighlight={updateSkillHighlight}/>
                </>) : <>
                    <div className='w-full flex justify-between gap-4'>
                        <div className='flex-grow-[0.5] min-w-[270px]'>
                            <img src="self.jpg" className=''/>
                        </div>
                        <div className='flex-grow-[3] w-[70%] min-w-[60%] xl:min-w-[70%]'>
                            <About links={[]} titleSubsection={highlightedSkill} notifySkillHighlight={updateSkillHighlight}/>
                        </div>
                        <div className=''>
                            <Skills groups={sk} skillsShown={skillsShown} toggleSkillsShown={() => notifySkillsShownChange(!skillsShown)} notifySkillHighlight={updateSkillHighlight} notifyCollapse={updateCollapse} collapsed={collapsed}/>
                        </div>
                    </div>
                </>}
            </div>
         </div>
    );
}
