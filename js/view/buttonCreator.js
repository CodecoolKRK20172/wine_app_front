export default class ButtonCreator {

    getButton(name, action) {
        let naviButtonDiv = document.createElement('div');
        naviButtonDiv.classList.add('nav-element');
        naviButtonDiv.innerText = name;
        naviButtonDiv.addEventListener('click', action);
        return naviButtonDiv;
    }
}