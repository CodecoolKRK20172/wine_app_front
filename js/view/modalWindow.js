export default class ModalWindow {

    constructor() {
        this.wineFieldsList = [];
        this.wineName;
        this.propertyLabelList = ['name', 'variety', 'style', 'type', 'producent', 'country', 'region', 'year'];
        this.wineWindow;
    }

    createModalWindow() {
        const modalWindow = document.createElement('div');
        modalWindow.classList.add('modal');

        this.wineWindow = document.createElement('div');
        this.wineWindow.setAttribute('id', 'wine-container');

        const winePicture = document.createElement('div');
        winePicture.setAttribute('id', 'wine-picture');

        this.wineName = document.createElement('div');
        this.wineName.setAttribute('id', 'wine-name');

        this.wineWindow.appendChild(this.wineName);
        this.wineWindow.appendChild(winePicture);
        modalWindow.appendChild(this.wineWindow);

        for(let i = 0; i < this.propertyLabelList.length; i++) {
            const propertyField = this.getField(['property-field']);
            const labelField = this.getField(['list-element-label']);
            labelField.innerText = this.propertyLabelList[i] + ': ';
            const wineField = this.getField(['list-element', 'padded-list-element']);

            propertyField.appendChild(labelField);
            propertyField.appendChild(wineField);
            this.wineWindow.appendChild(propertyField);
            this.wineFieldsList.push(wineField);
        }

        return modalWindow;
    }

    setParameters(wineParameterList) {
        this.wineName.innerText = wineParameterList[0];

        for (let i = 0; i < this.wineFieldsList.length; i++) {
            this.wineFieldsList[i].innerText = wineParameterList[i];
        }
    }

    getField(classNameList) {
        const field = document.createElement('div');
        classNameList.forEach(element => {
            field.classList.add(element);
        });

        return field;
    }

    addButtons() {
        const buttonDiv = document.createElement('div');
        const button1 = document.createElement('div');
        const button2 = document.createElement('div');
        buttonDiv.classList.add('button-div');
        button1.classList.add('button');
        button2.classList.add('button');
        button1.innerHTML = '<i class="fas fa-trash"></i>';
        button2.innerText = 'Modify';
        buttonDiv.appendChild(button1);
        buttonDiv.appendChild(button2);

        this.wineWindow.appendChild(buttonDiv);
    }
}