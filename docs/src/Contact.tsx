import { useLayoutEffect, useState } from "react";

interface ContactLinkTitleConfig { icon: string, title: string, newSection: boolean }
interface ContactLinkBodyConfig { url: string, urlCover: string, newSection: boolean }

function ContactLinkTitle({icon, title, newSection}: ContactLinkTitleConfig) {
    if (newSection) return (<div className="mt-4"><i className={icon + " ri-lg mr-2"}></i><span>{title}:</span></div>);
    else return (<div><i className={icon + " ri-lg mr-2"}></i><span>{title}:</span></div>);
}

function ContactLinkBody({url, urlCover, newSection}: ContactLinkBodyConfig) {
    if (newSection) return (<div className="mt-4">"<a className="link-red-2" target="_blank" href={url}>{urlCover}</a>",</div>);
    else return (<div>"<a className="link-red-2" target="_blank" href={url}>{urlCover}</a>",</div>);
}

function useWindowSize() {
    // https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

export default function Contact() {
    const [width, height] = useWindowSize();

    const links = [
        {id: 0, icon: 'ri-mail-star-fill',     title: 'Personal Email', url: 'mailto:leozwang2005@gmail.com',          urlCover: 'leozwang2005@gmail.com',      newSection: false},
        {id: 1, icon: 'ri-mail-fill',          title: 'College Email',  url: 'mailto:leowang@terpmail.umd.edu',        urlCover: 'leowang@terpmail.umd.edu',    newSection: false},
        {id: 2, icon: 'ri-github-fill',        title: 'Github',         url: 'https://github.com/Andallfor',           urlCover: 'github.com/Andallfor',        newSection: true },
        {id: 3, icon: 'ri-linkedin-box-fill',  title: 'LinkedIn',       url: 'https://www.linkedin.com/in/leo-z-wang', urlCover: 'linkedin.com/in/leo-z-wang/', newSection: true },
        {id: 4, icon: 'ri-file-list-2-fill',   title: 'Resume',         url: 'software_resume.pdf',                    urlCover: 'Download',                    newSection: false}
    ];

    return (
        <div>
            <div className="flex justify-center w-full flex-col items-center">
                <div id="contact-scroll-anchor" className="md:mt-44 mt-12 h-20"></div>
                <p className="text-4xl sm:text-5xl 2xl:text-6xl text-white fira-code-font md:mb-20 mb-8">H:\CONTACT</p>
                <div className="flex w-full justify-center text-nowrap  text-white text-content fira-code-font">
                    {window.innerWidth < 400 ? 
                        <div className="w-full flex justify-center">
                            <div>
                                <p className="text-off-white">&#123;</p>
                                <div className="ml-8">
                                    {links.map(({ id, url, urlCover, icon, title }) => (
                                        <>
                                            <ContactLinkTitle key={id} icon={icon} title={title} newSection={false}></ContactLinkTitle>
                                            <div className="ml-8"><ContactLinkBody key={id + links.length} url={url} urlCover={urlCover} newSection={false}></ContactLinkBody></div>
                                            <div className="h-2"></div>
                                        </> 
                                    ))}
                                </div>
                                <p className="text-off-white">&#125;;</p>
                            </div>
                        </div>
                     : 
                        <div className="w-full max-w-[600px] flex justify-between m-6">
                            <div>
                                <p className="text-off-white">&#123;</p>
                                <div className="ml-4 md:ml-12">
                                    {links.map(({ id, icon, title, newSection }) => (
                                        <ContactLinkTitle key={id} icon={icon} title={title} newSection={newSection}></ContactLinkTitle>
                                    ))}
                                </div>
                                <p className="text-off-white">&#125;;</p>
                            </div>
                            <div>
                                <br/>
                                {links.map(({ id, url, urlCover, newSection }) => (
                                    <ContactLinkBody key={id + links.length} url={url} urlCover={urlCover} newSection={newSection}></ContactLinkBody>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}