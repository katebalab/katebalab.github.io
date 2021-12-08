Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

String.prototype.toCapitalized = function () {
    let first = this[0].toUpperCase();
    let rest = this.slice(1)
    return `${first}${rest}`
}

function initComponent(name, pics) {
    let picComponent = document.querySelector(`#${name}`);
    let button = picComponent.querySelector('button');
    let picContainer = picComponent.querySelector('div');

    button.onclick = function () {
        let pic = pics.random()
        picContainer.innerHTML = `<img src="resources/images/${name}/${pic}.jpg" alt="sample image"><p>${pic.toCapitalized()}</p>`
    }
}

let whoPics = ['monkey', 'naruto', 'pirate'];

initComponent('who', whoPics)

let whatPics = ['banana', 'mask', 'iphone']

initComponent('what', whatPics)

let wherePics = ['castle', 'mountain', 'space']

initComponent('where', wherePics)

let whenPics = ['morning', 'night', 'winter']

initComponent('when', whenPics)