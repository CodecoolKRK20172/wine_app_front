
export default class Controller {

  constructor(model) {
    this.model = model;
    this.url = 'http://localhost:8080';
  }

  showProducer() {
      console.log('answer');
  }

  getAllProducers() {
    console.log(this.controller.url);
    fetch("http://localhost:8080/producents")
    .then(function(response) {
      return response.json();
    })
    .then(function(response) { 
      response.forEach(element => {
        const container = document.getElementById('container');
        const chart = document.createElement('div');
        chart.classList.add('list-element');
        container.appendChild(chart);
        console.log(element.name);
        chart.innerHTML = element.name;
        });
      console.log(JSON.stringify(response));
    })
    .catch(function(error) {
      console.log('There has been a problem with your getAllProducers fetch operation: ', error.message);
    });
  }

  getProducerById(id) {
    let producerId = id;
    fetch(`http://localhost:8080/producents/${producerId}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(JSON.stringify(response).name);
    })
    .catch(function(error) {
      console.log('There has been a problem with your getProducerById fetch operation: ', error.message);
    });
  }
}
