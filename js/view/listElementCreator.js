export default class ListElementCreator {


  createListElement () {
    const container = document.getElementById('container');
      const chart = document.createElement('div');
      chart.classList.add('list-element');
      container.appendChild(chart);
  }
}