import { LR, LB } from "../Link";
import Brief from "./Brief";

export function Skl_WebDev() {
    return (
        <div>
            <Brief data={[
                {title: 'experience', desc: '2+ Years'},
                {title: 'skill', desc: 'Intermediate'},
            ]}/>
            <p className="indent-6">
                I have extensive experience both creating websites and hosting their backend servers. I primarily use a combination of <a className="link-blue-2 font-semibold" target="_blank" href="https://tailwindcss.com/">TailwindCSS</a> for styling, <a className="link-blue-2 font-semibold" target="_blank" href="https://react.dev/">React-ts</a> for the server architecture, and <a className="link-blue-2 font-semibold" target="_blank" href="https://vitejs.dev/">Vite</a> for my development environment (which is how this <a className="link-red-2 font-semibold" target="_blank" href="https://github.com/Andallfor/andallfor-home">website</a> was constructed). As such, I am also proficient in TypeScript and JavaScript. In addition this this site, I also created my <a className="link-red-2 font-semibold" target="_blank" href="https://teammetalpipe.org/">robotics team's website</a> using TailwindCSS and embedded JS. Both pages were solo developed by me, with all components on this site also being created by me.
            </p><br/>
            <p className="indent-6">
                Outside of front-end web development, I have experience using <a className="link-blue-2 font-semibold" target="_blank" href="https://tailwindcss.com/">AWS</a> to host an EC2 instance that my frontend service interfaced with (created during my NASA internship)<sup>1</sup>.
            </p><br/>
            <div className='font-semibold'>Related Projects:
                <p className='indent-6'>
                    <a href='https://teammetalpipe.org/' target='_blank' className='link-red-2'>Robotics Website</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://github.com/Andallfor/andallfor-home' target='_blank' className='link-red-2'>This Site's Source Code</a>
                </p>
            </div><br/>
            <div className='text-footnote'>
                1 Please see the AWS section for more information.<br/>
            </div>
        </div>
    );
}

export function Skl_Optimization() {
    return (
        <div>
            <Brief data={[
                {title: 'experience', desc: '3+ Years'},
                {title: 'skill', desc: 'Advanced'},
                {title: 'specialty', desc: 'High/Medium Level, C#, Unity'},
            ]}/>
            <p className="indent-6">
                During my NASA internship<sup>1</sup>, my responsibility was not only to design the <a href="https://github.com/Andallfor/MVT" target="_blank" className="link-red-2 font-semibold">majority of the program</a> but also ensure better performance than current tooling. This required me to implement intensive high-level and low-level optimizations to reach the targeted metrics.
            </p><br/>
            <p className="indent-6 pb-2">
                For example, the terrain system needed to be able to process and simulate (generate raycastable 3D meshes) from a source of hundreds of millions to billions of points<sup>2</sup>. I was able to design a system <a href="https://ieeexplore.ieee.org/document/10521148#sec5" className="font-semibold link-red-2">that was capable of generating 13,000,000 points per second</a> (including startup costs). Among the optimizations I implemented, the most significant were:
            </p>
            <div className='list-hanging'>1. Encoding the terrain height map data into an equirectangular projection using the <a href="https://jpeg.org/jpeg2000/" target="_blank" className="link-blue-2 font-semibold">JPEG2000</a> format to increase compressibility, data read speeds, and allowing for the implicit calculation of latitude and longitude (due to the equirectangular projection).</div>
            <div className="list-hanging">2. Enforcing a consistent mesh size to allow for the sharing of triangle and UV arrays.</div>
            <div className="list-hanging">3. Uploading height map data to the GPU via <a href="https://docs-alpha.unity3d.com/Manual/class-ComputeShader.html" className="font-semibold link-blue-2" target="_blank">compute shaders</a> when calculating each point's cartesian coordinates and ensuring <a href="https://stackoverflow.com/questions/37827216/do-conditional-statements-slow-down-shaders" target="_blank" className="link-blue-2 font-semibold">optimal wavefront parallelization</a> through the removal of any dynamic branching.</div><br/>
            I have similarly implemented exhaustive optimizations into many of my other projects:
            <div className="list-hanging">1. The <a href="https://github.com/Andallfor/Barnes-Hut-Simulation" className="link-red-2 font-semibold">Barnes-Hut simulation</a> that can process upwards of 15,000 bodies at once<sup>3</sup>.</div>
            <div className="list-hanging">2. Optimized my robotics team's robot frames per second from ~25fps to &gt;100fps via multi-threading.</div><br/>
            <div className='font-semibold'>Related Projects:
                <p className='indent-6'>
                    <a href='https://github.com/Andallfor/MVT/tree/main/Assets/Code/terrain' target='_blank' className='link-red-2'>Terrain Source Code</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://ieeexplore.ieee.org/document/10521148#sec5' target='_blank' className='link-red-2'>Paper On Terrain System</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://github.com/Andallfor/Barnes-Hut-Simulation' target='_blank' className='link-red-2'>Barnes-Hut Simulation</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </p>
            </div><br/>
            <div className='text-footnote'>
                <p className="text-hanging">1 Please see the NASA section for more information.</p>
                <p className="text-hanging">2 For the second year of the internship, I was required to process the billions of points that represented the moon's surface, while the third year I needed to process the hundreds of millions of points surrounding a few points of interest on earth. Both years required the system to be able to simulate tens to hundreds of millions of points at once.</p>
                3 Average frame time was 230ms.
            </div>
        </div>
    );
}

export function Skl_DataProcessing() {
    return (
        <div>
            <Brief data={[
                {title: 'experience', desc: '3+ Years'},
                {title: 'skill', desc: 'Advanced'},
                {title: 'specialty', desc: 'Big Data (Geospatial), High-Performance'},
            ]}/>
            <div className="indent-6">
                I have experience both building a database of hundreds of millions<sup>1</sup> to billions<sup>2</sup> of points as well as being able to read and process those points in realtime. This was primarily done as part of my <LR l="https://github.com/Andallfor/MVT" t="NASA internship"/>, in which I was responsible for storing lunar and Earth terrain data and then being able to request an arbitrary slice to simulate at runtime.<sup>3</sup> I designed two systems, the first for the <LR l="https://github.com/Andallfor/MVT/tree/main/Assets/Code/terrain/planetTerrain" t="lunar surface"/> and a second improved version that <LR l="https://github.com/Andallfor/MVT/tree/main/Assets/Code/terrain/universal" t="focused on the Earth"/>.
            </div><br/>
            <div className="indent-6 pb-2">
                In terms of storage, my second system was able to encoded heightmap data at a compression ratio of 8 points/byte (in the current system, <LR l="https://ieeexplore.ieee.org/document/10521148#sec5" t="170 million points in 20 mib"/>). This was achieved by taking advantage of various data features:
            </div>
            <div className="list-hanging">1. Projecting heightmap data into an <LB l="https://en.wikipedia.org/wiki/Equirectangular_projection" t="equirectangular projection"/>, allowing latitude and longitude values to be implicitly calculated.</div>
            <div className="list-hanging">2. Taking advantage of traditional image compression methods;<sup>4</sup> namely encoding the data as a <LB l="https://jpeg.org/jpeg2000/" t="grayscale JPEG2000 image"/> (from base .tiff or .asc files, see footnote 1).</div>
            <div className="list-hanging">3. Enforcing a consistent and descriptive naming scheme such that the exact file that contains a region can always be determined, without the need to load any files.</div>
            <div className="list-hanging">4. (First system) Creating a custom data format to represent serialized meshes, skipping the processing step.</div><br/>
            <div className='font-semibold'>Related Projects:
                <p className='indent-6'>
                    <a href='https://github.com/Andallfor/MVT/tree/main/Assets/Code/terrain' target='_blank' className='link-red-2'>Terrain Source Code</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href='https://ieeexplore.ieee.org/document/10521148#sec5' target='_blank' className='link-red-2'>Paper On Terrain System</a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                </p>
            </div><br/>
            <div className='text-footnote'>
                1 Data pulled from Copernicus, SRTM, ALOS, and USGS, for representing various points of interest on Earth in the second system.<br/>
                2 Data pulled from LRO, for representing the lunar surface in my first system.<br/>
                3 Performance characteristics can be found in the Software Optimization subsection.<br/>
                4 As the heightmap data can be viewed as a grayscale image, since it is analogous to a 2D array.<br/>
            </div>
        </div>
    );
}