
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

export interface SkillProp {
    element: HTMLElement;
    header: string;
    title: string;
    description: string | JSX.Element;
}

export default function Skills({ groups, skillsShown, collapsed, toggleSkillsShown, notifySkillHighlight, notifyCollapse }: SkillGroupProp) {
    let key = 0;
    let transitionIndex = 0;

    let arrow = skillsShown ? 'ri-arrow-right-double-fill' : 'ri-arrow-left-double-fill'
    let arrowDir = skillsShown ? 'hover:translate-x-2' : 'hover:-translate-x-2';

    function getWidth(): string {
        if (skillsShown) return 'translateX(0)';

        const sk = document.getElementById('skills-main');
        if (sk === null) return 'translateX(0)';

        const rect = sk.getBoundingClientRect();
        const d = document.body.scrollWidth - rect.left + sk.firstElementChild!.getBoundingClientRect().width + 32; // 32 is just buffer

        return 'translateX(' + d + 'px)';
    }

    return (
        <div id="skills-main" className='flex ml-8 min-h-[270px] h-full relative'>
            <div className='text-nowrap mr-1 absolute -translate-x-full'>
                {groups.map(({ header, skills }) => (
                    <div key={key++} className="relative">
                        <div className="transition-transform ease-in-out h-4 xs:h-8" style={{transform: getWidth(), transitionDelay: transitionIndex * 25 + 'ms'}}>
                            <div className="hidden md:block h-full bg-black-main w-full fade-left scale-x-150 origin-right"></div>
                        </div>
                        <button style={{transform: getWidth(), transitionDelay: transitionIndex++ * 25 + 'ms'}} className='transition-transform ease-in-out duration-[350ms] w-full' disabled={collapsed['ignore']} onClick={() => notifyCollapse(header)}>
                            <div className="hidden md:block w-full h-full bg-black-main absolute fade-left scale-x-150 origin-right -z-10"></div>
                            <p className="text-base md:text-xl 2xl:text-4xl text-white fira-code-bold text-right">
                                {header.toUpperCase()}
                            </p>
                        </button>
                        {collapsed[header] ? <></> : skills.map(({ name, desc }) => (
                            <div key={key++} className="transition-transform ease-in-out duration-[350ms]" style={{transform: getWidth(), transitionDelay: transitionIndex++ * 25 + 'ms'}}>
                                <div className="w-full h-[calc(100%+1px)] hidden md:block bg-black-main absolute fade-left scale-x-150 origin-right -z-20"></div>
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
                    </div>
                ))}
            </div>
            <div className='h-full shrink-0 flex flex-col justify-between items-center xs:mr-8' style={{minHeight: 'inherit'}}>
                <div className="h-full bg-off-white w-0.5 flex-grow"></div>
                <button onClick={toggleSkillsShown} className={'z-50 transition-transform duration-200 ' + arrowDir}>
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
