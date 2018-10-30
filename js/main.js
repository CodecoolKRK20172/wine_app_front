
import Controller from "./controller/producerController.js";
import View from "./view/view.js";
import Model from "./model/model.js";

class Main {

    constructor() {
        this.model = new Model();
        this.controller = new Controller(this.model);
        this.view = new View(this.controller);
    }
}

const main = new Main();