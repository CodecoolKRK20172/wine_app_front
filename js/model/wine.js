export default class Wine {

    constructor(id, name, variety, style, type, producent, region, year) {
        this.id = id;
        this.name = name;
        this.variety = variety;
        this.style = style;
        this.type = type;
        this.producent = producent;
        this.region = region;
        this.year = year;
    }

    toString() {
        return this.name + ' ' + this.year.toString();
    }


}