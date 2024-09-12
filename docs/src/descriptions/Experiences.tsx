import Brief from "./Brief";

export function Exp_NASA() {
    return (
        <div>
            <div className="w-full flex justify-evenly">
                <Brief title="duration" desc="2020-2023 (Summers)"></Brief>
                <Brief title="role" desc="Lead Developer"></Brief>
                <Brief title="platforms" desc="C#, Unity"></Brief>
            </div><br/>
            <div className='indent-6'>
                I interned at <a href='https://www.nasa.gov/goddard/' className='font-semibold link-blue-2'>NASA's Goddard Space Flight Center</a> as part of the <a href='https://www.nasa.gov/directorates/somd/space-communications-navigation-program/scan-internship-project-sip/' className='font-semibold link-blue-2' target='_blank'>Space Communications and Navigation (SCaN) Internship Program (SIP)</a> for three years. During this time, my team and I worked on created the <a href='https://github.com/Andallfor/MVT' target='_blank' className='font-semibold link-red-2'>Mission Visualization Toolkit (MVT)</a> program. At the end of the 3rd year, we published a paper on this project to the <a href='https://ieeexplore.ieee.org/document/10521148' target='_blank' className='font-semibold link-red-2'>IEEE Aerospace Conference</a>.
            </div><div className='indent-6 mt-1'>
                Specifically, MVT is a highly optimized simulation of planetary terrain and orbiting satellites to aid in the generation of access calls, which are the time windows during which an orbiting satellite can communicate to a planetary ground station. This project was created using the <a href='https://unity.com/' target='_blank' className='link-blue-2 font-semibold'>Unity Engine</a>, making use of their 3D mesh and raycasting systems. Benchmarking showed that the terrain system was capable of generating upwards of 13,000,000 points per second<sup>1</sup>.
            </div><br/>
            I was the project lead. My responsibilities notably included: <br/>
            <div className='list-hanging'>1. designing and implementing the entire project structure, including relevant base types (i.e. planetary bodies, ground stations, etc.) and most core systems,</div>
            <div className='list-hanging'>2. creating the entirety of the planetary terrain system<sup>2</sup></div>
            <div className='list-hanging'>3. setting up the online environment during the 2nd and 3rd years.</div><br/>
            <div className='font-semibold'>Related Projects:
                <p className='indent-6'>
                    <a href='https://github.com/vickicarrica/Mission-Visualization-Toolkit' target='_blank' className='link-red-2'>Year 1</a><sup>3</sup>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://github.com/Andallfor/MVT' target='_blank' className='link-red-2'>Year 2/3</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://ieeexplore.ieee.org/document/10521148' target='_blank' className='link-red-2'>Paper for IEEE AeroConf</a>
                </p>
            </div><br/>
            <div className='text-footnote'>
                1 Please see the linked IEEE paper, section 5 for more information.<br/>
                2 Please see the Software Optimization and Large-Scale Data Processing sections for more detail.<br/>
                3 Project was built using Unity's source control system; this Github repository is a public build for Github Pages to pull from.<br/>
            </div>
        </div>
    );
}

export function Exp_FTC() {
    return (
        <div>
            <div className="w-full flex justify-evenly">
                <Brief title="duration" desc="2021-2024 (School Year)"></Brief>
                <Brief title="role" desc="Software Head"></Brief>
                <Brief title="platforms" desc="Java, Python"></Brief>
            </div><br/>
            <p className="indent-6">
                I competed in the <a href="https://www.firstinspires.org/robotics/ftc" target="_blank" className="font-semibold link-blue-2">FIRST Tech Challenge (FTC)</a> as the lead programmer on my team. FTC is an international high-school robotics competition where teams build a small (18" x 18") robot to complete different challenges each season. The main components I designed were the vision systems (<a href="https://developer.vuforia.com/home" className="font-semibold link-blue-2">Vuforia-based</a> object detection and <a href="https://github.com/OpenFTC/EasyOpenCV" target="_blank" className="font-semibold link-blue-2">OpenCV-based</a> April Tag detection), multi-threading/optimizations, and the entirety of the <a href="https://teammetalpipe.org/" className="font-semibold link-red-2" target="_blank">team's website</a>. I worked with a secondary programmer to design the robot controls and autonomous sections. Finally, I also mentored the programmer on the team, who later became the lead programmer after I graduated.
            </p><br/>
            Over the course of my competitive career, my team received various awards:<br/>
            <div className='list-hanging'>1. Advanced to the State Championship during the 2021-2022 and 2023-2024 seasons.</div>
            <div className='list-hanging'>2. 1st Place <span className="font-semibold">Inspire Award</span> (2023-2024, Qualifier Tournament)<sup>1</sup></div>
            <div className='list-hanging'>3. 1st Place <span className="font-semibold">Design Award</span> (2022-2023, Qualifier Tournament)<sup>2</sup></div>
            <div className='list-hanging'>4. 1st Place <span className="font-semibold">Control Award</span> (2021-2022, Qualifier Tournament)<sup>3</sup></div>
            <div className='list-hanging'>5. 1st Place <span className="font-semibold">Innovate Award</span> (2021-2022, State Championship)<sup>4</sup></div><br/>
            <div className='font-semibold'>Related Projects:
                <p className='indent-6'>
                    <a href='https://github.com/litl555/Team23741-2023' target='_blank' className='link-red-2'>2023-2024 Codebase</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://teammetalpipe.org/' target='_blank' className='link-red-2'>Team Website</a>
                </p>
            </div><br/>
            <div className='text-footnote'>
                1 Best overall team.<br/>
                2 Best designed robot.<br/>
                3 Best code (primarily for the autonomous sections).<br/>
                4 Most creative/innovate robot design.<br/>
            </div>
        </div>
    )
}
