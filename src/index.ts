/*
relevant commands:
npx tsc --watch
npx tailwindcss -i ./src/index.css -o ./docs/build/index.css --watch
*/

// currently, for ease of use all ts is bundled into one file
// when setting up the server, separate for cleanliness (we already use class so should be simple copy paste)

type NavigationButtonTypes = 'projects' | 'about' | 'blog';

class NavigationButton {
    private nav: HTMLElement;
    private link: HTMLElement;
    private highlight: HTMLElement;

    constructor(name: NavigationButtonTypes) {
        this.nav = document.getElementById(NavigationButton.getId(name))!;
        this.link = document.getElementById(NavigationButton.getLink(name))!;
        this.highlight = document.getElementById(NavigationButton.getHighlight(name))!;

        
    }

    static getId(name: NavigationButtonTypes): string { return 'nav-' + name; }
    static getLink(name: NavigationButtonTypes): string { return 'nav-' + name + '-link'; }
    static getHighlight(name: NavigationButtonTypes): string { return 'nav-' + name + '-highlight'; }
}

class NavigationBar {

    constructor() {

    }
}

window.addEventListener('load', () => {
    
});