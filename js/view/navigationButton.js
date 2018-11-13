export default class NavigationButton {

    constructor(name) {
        this.naviButtonDiv = document.createElement('div');
        this.naviButtonDiv.innerText = name;
        this.naviButtonDiv.setAttribute('class', 'navi-button');
    }

    getElement() {
        return this.naviButtonDiv;
    }
}