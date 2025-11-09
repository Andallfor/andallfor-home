import DogImageCarousel from "./random";
import React from 'react'
import '/index.css'

export default function BlogHome() {
    return (
        <>
            <div className="flex justify-center absolute -z-50 -translate-y-32">
                <img src="/elitedangerous2.jpg" className="object-cover h-[1200px] -z-50 select-none" style={{filter: 'brightness(80%)'}}/>
            </div>
            <div className="absolute right-0 top-[80px] text-off-white text-right mb-4 mr-4 text-2xs sm:text-xs leading-leading fira-code-font">
                <p>Image taken in <a className="link-red" target='_blank' href="https://store.steampowered.com/app/359320/Elite_Dangerous/">Elite Dangerous</a> by me.</p>
            </div>
            <div className="flex justify-center w-full mt-32">
                <div className="flex justify-center w-[90%] gap-4 lg:gap-16">
                    <div className="md:block hidden">
                        <DogImageCarousel />
                    </div>
                    <div className="flex flex-col gap-4 w-full max-w-[1024px]">
                        <p className="text-3xl sm:text-4xl 2xl:text-6xl text-white fira-code-font align-text-bottom mt-4 ml-2 mr-2">/mnt/c/BLOG</p>
                        <div className="bg-black-main/30 w-full h-full rounded-sm text-white relative backdrop-blur-[2px]">
                            <div className="pl-4 pr-4 pt-4 pb-2 text-content tracking-wide leading-normal">
                                <div className='indent-6'>
                                    This is a dumping place for any stray thoughts or considerations I think are worth sharing, for both the STEM and the humanity fields (or really anything else that may come up). As with most things, I'll add to this blog when I get the motivation for it - so don't expect anything consistent. Opinions are mine alone.
                                </div>
                                <br/>
                                <p className="font-semibold">Book/Game Reviews</p>
                                <div className='indent-6'>
                                    As a disclaimer, I am very much <i>not</i> a humanities major, so some posts may veer into incoherent rambling or otherwise. Hopefully I haven't gotten anything (too) egregiously wrong. <span className='font-semibold link-purple-2'>Book reviews will contain spoilers</span> as they are meant to be a discussion of the piece. However, <span className='font-semibold link-purple-2'>game reviews will not contain spoilers</span> and are meant to be a recommendation system (and so will be rated).
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}