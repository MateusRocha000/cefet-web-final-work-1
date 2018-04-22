window.onkeyup = function(pressed) {
    var key = pressed.keyCode ? pressed.keyCode : pressed.which;
    switch (key) {
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
    let num = parseInt(element.style.left) + 10;
    element.style.left = num + 'px';
}

function upArrowPressed() {
    let element = document.getElementById("madokaAndando");
    element.style.top = parseInt(element.style.top) - 10 + 'px';
}