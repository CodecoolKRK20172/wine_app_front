
import ButtonCreator from "./buttonCreator.js";

export default class View {

    constructor(controller) {
        this.controller = controller;
        this.buttonCreator = new ButtonCreator();
        this.addElementsToNavi();

    }

    addElementsToNavi() {
        let naviDiv = document.getElementById('navi');
        naviDiv.appendChild(this.buttonCreator.getButton('Producent', this.controller.showProducent));
        naviDiv.appendChild(this.buttonCreator.getButton('Region'));
        naviDiv.appendChild(this.buttonCreator.getButton('Year'));
        naviDiv.appendChild(this.buttonCreator.getButton('Wine'));
    }
}