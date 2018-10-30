import ButtonCreator from "./buttonCreator.js";
import LabelCreator from "./labelCreator.js";

export default class View {

    constructor(controller) {
        this.controller = controller;
        this.buttonCreator = new ButtonCreator();
        this.producentLabelCreator = new LabelCreator();
        this.addElementsToNavi();

    }

    clearContainer() {
        let container = document.getElementById('container');
        container.innerHTML = '';
    }

    addElementsToNavi() {
        let naviDiv = document.getElementById('navi');
        naviDiv.appendChild(this.buttonCreator.getButton('Producent', this.controller.getProducentList.bind(this)));
        naviDiv.appendChild(this.buttonCreator.getButton('Region', this.controller.getRegionList.bind(this)));
        naviDiv.appendChild(this.buttonCreator.getButton('Wine', this.controller.getWineList.bind(this)));
        naviDiv.appendChild(this.buttonCreator.getButton('Add wine'));
    }

    displayProducentList(producentList) {
        this.addLabelListDiv(producentList, this.controller.showProducentWines);
    }

    displayRegionList(regionList) {
        this.addLabelListDiv(regionList, this.controller.showRegionWines);
    }

    displayWineList(wineList) {
        this.addLabelListDiv(wineList, this.controller.showWine);
    }

    addLabelListDiv(nameList, action) {
        let nameDiv = document.createElement('div');
        nameDiv.setAttribute('id', 'content')
        for (let i = 0; i < nameList.length; i++) {
            let label = this.producentLabelCreator.getProducentLabel(nameList[i].toString(), action.bind(this, nameList[i]));
            nameDiv.appendChild(label);
        }

        let container = document.getElementById('container');
        container.innerText = '';
        container.appendChild(nameDiv);
    }

    displayWine(wine) {
        let wineDiv = document.createElement('div');
        wineDiv.setAttribute('id', 'content')

        nameDiv.innerText = wine.name + ' ' + wine.year.toString() + wine.region.toString();

        let container = document.getElementById('container');
        container.innerText = '';
        container.appendChild(nameDiv);
    }

    addDiv() {

    }


}