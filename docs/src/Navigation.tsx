import { useEffect, useState } from 'react';

interface NavigationButtonConfig {
    name: string,
    highlightColor: string,
    img: string,
    translateOverride?: string,
    action: string | (() => void)
};

function NavigationButton({name, highlightColor, img, translateOverride, action} : NavigationButtonConfig) {
    translateOverride = (translateOverride !== undefined) ? translateOverride : '-translate-y-[100vh] h-[95vh]';

    function get(type: '' | '-link' | '-highlight'): HTMLElement {
        return document.getElementById('nav-' + name + type)!;
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY <= 16) get('-highlight').classList.replace('peer-hover:translate-y-11', 'peer-hover:translate-y-8');
            else get('-highlight').classList.replace('peer-hover:translate-y-8', 'peer-hover:translate-y-11');
        });
    });

    // dont seem to be able to dynamically update a jsx element, and converting to HTML element kinda defeats the purpose of JSX
    let lc = ['nav-' + name + '-link', "peer w-full text-center pt-8 -translate-y-8 absolute delay-150 cursor-pointer", name.charAt(0).toUpperCase() + name.substring(1)];
    let link: JSX.Element;
    if (typeof action === 'string') link = <a id={lc[0]} className={lc[1]} href={action as string}>{lc[2]}</a>;
    else link = <a id={lc[0]} className={lc[1]} onClick={action}>{lc[2]}</a>;

    return (
        <div id={'nav-' + name} className="w-1/3 relative flex items-center flex-col">
            {link}
            <div className={translateOverride.split(' ')[0] + " w-full origin-top relative peer-hover:-translate-y-16 transition-transform -z-10 ease-in-out duration-[400ms]"}>
                <img className={translateOverride.split(' ')[1] + " absolute -z-20 w-full object-cover fade-bottom"} src={img}/>
                <div className={translateOverride.split(' ')[1] + " w-full -z-50 absolute backdrop-blur-sm fade-bottom"}></div>
            </div>
            <div id={'nav-' + name + '-highlight'} className={highlightColor + " opacity-0 peer-hover:opacity-100 relative bottom-16 w-full h-4 peer-hover:translate-y-8 translate-y-4 duration-[350ms] transition-transform pointer-events-none"}></div>
        </div>
    );
}

export default function Navigation() {
    return (
        <div id="navigation-main" className="w-full flex mt-8 sticky top-4 z-50 select-none">
            <div className="absolute w-full top-0 h-[calc(100%+1rem+2rem)] -translate-y-8 backdrop-blur-md -z-50"></div>
            <div className="ml-8 flex gap-3 text-white translate-y-[0.075em]">
                <a><i className="ri-home-2-fill ri-xl"></i></a>
                <div className="w-[24px]"></div>
                <div className="w-[24px]"></div>
                <div className="w-[24px]"></div>
            </div>

            <div className="flex-grow h-0 min-h-full">
                <div className="flex justify-evenly text-white fira-code-font text-xl">
                    <NavigationButton name='projects' highlightColor="bg-red-main" img='moonMeshFull.png' action="https://example.com/"/>
                    <NavigationButton name='about' highlightColor="bg-purple-main" img='robotCrop.jpg' translateOverride="-translate-y-[90vh] h-[85vh]" action={() => {
                        const info = document.getElementById('information-scroll-anchor');
                        if (info !== undefined) {
                            info?.scrollIntoView({behavior: 'smooth'});
                            const link = document.getElementById('nav-about-link');
                            // "unhover" the element to hide the dropdown
                            link?.classList.remove('peer');
                            link?.addEventListener('mouseenter', () => link?.classList.add('peer'), {once: true});
                            link?.addEventListener('touchend', () => link?.classList.add('peer'), {once: true});
                        } else console.error("TODO! need to implement redirecting to index.html#information-main");
                    }}/>
                    <NavigationButton name='blog' highlightColor="bg-blue-main" img='barnesHutCrop.png' action="https://example.com/"/>
                </div>
            </div>

            <div className="flex justify-end mr-8 gap-3 text-white translate-y-[0.075em]">
                {/* ri-size does not update bounds, only the scale so have to manually offset it */}
                <a href="https://github.com/Andallfor/andallfor-home" target="_blank" title="Website Source Code"><i className="ri-code-s-slash-fill ri-xl"></i></a>
                <a href="https://github.com/Andallfor" target="_blank" title="Github"><i className="ri-github-fill ri-xl"></i></a>
                <a href="https://www.linkedin.com/in/leo-wang-765251292/" target="_blank" title="Linkedin"><i className="ri-linkedin-box-fill ri-xl"></i></a>
                <a href="mailto:leozwang2005@gmail.com" target="_blank" title="Email (Personal)"><i className="ri-mail-send-fill ri-xl"></i></a>
            </div>
        </div>
    );
}