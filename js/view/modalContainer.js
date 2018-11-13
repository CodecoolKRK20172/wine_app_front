import WineWindow from "./wineWindow.js";

export default class ModalContainer {

    constructor(controller) {
        this.controller = controller;
        this.container = document.getElementById('wine-content');
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
        if (model === undefined) {
            this.restoreContainer();
            this.add(new WineWindow());
            this.content.createButton('Add-post').addEventListener('click', () => {
                let wine = this.content.getWineObject();
                this.controller.addWine(wine);
            });
            this.renderContainer();

        } else {
            let wine = model.currentWine;
            this.add(new WineWindow());
            this.restoreContainer();
            this.content.update(wine);
            this.content.createButton('Delete').addEventListener('click', () => {
                this.controller.deleteRecord(wine);
                model.currentWine = null;
            });
            this.restoreContainer();
            this.renderContainer();
        }
    }
}