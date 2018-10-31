export default class ModalWindow {


  createModalWindow(wineData, action1, action2) {
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal');

    const wineWindow = document.createElement('div');
    wineWindow.classList.add('wine-container');

    const wineName = document.createElement('div');
    wineName.setAttribute('id', 'wine-name');

    const winePicture = document.createElement('div');
    winePicture.setAttribute('id', 'wine-picture');

    const buttonsDiv = this.addButtons(action1, action2);

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
    wineWindow.appendChild(buttonsDiv);
    return modalWindow;
  }


  createErrorModalWindow(errorData) {
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal');

    const notifyWindow = document.createElement('div');
    notifyWindow.classList.add('notify-container');

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('center-positioned-div');

    messageDiv.innerText = errorData;

    notifyWindow.appendChild(messageDiv);
    modalWindow.appendChild(notifyWindow);

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


  addButtons(action1, action2) {
    const buttonDiv = document.createElement('div');
    const button1 = document.createElement('div');
    const button2 = document.createElement('div');
    buttonDiv.classList.add('button-div');
    button1.classList.add('button');
    button2.classList.add('button');
    button1.addEventListener('click', action1);
    button2.addEventListener('click', action2);
    button1.innerHTML = '<i class="fas fa-trash"></i>';
    button2.innerText = 'Modify';
    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);

    return buttonDiv;
  }
}