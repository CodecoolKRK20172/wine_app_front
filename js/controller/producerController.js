
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

  getProducerById(id) {
    fetch(`http://localhost:8080/producents/${id}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(JSON.stringify(response).name);
    })
    .catch(function(error) {
      console.log('There has been a problem with your getProducerById fetch operation: ', error.message);
    });
  }
}
