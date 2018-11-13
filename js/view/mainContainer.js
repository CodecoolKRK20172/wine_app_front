import Wine from "../model/wine.js";
import Region from "../model/region.js";
import Producent from "../model/producent.js";

export default class MainContainer {

    constructor(controller) {
        this.controller = controller;
        this.container = document.getElementById('container');
        this.content;
    }

    renderContainer() {
        this.container.appendChild(this.content.getElement());
    }

    add(object) {
        this.content = object;
    }

    restoreContainer() {
        this.container.innerHTML = '';
    }

    update(model) {
        this.setAction(model.itemList[0]);
        this.restoreContainer();
        this.content.update(model.itemList);
        this.renderContainer();
    }

    setAction(element) {
        if (element instanceof Wine) {
            this.content.setAction(this.controller.showWine.bind(this.controller));

        } else if (element instanceof Region) {
            this.content.setAction(this.controller.showRegionWines.bind(this.controller));

        } else if (element instanceof Producent) {
            this.content.setAction(this.controller.showProducentWines.bind(this.controller));

        }
    }
}