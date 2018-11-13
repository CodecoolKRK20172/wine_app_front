import Producent from "./producent.js";
import Region from "./region.js";
import Wine from "./wine.js";
import Year from "./year.js";

export default class Model {

    constructor() {
        this.observerList = [];
        this.itemList = [];
        this.currentWine;
    }

    getProducent(data) {
        return new Producent(data.idProducent, data.name);
    }

    getProducentList(data) {
        let productList = []
        data.forEach(element =>{
            productList.push(this.getProducent(element));
        });

        return productList;
    }

    getRegion(data) {
        return new Region(data.id, data.name, data.country);
    }

    getRegionList(data) {
        let regionList = []
        data.forEach(element =>{
            regionList.push(this.getRegion(element));
        });

        return regionList;
    }

    getWine(data) {
        let producent = this.getProducent(data.producent);
        let region = this.getRegion(data.region);
        let year = new Year(data.year[2], data.year[1], data.year[0]);

        return new Wine(data.idWine, data.name, data.variety, data.style, data.type, producent, region, year);
    }

    getWineList(data) {
        let wineList = []
        data.forEach(element =>{
            wineList.push(this.getWine(element));
        });

        return wineList;
    }

    getWineListByRegion(wineList, searchInput) {
        let resultList = [];
        wineList.forEach(element => {
            let regionName = element.region.name.toLowerCase();
            if (regionName.slice(0, searchInput.length).includes(searchInput.toLowerCase())) {
                resultList.push(element);
            }
        });

        return resultList;
    }

    getWineListByProducent(data, producent) {
        let wineList = this.getWineList(data);
        let resultList = [];
        wineList.forEach(element => {
            if (element.producent.id === producent.id) {
                resultList.push(element);
            }
        });

        return resultList;
    }

    getWineListBySearchInput(wineList, searchInput) {
        let resultList = [];
        wineList.forEach(element => {
            let wineName = element.name.toLowerCase()
            if (wineName.slice(0, searchInput.length).includes(searchInput.toLowerCase())) {
                resultList.push(element);
            }
        });

        return resultList;
    }

    setItemList(itemList) {
        this.itemList = itemList;
    }

    setCurrentWine(wine) {
        this.currentWine = wine;
    }

    attach(observer) {
        this.observerList.push(observer);
    }

    notifyAllObservers() {
        this.observerList.forEach(element => {
            element.update(this);
        })
    }
}