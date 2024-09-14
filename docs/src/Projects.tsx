interface ProjectProps {
    skills: string,
    title: string,
    date: string,
    location: string,
    body: string,
    img: string,
    links: ProjectLink[],
}

interface ProjectLink {
    text: string,
    link: string,
}

function Project({ skills, title, date, location, body, img, links }: ProjectProps) {
    return (
        <div className="w-[min(80rem,90%)] flex justify-center md:gap-8 flex-col md:flex-row items-center">
            <div className="w-[min(30rem,100%)]">
                <img src={img} className="ring-2 ring-red-main"/>
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
                        {links.map(({ text, link }) => <a className="link-red-2 font-semibold mr-4" href={link} target="_blank">{text}</a>)}
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
        <div className="flex justify-center w-full">
            <Project title="Mission Visualization Toolkit" date="2021-23" location="NASA Goddard Space Flight Center"
                     skills="C#, HLSL, Python, Unity" img="MVTDownscale.png" links={[
                        {text: "Source Code", link: "https://github.com/Andallfor/MVT"},
                        {text: "Paper", link: "https://ieeexplore.ieee.org/document/10521148"},
                    ]}
                     body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur enim nec elit porta, vitae ornare ipsum tempor. Aliquam tortor purus, suscipit eget facilisis scelerisque, porta nec erat. Maecenas pulvinar magna mauris, quis dapibus nisl consequat vel.">
            </Project>
        </div>
    );
}
