export default class Wine {

  constructor(id, name, variety, style, type, producer, region, year) {
    this.idWine = id;
    this.name = name;
    this.variety = variety;
    this.style = style;
    this.type = type;
    this.producer = producer;
    this.region = region;
    this.year = year;
    
  }

  toString() {
    return this.name + ' ' + this.region + ' ' + this.year;
  }

  // getParameters() {
  //   let parametersArray = [];
  //   parametersArray.push(this.name);
  //   parametersArray.push(this.name);
  //   parametersArray.push(this.name);
  //   parametersArray.push(this.name);
  //   parametersArray.push(this.name);
  //   parametersArray.push(this.name);

  // }

}