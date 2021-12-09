Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

String.prototype.toCapitalized = function () {
    let first = this[0].toUpperCase();
    let rest = this.slice(1);
    return `${first}${rest}`;
}

class TrainingPic extends HTMLElement {
    #picContainer = document.createElement('div');
    #text = document.createElement('p');
    #button = document.createElement('button');
    #pics = [];
    #oldPic = "";
    #type = "";

    constructor() {
        super();
        this.setAttribute('class', 'pic-container')

        this.#type = this.getAttribute('type').toLowerCase().trim();
        this.#button.innerText = this.#type.toCapitalized();
        this.#getPicNames().then(() => {
            this.#button.onclick = this.#buttonOnClickListener();

            this.appendChild(this.#picContainer);
            this.appendChild(this.#text);
            this.appendChild(this.#button);

            this.#button.click();
        });
    }

    async #getPicNames() {
        const response = await fetch(`https://api.github.com/repos/katebalab/katebalab.github.io/contents/resources/images/${this.#type}`);
        const data = await response.json();
        console.log(data);
        this.#pics = data.map((obj) => {
            return obj.name;
        })
    }

    #buttonOnClickListener() {
        return () => {
            let pic = this.#pics.random();
            while (pic === this.#oldPic) {
                pic = this.#pics.random();
            }
            this.#oldPic = pic;
            this.#picContainer.innerHTML = `<img src="resources/images/${this.#type}/${pic}" alt="sample image">`;
            this.#text.innerText = pic.substr(0, pic.lastIndexOf('.')).toCapitalized() || pic.toCapitalized();
        }
    }
}

customElements.define('training-pic', TrainingPic);