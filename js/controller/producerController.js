
export default class Controller {

  constructor(model) {
    this.model = model;
  }

  showProducer() {
      console.log('answer');
  }

  getAllProducers() {
    fetch("http://localhost:8080/producents")
    .then((response) => response.json())
    .then((response) => { 
      this.displayProducersList(response);
    })
    .catch(function(error) {
      console.log('There has been a problem with your getAllProducers fetch operation: ', error.message);
    });
  }

  getAllWines() {
    fetch("http://localhost:8080/wines")
    .then((response) => response.json())
    .then((response) => { 
      this.displayWinesList(response);
      console.log(JSON.stringify(response));
    })
    .catch(function(error) {
      console.log('There has been a problem with your getAllProducers fetch operation: ', error.message);
    });
  }

  getAllRegions() {
    fetch("http://localhost:8080/regions")
    .then((response) => response.json())
    .then((response) => { 
      this.displayRegionsList(response);
    })
    .catch(function(error) {
      console.log('There has been a problem with your getAllProducers fetch operation: ', error.message);
    });
  }

  getProducerById(id) {
    let producerId = id;
    fetch(`http://localhost:8080/producents/${producerId}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(JSON.stringify(response).name);
    })
    .catch(function(error) {
      console.log('There has been a problem with your getProducerById fetch operation: ', error.message);
    });
  }
}
