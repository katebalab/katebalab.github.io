Array.prototype.random = function () {
    return this[Math.floor((Math.random() * this.length))];
}

function initWho() {
    let pics = ['monkey', 'naruto', 'pirate'];
    let picComponent = document.querySelector('#who');
    let button = picComponent.querySelector('button');
    let picContainer = picComponent.querySelector('div');

    button.onclick = function () {
        picContainer.innerHTML = `<img src="resources/images/who/${pics.random()}.jpg" alt="sample image">`
    }
}

initWho()