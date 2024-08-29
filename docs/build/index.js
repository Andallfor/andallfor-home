"use strict";
/*
relevant commands:
npx tsc --watch
npx tailwindcss -i ./src/index.css -o ./docs/build/index.css --watch
*/
class NavigationButton {
    constructor(name) {
        this.nav = document.getElementById(NavigationButton.getId(name));
        this.link = document.getElementById(NavigationButton.getLink(name));
        this.highlight = document.getElementById(NavigationButton.getHighlight(name));
    }
    static getId(name) { return 'nav-' + name; }
    static getLink(name) { return 'nav-' + name + '-link'; }
    static getHighlight(name) { return 'nav-' + name + '-highlight'; }
}
class NavigationBar {
    constructor() {
    }
}
window.addEventListener('load', () => {
});
