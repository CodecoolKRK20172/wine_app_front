export default class LabelCreator {

    constructor(element, action) {
        this.itemLabel = document.createElement('div');
        this.itemLabel.setAttribute('class', 'label');
        this.itemLabel.innerText = element.toString();
        this.itemLabel.addEventListener('click', () => {
            action(element);
        });
    }

    getElement() {
        return this.itemLabel;
    }
}