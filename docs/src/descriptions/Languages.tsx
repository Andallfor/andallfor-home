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