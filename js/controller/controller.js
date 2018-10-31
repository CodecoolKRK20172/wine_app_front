export default class Controller {

    constructor(model) {
        this.model = model;
        this.url = 'http://localhost:8080/';
    }

    getProducentList() {

        fetch(this.controller.url + 'producents', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {

                this.displayProducentList(this.controller.model.getProducentList(data)); // metod from view

            })
    }

    getRegionList() {
        fetch(this.controller.url + 'regions', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                let regionList = [];
                for (let i = 0; i < data.length; i++) {
                    regionList.push(data[i].name);
                }


                this.displayRegionList(this.controller.model.getRegionList(data));

            })
    }

    getWineList() {
        fetch(this.controller.url + 'wines', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                let wineList = [];
                for (let i = 0; i < data.length; i++) {
                    wineList.push(data[i].name);
                }
                this.displayWineList(this.controller.model.getWineList(data));

            })
    }

    getWineListBySearchInput() {
        let input = this.searchModule.getValueOfInput();
        let option = this.searchModule.getValueCurrentOption();

        fetch(this.controller.url + 'wines', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                let wineList = this.controller.model.getWineList(data);
                if (option === 'regionName') {
                    this.displayWineList(this.controller.model.getWineListByRegion(wineList, input));

                } else if (option === 'name') {
                    this.displayWineList(this.controller.model.getWineListBySearchInput(wineList, input));
                }

            })


    }

    showProducentWines(producent) {
        console.log(producent);
    }

    showRegionWines(region) {
        console.log(region.toString());
        fetch(this.controller.url + 'wines/?regionName=' + region.name, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {

                this.displayWineList(this.controller.model.getWineList(data));

            })
    }

    showWine(wine) {
        console.log(wine);
        this.displayWine(wine);
    }
}
