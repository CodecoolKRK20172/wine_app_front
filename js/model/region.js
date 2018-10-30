export default class Region {

  constructor (id, name, country) {
    this.idRegion = id;
    this.name = name;
    this.country = country;
  }

  toString() {
    return this.country.toUpperCase() + ' ' + this.name;
  }

}