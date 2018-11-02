import ButtonCreator from "./buttonCreator.js";
import LabelCreator from "./labelCreator.js";
import SearchModule from "./searchModule.js";
import ModalWindow from "./modalWindow.js";

export default class View {

    constructor(controller) {
        this.controller = controller;
        this.buttonCreator = new ButtonCreator();
        this.producentLabelCreator = new LabelCreator();
        this.searchModule = new SearchModule();
        this.addElementsToNavi();

    }

    renderContainer(content) {
        let container = document.getElementById('container');
        container.innerHTML = '';
        container.appendChild(content);
    }

    addElementsToNavi() {
        let naviDiv = document.getElementById('navi');
        naviDiv.appendChild(this.buttonCreator.getButton('Producent', this.controller.getProducentList.bind(this)));
        naviDiv.appendChild(this.buttonCreator.getButton('Region', this.controller.getRegionList.bind(this)));
        naviDiv.appendChild(this.buttonCreator.getButton('Wine', this.controller.getWineList.bind(this)));
        naviDiv.appendChild(this.buttonCreator.getButton('Add wine'));
        naviDiv.appendChild(this.searchModule.getSearchLabel('Advanced search: '));
        naviDiv.appendChild(this.searchModule.getOptionSearchElement());
        naviDiv.appendChild(this.searchModule.getInputSearchElement(this.controller.getWineListBySearchInput.bind(this)));
    }

    displayProducentList(producentList) {
        this.displayItemList(producentList, this.controller.showProducentWines);
    }

    displayRegionList(regionList) {
        this.displayItemList(regionList, this.controller.showRegionWines);
    }

    displayWineList(wineList) {
        this.displayItemList(wineList, this.controller.showWine);
    }

    displayItemList(nameList, action) {
        let div = document.createElement('div');
        div.setAttribute('id', 'content')
        nameList.forEach(element => {
            let item = this.producentLabelCreator.getItemLabel(element.toString(), action.bind(this, element));
            div.appendChild(item);
        });

        this.renderContainer(div);
    }


    displayWine(wine) {
        this.modalWindow = new ModalWindow();
        let modalWindow = this.modalWindow.createModalWindow();
        this.modalWindow.setParameters(wine.getParameters());
        this.modalWindow.addButtons();
        // this.renderContainer(modalWindow);
        container.appendChild(modalWindow);
        modalWindow.addEventListener('click', (e)=> {
            if (e.target == modalWindow) {
                modalWindow.parentNode.removeChild(modalWindow);
            }
        });
    }
}