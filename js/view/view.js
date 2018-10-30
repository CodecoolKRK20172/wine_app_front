
import ButtonCreator from "./buttonCreator.js";
import ListElementCreator from './listElementCreator.js';

export default class View {

    constructor(controller) {
        this.controller = controller;
        this.buttonCreator = new ButtonCreator();
        this.listElementCreator = new ListElementCreator();
        this.addElementsToNavi();

    }

    addElementsToNavi() {
        const naviDiv = document.getElementById('navi');
        const container = document.getElementById('container');
        naviDiv.appendChild(this.buttonCreator.getButton('Producer', this.controller.getAllProducers.bind(this)));
        naviDiv.appendChild(this.buttonCreator.getButton('Region'));
        naviDiv.appendChild(this.buttonCreator.getButton('Year'));
        naviDiv.appendChild(this.buttonCreator.getButton('Wine'));
    }

    showAllProducers(data) {
        data.forEach(element => {
            this.listElementCreator.createListElement();
            console.log(element.name);
            chart.innerHTML = element.name;
            });
    }
}