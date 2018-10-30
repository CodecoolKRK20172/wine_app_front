import Producer from "./producer.js";
import Region from "./region.js";
import Wine from "./wine.js";
import Year from './year.js';

export default class Model {
    constructor() {}

    getProducer(data) {
        return new Producer(data.idProducent, data.name);
    }

    getRegion(data) {
        return new Region(data.idRegion, data.name, data.country);
    }

    getWine(data) {
        let producer = this.getProducer(data.producent);
        let region = this.getRegion(data.region);
        let year = new Year(data.year[2], data.year[1], data.year[0])
        return new Wine(data.idWine, 
            data.name, 
            data.variety, 
            data.style, 
            data.type, 
            producer, 
            region,
            year);
    }

    getProducerList(data) {
        let resultList = [];
        data.forEach(element => {
            resultList.push(this.getProducer(element));
        });
        return resultList;
    }

    getRegionList(data) {
        let resultList = [];
        data.forEach(element => {
            resultList.push(this.getRegion(element));
        });
        return resultList;
    }

    getWineList(data) {
        let resultList = [];
        data.forEach(element => {
            resultList.push(this.getWine(element));
        });
        return resultList;
    }

}