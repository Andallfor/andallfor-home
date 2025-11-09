import { useEffect } from 'react';

interface NavigationButtonConfig {
    name: string,
    highlightColor: string,
    redirect: string,
};

function NavigationButton({name, highlightColor, redirect} : NavigationButtonConfig) {
    function get(type: '' | '-link' | '-highlight'): HTMLElement {
        return document.getElementById('nav-' + name + type)!;
    }

    let lc = ['nav-' + name + '-link', "peer w-full text-center absolute delay-150 cursor-pointer", name.charAt(0).toUpperCase() + name.substring(1)];
    return (
        <div id={'nav-' + name} className="flex-grow relative flex items-center flex-col">
            <a id={lc[0]} className={lc[1]} href={redirect}>{lc[2]}</a>
            <div className='absolute w-full h-full bg-red-500'></div>
            <div id={'nav-' + name + '-highlight'} className='relative peer-hover:translate-y-11 translate-y-4 duration-[350ms] transition-transform pointer-events-none opacity-0 peer-hover:opacity-100 bottom-16 w-full z-50 hidden sm:block'>
                <div className='absolute flex w-full justify-center'>
                    <div className={highlightColor + " absolute md:max-w-[50vw] w-screen 2xl:w-full h-4"}></div>
                </div>
            </div>
        </div>
    );
}

export default function Navigation() {
    return (
        <div id="navigation-main" className="w-full flex sticky top-4 z-[100] select-none">
            <div className="absolute w-full top-4 sm:top-0 h-[calc(100%+1rem+2rem)] -translate-y-8 backdrop-blur-md -z-50"></div>
            <div className="ml-6 md:ml-8 hidden xs:flex gap-3 text-white translate-y-[0.075em]">
                <button onClick={() => {
                    if (window.location.pathname == "/") {
                        const anchor = document.getElementById('landing-main');
                        anchor?.scrollIntoView({behavior: 'smooth'});
                    } else {
                        const url = new URL(window.location.toString());
                        url.pathname = "/";
                        url.search = "";
                        url.hash = "";
                        window.location.replace(url);
                    }
                }}><i className="ri-home-2-fill ri-lg md:ri-xl"></i></button>
                <div className="md:block hidden w-[24px]"></div>
                <div className="md:block hidden w-[24px]"></div>
                <div className="md:block hidden w-[24px]"></div>
            </div>

            <div className="flex-grow h-0 min-h-full">
                <div className="flex justify-evenly text-white fira-code-font text-sm sm:text-lg md:text-xl mr-4 ml-4">
                    <NavigationButton name='about' highlightColor="bg-[#3b1725]" redirect="/#about"/>
                    <NavigationButton name='projects' highlightColor="bg-[#73172d]" redirect="/#projects"/>
                    <NavigationButton name='contact' highlightColor="bg-[#b4202a]" redirect="/#contact"/>
                    <NavigationButton name='blog' highlightColor="bg-[#df3e23]" redirect="/blog/"/>
                </div>
            </div>

            <div className="justify-end mr-6 md:mr-8 gap-1 md:gap-3 text-white translate-y-[0.075em] hidden xs:flex">
                <div className="md:block hidden w-[24px]"></div>
                {/* ri-size does not update bounds, only the scale so have to manually offset it */}
                <a href="https://github.com/Andallfor/andallfor-home" target="_blank" title="Website Source Code"><i className="ri-code-s-slash-fill ri-lg md:ri-xl"></i></a>
                <a href="https://github.com/Andallfor" target="_blank" title="Github"><i className="ri-github-fill ri-lg md:ri-xl"></i></a>
                <a href="https://www.linkedin.com/in/leo-z-wang" target="_blank" title="Linkedin"><i className="ri-linkedin-box-fill ri-lg md:ri-xl"></i></a>
                <a href="mailto:leozwang2005@gmail.com" target="_blank" title="Email (Personal)"><i className="ri-mail-send-fill ri-lg md:ri-xl"></i></a>
            </div>
            <div className=''></div>
        </div>
    );
}
