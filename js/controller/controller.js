export default class Controller {

    constructor(model) {
        this.model = model;
        this.url = 'http://localhost:8080/';
    }

    getProducentList() {
        fetch(this.url + 'producents', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                this.model.setItemList(this.model.getProducentList(data));
                this.model.notifyAllObservers();
            })
    }

    getRegionList() {
        fetch(this.url + 'regions', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                let regionList = [];
                for (let i = 0; i < data.length; i++) {
                    regionList.push(data[i].name);
                }
                this.model.setItemList(this.model.getRegionList(data));
                this.model.notifyAllObservers();

            })
    }

    getWineList() {
        fetch(this.url + 'wines', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                let wineList = [];
                for (let i = 0; i < data.length; i++) {
                    wineList.push(data[i].name);

                }
                console.log(data.length);
                this.model.setItemList(this.model.getWineList(data));
                this.model.notifyAllObservers();

            })
    }

    getWineListBySearchInput(input, option) {
        console.log(input);
        fetch(this.url + 'wines', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                let wineList = this.model.getWineList(data);
                if (option === 'regionName') {
                    this.model.setItemList(this.model.getWineListByRegion(wineList, input));

                } else if (option === 'name') {
                    this.model.setItemList(this.model.getWineListBySearchInput(wineList, input));
                }
                this.model.notifyAllObservers();
            })


    }

    deleteRecord(wine) {
        fetch(this.url + 'wines/' + wine.idWine, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((data) => {
                this.model.notifyAllObservers();

            })
    }

    showProducentWines(producent) {
        fetch(this.url + 'wines', {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                let wineList = this.model.getWineListByProducent(data, producent);
                this.model.setItemList(wineList);
                this.model.notifyAllObservers();

            })
    }

    showRegionWines(region) {
        fetch(this.url + 'wines/?regionName=' + region.name, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                this.model.setItemList(this.model.getWineList(data));
                this.model.notifyAllObservers();

            })
    }

    addWine(wine) {
        console.log(wine)
        fetch(this.url + 'wines/', {
            method: 'POST',
            headers: new Headers({'content-type': 'application/json'}),
            body: JSON.stringify(wine)
        })
            .then((response) => {response.json(); console.log(response)})
            .then((data) => {
                // console.log(response.status)
                alert(data.message)
                // console.log(response)
                console.log('cośtam')
                // this.model.setItemList(this.model.getWineList(data));
                // this.model.notifyAllObservers();

            })
    }

    showWine(wine) {
        console.log(wine)
        this.model.setCurrentWine(wine);
        this.model.notifyAllObservers();
    }
}
