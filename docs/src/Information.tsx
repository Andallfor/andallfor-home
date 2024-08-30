import { useEffect } from 'react';

function Skills() {
    return (
        <div className="text-nowrap">
            <p className="text-5xl text-white fira-code-font text-right">SKILLS</p>
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
            <p className="text-5xl text-white fira-code-font text-right mt-4">PLATFORMS</p>
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
        <div id="information-main" className="flex flex-col gap-4">
            <p className="text-8xl text-white fira-code-font align-text-bottom">ABOUT</p>
            <div className='grid grid-cols-2 grid-flow-row-dense mt-4 gap-4' style={{gridTemplateRows: '1fr auto', gridTemplateColumns: '1fr 3fr'}}>
                <img src="self.jpg"/>
                <div className="backdrop-blur-sm bg-black-main/30 w-full h-full rounded-md text-white relative">
                    <div className="pl-4 pr-4 pt-2 pb-2 text-xl tracking-wide leading-normal">
                        <p className='font-semibold'>Hello! Thanks for stopping by!</p><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;My name is Leo Wang, an undergraduate studying computer science at the <a href="https://umd.edu/" className="font-semibold link-blue-2">University of Maryland, College Park</a> as part of the <a href="https://aces.umd.edu/" className="font-semibold link-blue-2">Advanced Cybersecurity Experience (ACES)</a> Honors College. I have the most experience in high-performance scientific simulations and large scale (billions (!)) data processing/visualization, especially as a result of my <a href='https://github.com/Andallfor/MVT' className='font-semibold link-blue-2'>3 year long internship with NASA</a>. I primarily work with C#, though I also have experience with TypeScript, C++, and Java.
                        <br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;Outside of programming, I enjoy metal model building (the Metal Earth series is great!), astronomy, and reading. Currently, my favorite book is <a href='https://en.wikipedia.org/wiki/Babel,_or_the_Necessity_of_Violence' className='font-semibold link-blue-2 italic'>Babel, or the Necessity of Violence</a> by R.F. Kuang - I cannot recommend this book enough if you are into fantasy with elements of social commentary. Otherwise, I like to spend my time looking at pictures of my dogs.
                        <br/><br/>
                        <div className="w-5/6 text-right">- Leo Wang</div>
                    </div>
                </div>
                <div id="information-contact-link-header" className="mt-4 leading-relaxed text-white text-md tracking-wide">
                    {links.map(({ id, icon, title, newSection }) => (
                        <ContactLinkTitle key={id} icon={icon} title={title} newSection={newSection}></ContactLinkTitle>
                    ))}
                </div>
                <div id="information-contact-link-body" className="mt-4 leading-relaxed text-white text-md tracking-wide w-0 min-w-full">
                    {links.map(({ id, url, urlCover, newSection }) => (
                        <ContactLinkBody key={id + links.length} url={url} urlCover={urlCover} newSection={newSection}></ContactLinkBody>
                    ))}
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
               <div className="h-full bg-white w-0.5 shrink-0"></div>
               <Skills></Skills>
            </div>
         </div>
    );
}