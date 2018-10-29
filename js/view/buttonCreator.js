export default class ButtonCreator {

    getButton(name, action) {
        let naviButtonDiv = document.createElement('div');
        naviButtonDiv.innerText = name;
        naviButtonDiv.addEventListener('click', action);

        return naviButtonDiv;
    }
}