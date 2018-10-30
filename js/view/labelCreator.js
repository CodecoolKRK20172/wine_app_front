export default class LabelCreator {

    getProducentLabel(name, action) {
        let label = document.createElement('div');
        label.setAttribute('class', 'label');
        label.innerText = name;
        label.addEventListener('click', action);

        return label;
    }
}