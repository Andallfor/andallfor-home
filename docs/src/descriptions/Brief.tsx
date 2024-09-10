type BriefTitles = 'skill' | 'experience' | 'platforms' | 'primary language' | 'role' | 'duration';
interface BriefProp {
    title: BriefTitles;
    desc: string;
}

export default function Brief({title, desc}: BriefProp) {
    const iconMap: {[name: string]: string; } = {
        'skill': 'ri-medal-2-fill',
        'platforms': 'ri-database-2-fill',
        'experience': 'ri-hourglass-fill',
        'primary language': 'ri-code-s-slash-fill',
        'role': 'ri-user-3-fill',
        'duration': 'ri-calendar-2-fill'
    };

    return (
        <div>
            <i className={iconMap[title] + " mr-2"}></i>
            <span className="text-xl">{desc}</span>
            <p className="text-xs dm-mono-light text-off-white mr-2">{title.toUpperCase()}</p>
        </div>);
}