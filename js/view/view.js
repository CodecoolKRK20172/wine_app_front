import NavigationButton from "./navigationButton.js";
import SearchModule from "./searchModule.js";
import NavigationPanel from "./navigationPanel.js";
import MainContainer from "./mainContainer.js";
import ItemLabelContainer from "./itemLabelContainer.js";
import ModalContainer from "./modalContainer.js";

export default class View {

    constructor(controller) {
        this.controller = controller;
        this.itemLabelContainer = new ItemLabelContainer();
        this.producentButton = new NavigationButton('Producent');
        this.regionButton = new NavigationButton('Region');
        this.wineButton = new NavigationButton('Wine');
        this.addWineButton = new NavigationButton('Add wine');
        this.searchModule = new SearchModule('Advanced search: ');
        this.navigationPanel = new NavigationPanel();
        this.mainContainer = new MainContainer(this.controller);
        this.mainContainer.add(this.itemLabelContainer);
        this.modalContainer = new ModalContainer(this.controller);

        this.addElementsToNavigationPanel();
        this.setObservers();
        this.addEvents();
    }

    addElementsToNavigationPanel() {
        this.navigationPanel.add(this.producentButton);
        this.navigationPanel.add(this.regionButton);
        this.navigationPanel.add(this.wineButton);
        this.navigationPanel.add(this.addWineButton);
        this.navigationPanel.add(this.searchModule);
    }

    setObservers() {
        this.controller.model.attach(this.navigationPanel);
        this.controller.model.attach(this.mainContainer);
        this.controller.model.attach(this.modalContainer);
    }

    addEvents() {
        this.producentButton.getElement().addEventListener('click', () => {
            this.controller.getProducentList();
        });

        this.regionButton.getElement().addEventListener('click', () => {
            this.controller.getRegionList();
        });

        this.wineButton.getElement().addEventListener('click', () => {
            this.controller.getWineList();
        });

        this.searchModule.inputSearch.addEventListener('keyup', () => {
            let input = this.searchModule.getValueOfInput();
            let option = this.searchModule.getValueCurrentOption();
            this.controller.getWineListBySearchInput(input, option);
        });

        this.addWineButton.getElement().addEventListener('click', () => {
            this.modalContainer.update();
        })
    }
}