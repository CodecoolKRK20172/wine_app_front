export default class NavigationPanel {

    constructor() {
        this.navigationDiv = document.getElementById('navi');
    }

    add(object) {
        this.navigationDiv.appendChild(object.getElement());
    }

    update() {

    }
}