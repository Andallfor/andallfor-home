type BriefTitles = 'skill' | 'experience' | 'platforms' | 'main language' | 'role' | 'duration' | 'libraries' | 'specialty';

interface BriefProp {
    data: BriefData[];
}

interface BriefData {
    title: BriefTitles;
    desc: string;
}

export default function Brief({ data }: BriefProp) {
    const iconMap: {[name: string]: string; } = {
        'skill': 'ri-medal-2-fill',
        'platforms': 'ri-database-2-fill',
        'experience': 'ri-hourglass-fill',
        'main language': 'ri-code-s-slash-fill',
        'role': 'ri-user-3-fill',
        'duration': 'ri-calendar-2-fill',
        'libraries': 'ri-book-shelf-fill',
        'specialty': 'ri-lightbulb-fill',
    };

    let key = 0;

    return (<>
        <div className="w-full flex justify-evenly gap-4">
            {data.map(({ title, desc }) => 
                <div key={key++}>
                    <i className={iconMap[title] + " mr-2"}></i>
                    <span className="2xl:text-xl sm:text-lg text-xs">{desc}</span>
                    <p className="text-footnote dm-mono-light text-off-white mr-2">{title.toUpperCase()}</p>
                </div>)}
        </div><br/></>);
}