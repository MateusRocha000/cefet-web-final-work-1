window.addEventListener('keydown', moveSelection);

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
    }
}

function leftArrowPressed() {
    let element = document.getElementById("madokaAndando");
    element.style.left = parseInt(element.style.left) - 10 + 'px';
}

function rightArrowPressed() {
    let element = document.getElementById("madokaAndando");
    element.style.left = parseInt(element.style.left) + 10 + 'px';

}

function upArrowPressed() {
    let element = document.getElementById("madokaAndando");
    element.style.top = parseInt(element.style.top) - 10 + 'px';
}




