interface link {
    l: string,
    t: string,
}

export function LB({l, t}: link) {
    return (<a href={l} target="blank" className="font-semibold link-blue-2">{t}</a>)
}

export function LR({l, t}: link) {
    return (<a href={l} target="blank" className="font-semibold link-red-2">{t}</a>)
}