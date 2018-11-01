
import ButtonCreator from "./buttonCreator.js";
import ElementCreator from './elementCreator.js';
import ModalWindow from "./modalWindow.js";

export default class View {

    constructor(controller) {
        this.controller = controller;
        this.buttonCreator = new ButtonCreator();
        this.elementCreator = new ElementCreator();
        
        this.addElementsToNavi();
    }

    addElementsToNavi() {
        const naviDiv = document.getElementById('navi');
        naviDiv.appendChild(this.buttonCreator.getButton('Producer', this.controller.getAllProducers.bind(this)));
        naviDiv.appendChild(this.buttonCreator.getButton('Region', this.controller.getAllRegions.bind(this)));
        naviDiv.appendChild(this.buttonCreator.getButton('Wine', this.controller.getAllWines.bind(this)));
    }

    displayProducersList(producersData) {
        this.showAllElements(producersData, this.controller.getProducerById);
    }

    displayOneProducer(producerData) {
        this.showOneElement(producerData, this.controller.getProducerById);
    }

    displayRegionsList(regionsData) {
        this.showAllElements(regionsData, this.controller.getWinesByRegionName);
    }

    displayWinesList(winesData) {
        this.showAllElements(winesData, this.controller.getOneWine);
    }

    displayOneWine(wineData) {
        this.showWineInfo(wineData, this.controller.deleteOneWine, this.controller.getOneWine);
        //TODO action2 not right!!!
    }

    // displayError(data) {
    //     this.showError(data);
    // }

    showAllElements(givenData, action) {
        const container = document.getElementById('container');
        container.innerText = '';
        givenData.forEach(element => {
            let listElement = this.elementCreator.createListElement(element.toString(), action.bind(this, element));
            container.appendChild(listElement);
            });
    }

    showOneElement(givenData, action) {
        const container = document.getElementById('container');
        container.innerText = '';
        console.log(givenData.toString());
        let element = this.elementCreator.createListElement(givenData.toString(), action.bind(this));
        container.appendChild(element);
    }

    showWineInfo(wineData, action1, action2) {
        this.modalWindow = new ModalWindow();
        const container = document.getElementById('container');
        let element = this.modalWindow.createModalWindow(wineData, action1.bind(this, wineData), action2.bind(this, wineData));
        container.appendChild(element);
        window.addEventListener('click', (e)=> {
            if (e.target == element) {
                element.parentNode.removeChild(element);
            }
        });

    }

    showError(data) {
        let message = `There was a problem with deleting this... The response code:`;
        const container = document.getElementById('container');
        let element = this.modalWindow.createErrorModalWindow(message, data);
        container.appendChild(element);
        window.addEventListener('click', (e)=> {
            if (e.target == element) {
                element.parentNode.removeChild(element);
            }
        });
    }

    showResult(data) {
        let message = `The wine was successfully deleted (response code ${data})`;
        const container = document.getElementById('container');
        let element = this.modalWindow.createErrorWindow(message);
        container.appendChild(element);
        window.addEventListener('click', (e)=> {
            if (e.target == element) {
                element.parentNode.removeChild(element);
            }
        });
    }
}