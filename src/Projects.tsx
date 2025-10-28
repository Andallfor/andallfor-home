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
    // image, text
    let widths = img == "" ? [20, 50] : [30, 40];
    let total = widths[0] + widths[1] + 3; // 3 for gap:12

    return (
        <div className={`flex md:gap-12 justify-center flex-col items-start ` + (right ? 'md:flex-row-reverse' : 'md:flex-row')} style={{width: `min(${total}rem,90%)`}}>
            {img == "" ? <div style={{width: `min(${widths[0]}rem,100%)`}}></div> :
                (<div className="relative" style={{width: `min(${widths[0]}rem,100%)`}}>
                    <img src={img} className="ring-2 ring-red-main aspect-[20/11] object-cover w-full"/>
                    <div className={"text-footnote text-off-white w-full fira-code-font mt-2 mb-4 text-center whitespace-pre-line " + (right ? 'md:text-right' : 'md:text-left')}>  
                        {caption}
                    </div>
                </div>)}
            <div className={"h-full text-white "}
                style={{width: `min(${widths[1]}rem,100%)`}}>
                <div className="w-full flex justify-between text-off-white tracking-widest fira-code-font text-content-sm md:mt-0 mt-2 text-nowrap flex-wrap">
                    <span>&#123; {date}</span>
                    <span className="text-right flex-grow">{location} &#125;</span>
                </div>
                <div className="fira-code-font md:text-3xl text-xl mt-2">./{title}</div>
                <div className="text-content indent-6 mt-4 whitespace-pre-line">{body}</div>
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
            <Project right={true} title="TestuGo: Bluetooth Navigation and Exploration Application"
                date="Aug 2025 - Present"
                location="University of Maryland"
                skills="Android and IOS Mobile Development, Kotlin"
                img="testugo_edit.png"
                links={[]}
                body="I am working to develop TestuGo, which is a mobile application targeted towards UMD students and currently features various location-based activities, such as scavenger hunts, tours, and location-based quizzes. Our goal is to eventually convert it into a social app, allowing users to find events nearby them.
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I am working as part of the navigation team, which is responsible for much of the backend implementation of the locational activities. I created a cross-platform persistent data storage system where the current application state is written to the file system in order to persist through crashes and user quits. Additionally, I am helping develop a team-based scavenger hunt activity."
                caption="The TestuGo application logo."/>
            <div className="h-24 md:h-36"></div>
            <Project right={false} title="NOAA STAR GNSS-RO Page Development"
                date="Jun-Aug 2025"
                location="Cooperative Institute for Satellite Earth System Studies"
                skills="JavaScript, PHP, Data Visualization"
                img="gnssro_clip.png"
                links={[
                    {text: "Ground Tracker", link: "https://gpsmet.umd.edu/gnssro/ground_tracker.php"},
                    {text: "Website", link: "https://gpsmet.umd.edu/gnssro/index.php"},
                ]}
                body="During this summer internship, I worked at CISESS (a joint institute between NOAA and UMD) to extend the functionality of the GNSS-RO page. This included creating tooling to analyze ~1.6 million lines of download logs (totaling ~200 TB of downloads) to better understand our user demographic, refactoring how the codebase serves pages by allowing the server to dynamically resolve and generate the desired page rather than needing to hardcode paths, and creating a new Ground Tracker application to visualize GNSS-RO profiles.
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Ground Tracker application replaced previous tooling and offers the ability to interact with profiles in a 3D and 2D environment, filter profiles by SNR, penetration depth, time range, and GNSS. It can display upwards of 50,000 profiles at a stable FPS in a browser environment. I was awarded the Best CISESS Summer Intern Presentation award."
                caption="The 3D view in Ground Tracker showing 33,000 GNSS profiles from PlanetiQ, Spire, and COSMIC-2, colored by SNR value, Sept 8 - 11th."/>
            <div className="h-24 md:h-36"></div>
            <Project right={true} title="Radiology Pronunciation Dictionary for Foreign Speakers"
                date="Jan-Aug 2025"
                location="Commission; Virtual"
                skills="React, TypeScript, Python"
                img="prondict.png"
                links={[
                    {text: "Source Code", link: "https://github.com/Andallfor/Medical-Dictionary"},
                    {text: "Product", link: "https://andallfor.github.io/Medical-Dictionary/"},
                ]}
                body="I was commissioned to create a personalized phonetic dictionary specifically targeted towards foreign speakers and radiological terms. The central feature is a custom lexicographic engine that breaks down arbitrary words into their phonetic and stressed components, and is able to translate between IPA, Merriam-Webster, and Oxford English dictionary phonetics. By default, the application contains over 10,000 words and their definitions (scrapped from various medical textbooks), and can be easily extended by the user.
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This information is presented through a phonetic tree system that allows users to search through words based upon their pronunciation, a custom dictionary format to allow users to extend and customize the application dictionary, integrated with the Merriam-Webster dictionary to provide automatic pronunciations and definitions for undefined words, and a system to index through arbitrary text files for searched word matches. Additionally, the internal database can be modified by the user at run-time through in-program controls."
                caption="The central UI showing the text and file search, Merriam-Webster integration, and in-program controls to update the internal database."/>
            <div className="h-24 md:h-36"></div>
            <Project right={false} title="MITRE Corporation Training Platform" date="Oct-Dec 2024" location="University of Maryland"
                skills="NextJS, TailwindCSS, Typescript" img="MITRE_downscaled.jpg" links={[]}
                body="I worked with a student led team at the University of Maryland to create an internal tool for the Mitre Corporation as a frontend developer. This tool was a training platform for new employees to learn cybersecurity skills. I was responsible for creating the admin page, which was a user-friendly way to access and modify all registered employee data."
                caption="My team and I inside MITRE headquarters, after presenting our application."/>
            <div className="h-24 md:h-36"></div>
            <Project right={true} title="Barnes-Hut Simulation" date="Aug 2024" location="Personal Project"
                skills="C++, Dear ImGui" img="barnesHut.png" links={[
                    {text: "Source Code", link: "https://github.com/Andallfor/Barnes-Hut-Simulation"},
                ]}
                body="A performant N-body simulation using the Barnes-Hut algorithm, developed in C++ with Dear ImGui as the visual display. Optimizations include leapfrog integration, incremental center of mass calculations, stellar body caching (in addition to base quad-tree access), and tail recursion."
                caption="Two galaxies colliding (15,000 stars)."/>
            <div className="h-24 md:h-36"></div>
            <div className="flex gap-16 w-[min(75rem,90%)] items-center">
                <div className="bg-off-white flex-grow h-[1px]"></div>
                <div className="text-off-white fira-code-font text-header">High School</div>
                <div className="bg-off-white flex-grow h-[1px]"></div>
            </div>
            <div className="h-24 md:h-36"></div>
            <Project right={false} title="Mission Visualization Toolkit" date="2021-23" location="NASA Goddard Space Flight Center"
                skills="C#, Python, Unity" img="jp2.png" links={[
                    {text: "Source Code", link: "https://github.com/Andallfor/MVT"},
                    {text: "Paper", link: "https://ieeexplore.ieee.org/document/10521148"},
                ]}
                body="I led a team of 5 other interns as the lead developer to create the Mission Visualization Toolkit (MVT, also referred to as LATTE for the current version). This project was a scientific simulation of various planetary ground stations, their surrounding terrain, and orbiting satellites. This was used for the generation of connection windows (when a ground station can communicate to a satellite), which are then translated into optimized communication schedules that prioritizes high-importance satellites. The project was created over my 3 year NASA internship."
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
