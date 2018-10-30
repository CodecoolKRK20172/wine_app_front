export default class SearchModule {

    getInputSearchElement() {
        let inputSearchDiv = document.createElement('input');
        inputSearchDiv.setAttribute('id', 'search-input');
        inputSearchDiv.className = 'search-element';

        return inputSearchDiv;
    }

    getOptionSearchElement() {
        let searchOption = ['Name', 'Region'];
        let optionSearchElement = document.createElement('select');
        optionSearchElement.setAttribute('id', 'option-search-elemnent');
        searchOption.forEach(element => {
            optionSearchElement.appendChild(this.getOptionElement(element));
        })

        return optionSearchElement;
    }

    getOptionElement(value) {
        let option = document.createElement('option');
        option.value = value.toLowerCase();
        option.innerText = value;

        return option;
    }

}