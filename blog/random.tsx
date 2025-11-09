import React from 'react'

function RandomImage({ images }: { images: string[] }) {
    const index = Math.floor(Math.random() * images.length);

    // weird sizing is because when i was photoshoping the photos i accidentally left a 1 pixel border
    // so clip that border off here
    return <div className='w-[323px] overflow-clip'>
        <img src={images[index]} className='w-[325px]'></img>
        <div className="flex justify-between w-full text-white fira-code-font">
            <p>Assorted photos of my dogs.</p>
            <p>({index + 1}/{images.length})</p>
        </div>
    </div>;
}

export default function DogImageCarousel() {
    return <div>
        <RandomImage images={[...Array(16).keys()].map(x => `/dogs/dogs-${x + 1}.jpg`)} />
    </div>
}