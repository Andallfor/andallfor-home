import Brief from "./Brief"

export function Lng_CSharp() {
    return (
        <div>
            <Brief data={[
                {title: 'experience', desc: '4+ Years'},
                {title: 'skill', desc: 'Advanced'},
                {title: 'platforms', desc: '.NET, Unity'},
            ]}></Brief>
            <div className="indent-6">
                <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" className="link-blue-2 font-semibold">C#</a> is my strongest language; I have been developing with it for over 4 years (since 2020!). The majority of my experience is based within the <a href="https://unity.com/" target="_blank" className="link-blue-2 font-semibold">Unity ecosystem</a>, though I have basic <a href="https://dotnet.microsoft.com/en-us/" target="_blank" className="link-blue-2 font-semibold">.NET experience</a>. I have a deep understanding of both high level topics (LINQ, generics, tasks/async, dynamic types, etc) and low level topics (unsafe keyword, .dll linking, pointers, preprocessor directives, etc).
            </div><br/>
            <div className="indent-6">
                Currently, my largest project with C# is the <a target="_blank" className="link-red-2 font-semibold" href="https://github.com/Andallfor/MVT">planetary terrain and orbiting bodies simulation</a> I created for NASA. This project uses highly optimized C# code to read in exceedingly large amounts of data (hundreds of millions to billions of points), then is able to communicate to various external processes (such as the <a href="https://docs-alpha.unity3d.com/Manual/class-ComputeShader.html" className="link-blue-2 font-semibold" target="_blank">GPU/compute shaders</a> or the C++ based <a href="https://github.com/takuya-takeuchi/OpenJpegDotNet" className="font-semibold link-blue-2" target="_blank">OpenJPEG2000 format parser</a>) and transfer and receive data.
            </div><br/>
            <div className="indent-6">
                I additionally used C# to implement a client-server architecture for the aforementioned project using the Unity <a href="https://github.com/MirrorNetworking/Mirror" className="font-semibold link-blue-2" target="_blank">Mirror networking library</a> to communicate between the server hosted on an <a href="https://aws.amazon.com/ec2/" className="link-blue-2 font-semibold" target="_blank">AWS EC2 instance</a> and the <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API" className="link-blue-2 font-semibold" target="_blank">WebGL-based</a> client portal.
            </div><br/>
            <div className='font-semibold'>Related Projects:
                <p className='indent-6'>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://github.com/Andallfor/MVT' target='_blank' className='link-red-2'>NASA Project</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://github.com/Andallfor/NFA-To-DFA' target='_blank' className='link-red-2'>NFA to DFA Converter</a><sup>1</sup>
                </p>
            </div><br/>
            <div className='text-footnote'>
                1 Non-finite automata to deterministic finite automata.
            </div>
        </div>
    );
}

export function Lng_Python() {
    return (
        <div>
            <Brief data={[
                {title: 'experience', desc: '6+ Years'},
                {title: 'skill', desc: 'Advanced'},
                {title: 'platforms', desc: 'Anaconda, Pip'}
            ]}></Brief>
            <div className="indent-6">
                <a href="https://www.python.org/" target="_blank" className="link-blue-2 font-semibold">Python</a> is the first language I learned, and similarly also the language I have been actively using the longest. Although I primarily use it for personal projects/R&D, I have strong experience in many common libraries. The main libraries I use are <a className="link-blue-2 font-semibold" target="_blank" href="https://opencv.org/">OpenCV</a> and <a className="link-blue-2 font-semibold" target="_blank" href="https://numpy.org/">Numpy</a>.
            </div><br/>
            <p>Among the libraries I know, the most notable are:</p>
            <div className='list-hanging'>- Scientific: <a className="link-blue-2 font-semibold" target="_blank" href="https://www.tensorflow.org/">Tensorflow</a>, <a className="link-blue-2 font-semibold" target="_blank" href="https://scikit-learn.org/stable/">SciKit-Learn</a>, <a className="link-blue-2 font-semibold" target="_blank" href="https://scikit-image.org/">SciKit-Image</a>, <a className="link-blue-2 font-semibold" target="_blank" href="https://glymur.readthedocs.io/en/latest/introduction.html">Glymur</a>, <a className="link-blue-2 font-semibold" target="_blank" href="https://pypi.org/project/pytesseract/">PyTesseract</a></div>
            <div className='list-hanging'>- Computational: <a className="link-blue-2 font-semibold" target="_blank" href="https://opencv.org/">OpenCV</a>, <a className="link-blue-2 font-semibold" target="_blank" href="https://numpy.org/">Numpy</a>, <a className="link-blue-2 font-semibold" target="_blank" href="https://pandas.pydata.org/">Pandas</a>, <a className="link-blue-2 font-semibold" target="_blank" href="https://matplotlib.org/">Matplotlib</a></div>
            <div className='list-hanging'>- Web/Other: <a className="link-blue-2 font-semibold" target="_blank" href="https://www.selenium.dev/">Selenium</a>, <a className="link-blue-2 font-semibold" target="_blank" href="https://www.crummy.com/software/BeautifulSoup/">BeautifulSoup</a>, <a className="link-blue-2 font-semibold" target="_blank" href="https://docs.python.org/3/library/tkinter.html">Tkinter</a></div><br/>
            <p>Some of the noteworthy projects I have completed include:</p>
            <div className='list-hanging'>1. A <a href="https://github.com/Andallfor/RPS" target="_blank" className="link-red-2 font-semibold">relative positioning system</a> (RPS) that could detect and determine the distance to a set of known objects from a video frame,</div>
            <div className='list-hanging'>2. A <a href="https://github.com/Andallfor/infoBot" target="_blank" className="link-red-2 font-semibold">Discord bot</a> that scrapped and stored 300k+ messages and then was able to display various pieces of information (server message patterns, user common phrases, etc) in realtime.</div><br/>
            <div className='font-semibold'>Related Projects:
                <p className='indent-6'>
                    <a href='https://github.com/Andallfor/RPS' target='_blank' className='link-red-2'>RPS</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://github.com/Andallfor/infoBot' target='_blank' className='link-red-2'>Discord Bot</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://github.com/Andallfor/bombparty-bot' target='_blank' className='link-red-2'>Bombparty Game Bot</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://github.com/Andallfor/pythonista-text-engine' target='_blank' className='link-red-2'>Text Engine</a>
                </p>
            </div>
        </div>
    );
}

export function Lng_CPlusPlus() {
    return (
        <div>
            <Brief data={[
                {title: 'experience', desc: '1+ Years'},
                {title: 'skill', desc: 'Intermediate'},
                {title: 'platforms', desc: 'Visual Studio, GCC'},
            ]}></Brief>
            <div className="indent-6">
                I starting learning <a className="link-blue-2 font-semibold" target="_blank" href="https://cplusplus.com/">C++</a> from the John Hopkins <a className="link-blue-2 font-semibold" target="_blank" href="https://e-catalogue.jhu.edu/course-descriptions/computer_science_601/">Intermediate Programming</a> class (teaching data structures and C/C++), in which I received in A+. Between the class and working on my own personal projects, I have gained experience using features such as memory management, structs, templates, and function pointers. Currently, I am enrolled in UMD's <a className="link-blue-2 font-semibold" target="_blank" href="https://academiccatalog.umd.edu/undergraduate/approved-courses/cmsc/">CMSC 216</a>, teaching introductory computer systems, C, and assembly programming.
            </div><br/>
            <div className="indent-6">
                Outside of college, the largest project I have done is my <a href='https://github.com/Andallfor/Barnes-Hut-Simulation' target='_blank' className='link-red-2'>Barnes-Hut simulation</a>, which implements the Barnes-Hut algorithm to efficiently simulate the N-body problem. The algorithm uses a quadtree to simplify gravitational force calculations, with some extra optimizations added by me. These include <a href='https://en.wikipedia.org/wiki/Leapfrog_integration' target='_blank' className='link-blue-2'>leapfrog integration</a>, <a href='https://en.wikipedia.org/wiki/Tail_call' target='_blank' className='link-blue-2'>tail recursion</a>, and planetary body caching. Currently, it is able to simulate some 15,000 bodies with an average frame time of 230ms.
            </div><br/>
            <div className='font-semibold'>Related Projects:
                <p className='indent-6'>
                    <a href='https://github.com/Andallfor/Barnes-Hut-Simulation' target='_blank' className='link-red-2'>Barnes-Hut Simulation</a>
                </p>
            </div>
        </div>
    );
}

export function Lng_JSTS() {
    return (
        <div>
            <Brief data={[
                {title: 'experience', desc: '2+ Years'},
                {title: 'skill', desc: 'Intermediate'},
                {title: 'platforms', desc: 'TailwindCSS, React'},
            ]}></Brief>
            <div className="indent-6">
                I routinely use a mixture of <a href="https://www.typescriptlang.org/" target="_blank" className="link-blue-2 font-semibold">TypeScript</a> and <a href="https://www.javascript.com/" target="_blank" className="link-blue-2 font-semibold">JavaScript</a> (though I prefer TypeScript) primarily for website-based projects. For larger projects, I typically use TypeScript/<a href="https://www.typescriptlang.org/docs/handbook/jsx.html" target="_blank" className="link-blue-2 font-semibold">TSX</a> and some type of framework - currently, I am using <a href="https://react.dev/" target="_blank" className="link-blue-2 font-semibold">React</a> (including for this website). Otherwise, I find just embedding JS into the site to be an easier way to accomplish similar functionality - an example of this can be found in my <a href='https://teammetalpipe.org/' target='_blank' className='link-red-2'>robotics team website</a>. Within TypeScript, the more advanced features that I commonly use include mapped types, indexed types and lambdas/functional programming.
            </div><br/>
            <div className='font-semibold'>Related Projects:
                <p className='indent-6'>
                    <a href='https://github.com/Andallfor/andallfor-home' target='_blank' className='link-red-2'>This Website's Source Code</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://teammetalpipe.org/' target='_blank' className='link-red-2'>Robotics Team Website</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://andallfor.github.io/wordsweeper/' target='_blank' className='link-red-2'>Crossword + Minesweeper Puzzle</a>
                </p>
            </div>
        </div>
    );
}