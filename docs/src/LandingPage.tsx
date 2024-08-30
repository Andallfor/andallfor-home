export default function LandingPage() {
    return (
        <div id="landing-main" className="flex h-screen flex-col justify-between -mt-16">
            <div></div>
            <div className="bottom-[20vh] origin-bottom flex justify-center w-full relative items-center flex-col -z-20">
                <div className="text-white text-6xl text-center dm-mono-light">Leo Wang</div>
                <div className="text-off-white mt-5 tracking-[0.15em]">Exploring the cosmos, one register at a time.</div>
                <div className="absolute mt-[48rem] overflow-clip -z-50">
                    <img src="galaxy.png" className="h-[990px] object-cover -z-50 select-none"/>
                </div>
                <img className="absolute top-[500px] min-w-[1248px] select-none" src="masked.png"/>
            </div>
            <div className="flex justify-center w-full relative items-center">
                <div className="absolute right-0 bottom-0 text-off-white text-right mb-4 mr-4 text-xs leading-leading fira-code-font">
                    <p><a className="link-red" target='_blank' href="https://github.com/Andallfor/NASA-ADC-2022">Moon simulation</a> by me.</p>
                    <p><a className="link-red" target='_blank' href="https://www.eso.org/public/images/eso0932a/">Credit: ESO/S. Brunier</a> for Milky Way panorama.</p>
                    <p><a className="link-red" target='_blank' href="https://github.com/Andallfor/andallfor-home">Site</a><span> built from scratch using </span>
                        <a className="link-red" target='_blank' href="https://react.dev/">React-ts</a><span>, </span>
                        <a className="link-red" target='_blank' href="https://tailwindcss.com/">TailwindCSS</a><span>, and </span>
                        <a className="link-red" target='_blank' href="https://vitejs.dev/">Vite</a>.</p>
                </div>
            </div>
        </div>
    );
}