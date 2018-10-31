export default class ElementCreator {

  createListElement (data, action) {
    const chart = document.createElement('div');
    chart.classList.add('list-element');
    chart.innerHTML = data;
    chart.addEventListener('click', action);
    return chart;
  }

}