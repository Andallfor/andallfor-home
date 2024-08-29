function Skills() {
    return (
        <div className="">
            <p className="text-7xl text-white fira-code-font text-right">SKILLS</p>
            <div>
                <p className="text-2xl text-off-white text-right">
                <i className="ri-arrow-down-s-line"></i>
                High-Performance Computing
                </p>
                <p className="text-2xl text-off-white text-right">
                <i className="ri-arrow-down-s-line"></i>
                Scientific Simulations
                </p>
            </div>
            <p className="text-7xl text-white fira-code-font text-right mt-4">PLATFORMS</p>
            <p className="text-2xl text-off-white text-right">
                <i className="ri-arrow-down-s-line"></i>
                C#
            </p>
            <p className="text-2xl text-off-white text-right">
                <i className="ri-arrow-down-s-line"></i>
                TailwindCSS
            </p>
        </div>
    );
}

// bro am i doing something wrong???
interface ContactLinkProp {
    links: ContactLink[];
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
function About({links}: ContactLinkProp) {
    return (
        <div className="flex-grow flex flex-col gap-4">
            <div>
                <p className="text-7xl text-white fira-code-font">ABOUT</p>
                <div className="flex justify-between mt-4 gap-8">
                <div className="flex-grow-[0.25] w-0">
                    <img src="self.jpg"/>
                    <div className="absolute mt-4 leading-relaxed text-white text-md tracking-wide">
                        {links.map(({ id, icon, title, newSection }) => (
                            <ContactLinkTitle key={id} icon={icon} title={title} newSection={newSection}></ContactLinkTitle>
                        ))}
                    </div>
                </div>
                <div className="flex-grow-[0.75]">
                    <div className="backdrop-blur-sm bg-black-main/30 w-full h-full rounded-md text-white">
                        <div className="ml-4 mt-2 text-lg absolute">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu lorem finibus, ultrices dui id, cursus ante. Sed cursus cursus dui, et luctus eros dictum vel. Morbi eget eros at turpis auctor aliquam eu dignissim metus. Quisque facilisis euismod mauris nec sodales. Proin tristique massa feugiat, mattis velit a, imperdiet est. Vestibulum accumsan convallis dolor id porttitor. Duis ultricies, felis vel congue gravida, urna neque pretium urna, ac malesuada turpis odio et nisl. Aliquam fermentum pulvinar ex id semper. Sed vel elit porttitor, vestibulum libero sed, mollis lorem. In hac habitasse platea dictumst. Integer gravida dui ipsum, vel vulputate arcu convallis nec. Nulla aliquam mattis elit quis semper. In suscipit volutpat posuere. Donec justo orci, finibus in placerat in, vehicula vel turpis.
                            <br/><br/><br/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu lorem finibus, ultrices dui id, cursus ante. Sed cursus cursus dui, et luctus eros dictum vel. Morbi eget eros at turpis auctor aliquam eu dignissim metus. Quisque facilisis euismod mauris nec sodales. Proin tristique massa feugiat, mattis velit a, imperdiet est.
                        </div>
                    </div>
                    <div className="relative mt-4 leading-relaxed text-white text-md tracking-wide w-0 min-w-full">
                        {links.map(({ id, url, urlCover, newSection }) => (
                            <ContactLinkBody key={id + links.length} url={url} urlCover={urlCover} newSection={newSection}></ContactLinkBody>
                        ))}
                    </div>
                </div>
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

    return (
         <div className="w-full flex justify-center mt-16">
            <div className="w-[90%] max-w-[1920px] flex gap-8 justify-between">
               <About links={li}></About>
               <div className="h-full bg-white w-1"></div>
               <Skills></Skills>
            </div>
         </div>
    );
}