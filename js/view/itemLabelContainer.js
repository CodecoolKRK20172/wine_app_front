import LabelCreator from "./labelCreator.js";

export default class ItemLabelContainer {

    constructor() {
        this.action;
    }

    createItemList(nameList) {
        let div = document.createElement('div');
        div.setAttribute('id', 'content')
        nameList.forEach(element => {
            let item = new LabelCreator(element, this.action);
            div.appendChild(item.getElement());
        });

        return div;
    }

    setAction(action) {
        console.log(action)
        this.action = action;
    }

    update(itemList) {
        this.itemLabelList = this.createItemList(itemList);
    }

    getElement() {
        return this.itemLabelList;
    }
}