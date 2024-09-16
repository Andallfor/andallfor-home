import { LB, LR } from "../Link";
import Brief from "./Brief";

export function Plf_TailwindReact() {
    return (
        <div>
            <Brief data={[
                {title: 'experience', desc: '1+ Years'},
                {title: 'skill', desc: 'Intermediate'},
            ]}></Brief>
            <p className="indent-6">
                I have used <LB l="https://tailwindcss.com" t="TailwindCSS"/> to create two websites, one for my <LR l="https://teammetalpipe.org" t="robotics team"/> and one being this <LR l="https://github.com/Andallfor/andallfor-home" t="website"/>. Both pages are entirely styled by me, with all components on this site similarly being created by me. All components on the robotics page besides the image carousel and timeline slider based were also created by me. I have experience with deeper features (both Tailwind and general CSS), such as <LB l="https://tailwindcss.com/docs/hover-focus-and-other-states#pseudo-classes" t="psuedo-classes"/>, <LB l="https://tailwindcss.com/docs/hover-focus-and-other-states#custom-modifiers" t="attribute selectors"/>, <a href="https://tailwindcss.com/docs/functions-and-directives" className="font-semibold link-blue-2" target="_blank">functions and directives</a>, and <a className="font-semibold link-blue-2" href="https://tailwindcss.com/docs/responsive-design" target="_blank">(re)designing for mobile devices</a>.
            </p><br/>
            <p className="indent-6">
                Similarly, I used <a className="font-semibold link-blue-2" href="https://react.dev/" target="_blank">React</a> and <a className="link-blue-2 font-semibold" href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> to add functionality to this website. As mentioned in the <i>Web Development</i> section, this website was built from scratch using <LB l="https://tailwindcss.com" t="TailwindCSS"/>, <a className="link-blue-2 font-semibold" href="https://react.dev/learn/typescript#" target="_blank">React-ts</a>, and <a href="https://vitejs.dev/" target="_blank" className="font-semibold link-blue-2">Vite</a>. React was used primarily as a way to store state (via their props system) to allow for additional interactivity outside of the basic TailwindCSS-based animations (such as the skill bar on the right). I have designed analogous interactive systems outside of the React ecosystem using raw JavaScript, such as the <a href="https://teammetalpipe.org/#main-section-vid-id" className="font-semibold link-red-2" target="_blank">dynamic timeline on the robotics website</a>.
            </p><br/>
            <div className='font-semibold'>Related Projects:
                <p className='indent-6'>
                    <a href='https://teammetalpipe.org/' target='_blank' className='link-red-2'>Robotics Website</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://github.com/Andallfor/metalPipeWebsite' target='_blank' className='link-red-2'>Robotics Website Source Code</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://github.com/Andallfor/andallfor-home' target='_blank' className='link-red-2'>This Site's Source Code</a>
                </p>
            </div>
        </div>
    );
}

export function Plf_Unity() {
    return (
        <div>
            <Brief data={[
                {title: 'experience', desc: '4+ Years'},
                {title: 'skill', desc: 'Advanced'},
                {title: 'libraries', desc: 'URP/HDRP, Mirror, Shapes'},
            ]}/>
            <div className="indent-6">
                I started learning <LB l="https://unity.com/" t="Unity"/> in conjunction with <LB l="https://learn.microsoft.com/en-us/dotnet/csharp/" t="C#"/>, and as such, it is similarly the platform in which I have the most experience and skill - all <LR l="https://github.com/Andallfor/MVT" t="3 years of my NASA internship"/> were built in Unity. I am very knowledgeable in the traditional game design aspects of Unity, such as the <LB l="https://docs.unity3d.com/Manual/render-pipelines.html" t="rendering pipelines"/><sup>1</sup>, <LB l="https://docs.unity3d.com/Manual/Coroutines.html" t="coroutines/IEnumerator"/>, <LB l="https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task?view=net-8.0" t="multithreading"/><sup>2</sup>, the <LB l="https://docs.unity3d.com/Manual/ExecutionOrder.html" t="player loop"/>, <LB l="https://en.wikipedia.org/wiki/Object_pool_pattern" t="object pooling"/>, <LB l="https://docs.unity3d.com/Manual/Shaders.html" t="shaders"/>, building for <LB l="https://docs.unity3d.com/Manual/web-build-settings.html" t="webGL"/>, <LB l="https://mirror-networking.com/" t="multiplayer"/>, and much more. Major assets I utilize include <LB l="https://mirror-networking.com/" t="Mirror"/>, <LB l="https://assetstore.unity.com/packages/tools/particles-effects/shapes-173167" t="Shapes"/>, <LB l="https://assetstore.unity.com/packages/tools/utilities/odin-inspector-and-serializer-89041" t="Odin Inspector"/>, and <LB l="https://www.newtonsoft.com/json" t="Newtonsoft"/>.
            </div><br/>
            <div className="indent-6">
                As mentioned above, my NASA internships utilized Unity. Thus, I also have a very strong understanding of deeper, more engine specific concepts such as Unity's inherent floating point imprecision<sup>3</sup>, <LB l="https://docs.unity3d.com/ScriptReference/Unity.Collections.NativeArray_1.html" t="NativeArray"/>, <LB l="https://docs.unity3d.com/Manual/AssetBundlesIntro.html" t="asset bundles"/>, <LB l="https://docs.unity3d.com/ScriptReference/GraphicsBuffer.html" t="mesh/graphic buffers"/>, <LB l="https://docs-alpha.unity3d.com/Manual/class-ComputeShader.html" t="compute shaders"/>, and async loading.
            </div><br/>
            <div className='text-footnote'>
                1 I have the most experience with URP.<br/>
                2 Including how to design around Unity's single threaded core loop/systems.<br/>
                3 For my NASA project, this amounted to implementing a completely separate and custom type system to replace Unity's default Vector3 and related types.<br/>
            </div><br/>
            <div className='font-semibold'>Related Projects:
                <p className='indent-6'>
                    <LR l="https://github.com/Andallfor/MVT" t="NASA Project"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <LR l="https://github.com/Andallfor/NASA-ADC-2022" t="NASA App Development Challenge 2022"/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <LR l="https://github.com/Andallfor/NASA-ADC-2020" t="NASA App Development Challenge 2020"/>
                </p>
            </div>
        </div>
    );
}

export function Plf_AWS() {
    return (
        <div>
            <Brief data={[
                {title: 'experience', desc: '1+ Years'},
                {title: 'skill', desc: 'Intermediate'},
            ]}/>
            <div className="indent-6">
                I used <LB l="https://aws.amazon.com/" t="AWS"/> during my <LR l="https://github.com/Andallfor/MVT" t="NASA internship"/> to allow our web-based builds to request calculations from our server build, which was hosted on an <LB l="https://aws.amazon.com/ec2/" t="AWS EC2 instance"/> (Windows-based). I used the <LB l="https://mirror-networking.com/" t="Mirror"/> library to send and receive data over the network and implemented a <LB l="https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/" t="reverse proxy"/> as a way to implement a message buffer queue<sup>1</sup>. I additionally created the <LR l="https://github.com/Andallfor/MVT/blob/main/Assets/Code/network/web.cs" t="internal API"/> that my team uses to communicate between the server and client. This API is based on the usage of a send and receive handle, allowing for easy integration with already existing non-networked functions.<sup>2</sup>
            </div><br/>
            <div className='text-footnote'>
                <p className="text-hanging">1 This was needed as many of the client requests could take a non-insignificant amount of time to process, during which we still needed to be able to receive new requests. This is not possible by default as Unity is single threaded.</p>
                2. The design was modeled after event-based programming.
            </div><br/>
            <div className='font-semibold'>Related Projects:
                <p className='indent-6'>
                    <LR l="https://github.com/Andallfor/MVT/tree/main/Assets/Code/network" t="NASA Project Networking Code"/>
                </p>
            </div>
        </div>
    );
}