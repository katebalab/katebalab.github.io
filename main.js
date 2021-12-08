Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

String.prototype.toCapitalized = function () {
    let first = this[0].toUpperCase();
    let rest = this.slice(1);
    return `${first}${rest}`;
}

function initComponent(name, pics) {
    let picComponent = document.querySelector(`#${name}`);
    let button = picComponent.querySelector('button');
    let text = picComponent.querySelector('p');
    let picContainer = picComponent.querySelector('div');

    button.onclick = function () {
        let pic = pics.random();
        picContainer.innerHTML = `<img src="resources/images/${name}/${pic}.jpg" alt="sample image">`;
        text.innerText = pic.toCapitalized();
    }
    button.click();
}

let whoPics = ['monkey', 'naruto', 'pirate'];
let whatPics = ['banana', 'mask', 'iphone'];
let wherePics = ['castle', 'mountain', 'space'];
let whenPics = ['morning', 'night', 'winter'];

initComponent('who', whoPics);
initComponent('what', whatPics);
initComponent('where', wherePics);
initComponent('when', whenPics);