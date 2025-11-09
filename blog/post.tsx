import React, { ReactNode } from 'react'
import Navigation from '../src/Navigation';
import Footer from '../src/Footer';

type PostType = 'book' | 'game' | 'code' | 'other';
const types: Record<PostType, string[]> = {
    'book': ['Book Review', 'ring-blue-main'],
    'game': ['Game Review', 'ring-purple-main'],
    'code': ['Programming', 'ring-red-main'],
    'other': ['Miscellaneous', 'ring-gray-main'],
};

interface postEntryData {
    abstract: string,
    title: string,
    type: PostType,
    image: string,
    redirect: string,
}

interface postData {
    title: string,
    image: string,
    type: PostType,
    metadata: ReactNode,
}

export default function PostEntry({ data }: { data: postEntryData }) {
    return (
        <div className="flex justify-center w-full">
            <div className='flex justify-center gap-5 sm:gap-20 w-[min(45rem,90%)]'>
                <img src={data.image} className={'h-[200px] sm:h-[300px] ring-4 ' + types[data.type][1]}/>
                <div className='text-white'>
                    <a className='fira-code-font md:text-2xl text-lg mt-2 font-semibold link-blue-2' href={data.redirect}>
                        {data.title}
                    </a>
                    <div className="text-content mt-4 whitespace-pre-line">{data.abstract}</div>
                    <div className="flex justify-between items-center gap-4 mt-4 w-full text-off-white text-content-sm">
                        <i>{types[data.type][0]}</i>
                        <div className="flex-grow h-[1px] bg-off-white min-w-4"></div>
                        <p>November 9, 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function PostMain({ data, children }: { data: postData, children: ReactNode }) {
    return (
        <>
            <Navigation />
            <div className='h-24'/>
            <div className='w-full flex justify-center'>
                <div className='flex justify-center w-full gap-6 md:gap-12 lg:gap-16 sm:flex-row flex-col'>
                    <div>
                        <div className='flex flex-col items-center'>
                            <img src={data.image} className={'h-[350px] lg:h-[450px] ring-4 ' + types[data.type][1]}/>
                            <div className='bg-blue-main w-min text-nowrap -translate-y-[calc(50%-1px)] px-2 text-[#b5b5b5] font-serif text-content'>{types[data.type][0]}</div>
                        </div>
                        <div className='text-[#b5b5b5] font-serif text-content-sm text-center sm:text-right'>
                            {data.metadata}
                        </div>
                    </div>
                    <div className='w-[min(500px,90%)] lg:w-[650px] text-content self-center'>
                        <p className='fira-code-font md:text-2xl text-lg font-semibold mb-2 text-white'>{data.title}</p>
                        <div className='text-[#b5b5b5] font-serif tracking-wider leading-relaxed'>{children}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export function BlockQuote({ children }: { children: ReactNode }) {
    return (
        <div className='ml-4 flex gap-4 my-4'>
            <div className='w-[1px] bg-red-main flex-shrink-0'></div>
            <div>{children}</div>
        </div>
    );
}

export function Paragraph({ children }: { children: ReactNode }) {
    return (
        <div className='my-6'>{children}</div>
    );
}

// link to footnote
export function Ftl({ i }: { i: string }) {
    return <a href={"#" + i} className='align-super leading-0 text-red-main/90 text-footnote'>{i}</a>
}

export function Footnote({ i, children }: { i: string, children: ReactNode }) {
    return (
        <div id={i} className='text-footnote flex gap-2 my-1 leading-relaxed'>
            <span>{i}.</span>
            <div>{children}</div>
        </div>
    );
}