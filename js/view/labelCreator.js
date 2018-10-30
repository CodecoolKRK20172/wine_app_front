export default class LabelCreator {

    getItemLabel(name, action) {
        let itemLabel = document.createElement('div');
        itemLabel.setAttribute('class', 'label');
        itemLabel.innerText = name;
        itemLabel.addEventListener('click', action);

        return itemLabel;
    }
}