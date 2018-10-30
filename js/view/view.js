
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
        naviDiv.appendChild(this.buttonCreator.getButton('Producer', this.controller.getAllProducers.bind(this)));
        naviDiv.appendChild(this.buttonCreator.getButton('Region', this.controller.getAllRegions.bind(this)));
        naviDiv.appendChild(this.buttonCreator.getButton('Wine', this.controller.getAllWines.bind(this)));
    }

    displayProducersList(producersData) {
        this.showAllElements(producersData, this.controller.getAllProducers);
    };

    displayRegionsList(regionsData) {
        this.showAllElements(regionsData, this.controller.getAllRegions);
    };

    displayWinesList(winesData) {
        this.showAllElements(winesData, this.controller.getAllWines);
    };

    showAllElements(givenData, action) {
        const container = document.getElementById('container');
        container.innerText = '';
        givenData.forEach(element => {
            let listElement = this.listElementCreator.createListElement(element.toString(), action.bind(this));
            container.appendChild(listElement);
            });
        
    }
}