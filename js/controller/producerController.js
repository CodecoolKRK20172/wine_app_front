
export default class Controller {

  constructor(model) {
    this.model = model;
  }

  showProducer() {
      console.log('answer');
  }

  getAllProducers() {
    fetch("http://localhost:8080/producents", {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => { 
      this.displayProducersList(this.controller.model.getProducerList(response));
    })
    .catch(function(error) {
      console.log('There has been a problem with your getAllProducers fetch operation: ', error.message);
    });
  }

  getAllWines() {
    fetch("http://localhost:8080/wines", {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => { 
      this.displayWinesList(this.controller.model.getWineList(response));
    })
    .catch(function(error) {
      console.log('There has been a problem with your getAllWines fetch operation: ', error.message);
    });
  }

  getWinesByRegionName(region) {
    let regionName = region.name;
    fetch(`http://localhost:8080/wines?regionName=${regionName}`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => { 
      this.displayWinesList(this.controller.model.getWineList(response));
    })
    .catch(function(error) {
      console.log('There has been a problem with your getAllWines fetch operation: ', error.message);
    });
  }

  deleteOneWine(wine) {
    let idWine = wine.idWine;
    fetch(`http://localhost:8080/wines/${idWine}`, {
      method: 'DELETE',
      mode: "cors"
    })
    .then((response)=> {
      if (response.status !== 200) {
        this.showError(response.status);
      } else {
        this.showResult(response.status);
      }
    })
    .catch(function(error) {
      console.log('There has been a problem with your deleteOneWine fetch operation: ', error.message);
    });
  }

  getOneWine(wine) {
    let idWine = wine.idWine;
    fetch(`http://localhost:8080/wines/${idWine}`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => { 
      this.displayOneWine(this.controller.model.getWine(response));
    })
    .catch(function(error) {
      console.log('There has been a problem with your getAllWines fetch operation: ', error.message);
    });
  }

  getAllRegions() {
    fetch("http://localhost:8080/regions", {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => { 
      this.displayRegionsList(this.controller.model.getRegionList(response));
    })
    .catch(function(error) {
      console.log('There has been a problem with your getAllRegions fetch operation: ', error.message);
    });
  }

  getProducerById(data) {
    let id = data.idProducent;
    fetch(`http://localhost:8080/producents/${id}`, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((response) => {
      this.displayOneProducer(this.controller.model.getProducer(response));
    })
    .catch(function(error) {
      console.log('There has been a problem with your getProducerById fetch operation: ', error.message);
    });
  }
}
