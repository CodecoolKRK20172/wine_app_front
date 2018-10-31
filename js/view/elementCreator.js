export default class ElementCreator {


  createListElement (data, action) {
    const chart = document.createElement('div');
    chart.classList.add('list-element');
    chart.innerHTML = data;
    chart.addEventListener('click', action);
    return chart;
  }

  createModalWindow(wineData) {
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal');

    const wineWindow = document.createElement('div');
    wineWindow.setAttribute('id', 'wine-container');

    const wineName = document.createElement('div');
    wineName.setAttribute('id', 'wine-name');

    const winePicture = document.createElement('div');
    winePicture.setAttribute('id', 'wine-picture');

    wineWindow.appendChild(wineName);
    wineWindow.appendChild(winePicture);
    modalWindow.appendChild(wineWindow);

    wineName.innerText = wineData.name;

    let wineFieldsList = [];
    for(let i=0; i<7; i++) {
      const wineField = document.createElement('div');
      wineField.classList.add('list-element', 'padded-list-element');
      wineWindow.appendChild(wineField);
      wineFieldsList.push(wineField);
    }
    let propertiesArray = this.getProperties(wineData);
    for (let i=1; i<propertiesArray.length; i++) {
      wineFieldsList[i-1].innerText = propertiesArray[i];
    }
    return modalWindow;
  }

  getProperties(wineData) {
    let newArray = [];
    for (let property in wineData) {
      if (wineData.hasOwnProperty(property)) {
        newArray.push(wineData[property]);
      }
    }
    return newArray;
  }
  

}