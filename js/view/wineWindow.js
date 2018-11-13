import Producent from "../model/producent.js";
import Region from "../model/region.js";
import Wine from "../model/wine.js";

export default class WineWindow {

    constructor() {
        this.wineFieldsList =[];
        this.propertyLabelList = ['name', 'variety', 'style', 'type', 'producent', 'country', 'region', 'year'];
        this.wineName;
        this.wineContainer = this.getWineContainer();
        this.modalWindow = this.getModalWindow();
        this.buttonContainer = this.createButtonContainer();
        this.addContentToWineWindow();
    }

    createButtonContainer() {
        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button-div');

        return buttonDiv;
    }

    addContentToWineWindow() {
        for (let i = 0; i < this.propertyLabelList.length; i++) {
            let propertyField = this.getProperty(this.propertyLabelList[i]);
            this.wineContainer.appendChild(propertyField);
        }

        this.wineContainer.appendChild(this.buttonContainer);
    }

    getProperty(propertyName) {
        const propertyField = this.getField('div', 'property-field');
        const labelField = this.getField('div', 'list-element-label');
        labelField.innerText = propertyName + ': ';
        const wineField = this.getField('input', 'list-element', 'padded-list-element');
        wineField.setAttribute('id', propertyName);
        propertyField.appendChild(labelField);
        propertyField.appendChild(wineField);
        this.wineFieldsList.push(wineField);

        return propertyField;
    }

    getField() {
        const field = document.createElement(arguments[0]);
        for (let i = 1; i < arguments.length; i++) {
            field.classList.add(arguments[i]);
        }

        return field;
    }

    createButton(text) {
        const button = document.createElement('div');
        button.classList.add('button');
        button.innerHTML = text;
        this.buttonContainer.appendChild(button);

        return button;
    }

    getModalWindow() {
        const modalWindow = document.createElement('div');
        modalWindow.classList.add('modal');
        this.addCloseAction(modalWindow);
        modalWindow.appendChild(this.wineContainer);

        return modalWindow;
    }

    getWineContainer() {
        let container = document.createElement('div');
        container.setAttribute('id', 'wine-container');
        let winePicture = document.createElement('div');
        winePicture.setAttribute('id', 'wine-picture');
        this.wineName = document.createElement('div');
        this.wineName.setAttribute('id', 'wine-name');
        container.appendChild(this.wineName);
        container.appendChild(winePicture);

        return container;
    }

    addCloseAction(modalWindow) {
        modalWindow.addEventListener('click', (e)=> {
            if (e.target == modalWindow) {
                modalWindow.parentNode.removeChild(modalWindow);
            }
        });
    }

    setParameters(wineParameterList) {
        this.wineName.innerText = wineParameterList[0];

        for (let i = 0; i < this.wineFieldsList.length; i++) {
            this.wineFieldsList[i].value = wineParameterList[i];
        }
    }

    getWineObject() {
        let producent = new Producent(0, this.getPropertyValue('producent'));
        let region = new Region(0, this.getPropertyValue('region'), this.getPropertyValue('country'));
        let year = [Number(this.getPropertyValue('year')), 1, 1];
        let wine = new Wine(0, this.getPropertyValue('name'), this.getPropertyValue('variety'), this.getPropertyValue('style'), this.getPropertyValue('type'), producent, region, year);

        return wine;
    }

    getPropertyValue(propertyName) {
        let property = document.getElementById(propertyName);

        return property.value;
    }

    getElement() {
        return this.modalWindow;
    }

    update(wine) {
        this.setParameters(wine.getParameters());
    }
}