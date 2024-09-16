interface ProjectProps {
    skills: string,
    title: string,
    date: string,
    location: string,
    body: string,
    img: string,
    links: ProjectLink[],
    right: boolean,
    caption: string
};

interface ProjectLink {
    text: string,
    link: string,
};

function Project({ skills, title, date, location, body, img, links, right, caption }: ProjectProps) {
    let key = 0;
    return (
        <div className={"w-[min(80rem,90%)] flex justify-center md:gap-12 flex-col items-start " + (right ? 'md:flex-row-reverse' : 'md:flex-row')}>
            <div className="w-[min(30rem,100%)] relative">
                <img src={img} className="ring-2 ring-red-main aspect-[20/11] object-cover w-full"/>
                <div className={"text-footnote text-off-white w-full fira-code-font mt-2 mb-4 text-center whitespace-pre-line " + (right ? 'md:text-right' : 'md:text-left')}>  
                    {caption}
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
                    <div className="flex-grow h-[1px] bg-off-white mr-4 min-w-4"></div>
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
            <Project right={true} title="Barnes-Hut Simulation" date="Aug 2024" location="Personal Project"
                skills="C++, Dear ImGui" img="barnesHut.png" links={[
                    {text: "Source Code", link: "https://github.com/Andallfor/Barnes-Hut-Simulation"},
                ]}
                body="A performant N-body simulation using the Barnes-Hut algorithm, developed in C++ with Dear ImGui as the visual display. Optimizations include leapfrog integration, incremental center of mass calculations, stellar body caching (in addition to base quad-tree access), and tail recursion."
                caption="Two galaxies colliding (15,000 stars)."/>
            <div className="h-24 md:h-36"></div>
            <Project right={false} title="Mission Visualization Toolkit" date="2021-23" location="NASA Goddard Space Flight Center"
                skills="C#, Python, Unity" img="jp2.png" links={[
                    {text: "Source Code", link: "https://github.com/Andallfor/MVT"},
                    {text: "Paper", link: "https://ieeexplore.ieee.org/document/10521148"},
                ]}
                body="The Mission Visualization Toolkit (MVT, also referred to as LATTE for the current version). I led the team as the head developer to create a scientific simulation of various planetary ground stations, their surrounding terrain, and orbiting satellites. This was used for the generation of connection windows (when a ground station can communicate to a satellite), which are then translated into optimized communication schedules that prioritizes high-importance satellites. This project was created over my 3 year NASA internship."
                caption="Close up of Canberra Deep Space Communications Complex.&#13;&#10;30 meter resolution, ~10 million points In view."/>
            <div className="h-24 md:h-36"></div>
            <Project right={true} title="Robotics Team Website" date="Aug-Dec 2023" location="Virtual"
                skills="JavaScript, TailwindCSS" img="roboWebsite1.png" links={[
                    {text: "Source Code", link: "https://github.com/Andallfor/metalPipeWebsite"},
                    {text: "Website", link: "https://teammetalpipe.org/"},
                ]}
                body="Robotics team website solo developed with Javascript and TailwindCSS. Served as a public portal for donations, a blog, and general information regarding our season."
                caption="Third body section in the main page, showcasing our lift stages."/>
            <div className="h-24 md:h-36"></div>
            <Project right={false} title="NASA App Development Challenge" date="Sep-Dec 2022" location="Virtual"
                skills="C#, Unity" img="JP2_ADC_1.png" links={[
                    {text: "Source Code", link: "https://github.com/Andallfor/NASA-ADC-2022"},
                ]}
                body="I led a team of 10 others to compete in NASA's 2022 App Development Challenge. The challenge was a multi-dimensional pathfinding optimization problem across a select number of lunar craters. My team accomplished not only this but was also able to extend rendering support to the entire lunar surface, albeit with reduced resolution and lowered pathfinding ability."
                caption="Unlit surface render of the moon, photographed from within the project."/>
        </div>
    );
}
