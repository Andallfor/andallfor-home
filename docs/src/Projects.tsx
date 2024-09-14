interface ProjectProps {
    skills: string,
    title: string,
    date: string,
    location: string,
    body: string,
    img: string,
    links: ProjectLink[],
    right: boolean,
    imgDesc: string
};

interface ProjectLink {
    text: string,
    link: string,
};

function Project({ skills, title, date, location, body, img, links, right, imgDesc }: ProjectProps) {
    let key = 0;
    return (
        <div className={"w-[min(80rem,90%)] flex justify-center md:gap-12 flex-col items-start " + (right ? 'md:flex-row-reverse' : 'md:flex-row')}>
            <div className="w-[min(30rem,100%)] relative">
                <img src={img} className="ring-2 ring-red-main relative"/>
                <div className={"text-footnote text-off-white w-full fira-code-font mt-2 mb-4 text-center " + (right ? 'md:text-right' : 'md:text-left')}>  
                    {imgDesc}
                </div>
            </div>
            <div className="w-[min(35rem,100%)] h-full text-white">
                <div className="w-full flex justify-between text-off-white tracking-widest fira-code-font text-content-sm md:mt-0 mt-2 text-nowrap">
                    <p>&#123; {date}</p>
                    <div className="w-4"></div>
                    <p>{location} &#125;</p>
                </div>
                <div className="fira-code-font md:text-4xl text-2xl mt-2">./{title}</div>
                <div className="text-content indent-6 mt-4">{body}</div>
                <div className="flex justify-between w-full text-off-white text-content-sm mt-4 items-center">
                    <div>
                        {links.map(({ text, link }) => <a key={key++} className="link-red-2 font-semibold mr-4" href={link} target="_blank">{text}</a>)}
                    </div>
                    <div className="flex-grow h-[1px] bg-off-white mr-4"></div>
                    <p>{skills}</p>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    return (
        <div className="flex justify-center w-full flex-col items-center">
            <div id="projects-scroll-anchor" className="md:mt-44 mt-12 h-20"></div>
            <p className="text-4xl sm:text-5xl 2xl:text-6xl text-white fira-code-font md:mb-32 mb-16">D:\PROJECTS</p>
            <Project right={false} title="Mission Visualization Toolkit" date="2021-23" location="NASA Goddard Space Flight Center"
                skills="C#, HLSL, Python, Unity" img="jp2.png" links={[
                    {text: "Source Code", link: "https://github.com/Andallfor/MVT"},
                    {text: "Paper", link: "https://ieeexplore.ieee.org/document/10521148"},
                ]}
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur enim nec elit porta, vitae ornare ipsum tempor. Aliquam tortor purus, suscipit eget facilisis scelerisque, porta nec erat. Maecenas pulvinar magna mauris, quis dapibus nisl consequat vel."
                imgDesc="Close Up of Canberra Deep Space Communications Complex&#13;&#10;30 Meter Resolution, ~10 Million Points In View"/>
            <div className="h-24"></div>
            <Project right={true} title="Mission Visualization Toolkit" date="2021-23" location="NASA Goddard Space Flight Center"
                skills="C#, HLSL, Python, Unity" img="jp2.png" links={[
                    {text: "Source Code", link: "https://github.com/Andallfor/MVT"},
                    {text: "Paper", link: "https://ieeexplore.ieee.org/document/10521148"},
                ]}
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur enim nec elit porta, vitae ornare ipsum tempor. Aliquam tortor purus, suscipit eget facilisis scelerisque, porta nec erat. Maecenas pulvinar magna mauris, quis dapibus nisl consequat vel."
                imgDesc="Close Up of Canberra Deep Space Communications Complex&#13;&#10;30 Meter Resolution, ~10 Million Points In View"/>
        </div>
    );
}
