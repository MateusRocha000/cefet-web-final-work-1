var madoka = document.getElementById('madoka');
var posicaoX = 0;
var imagemEscolhida = 0;

document.onkeydown = movimentandoX;
document.onkeyup = paradaX;

function movimentandoX(e) {
    if(e.keyCode==39){
        if (imagemEscolhida !== 1) {
            madoka.src = "img/madokaDireita.gif";
            imagemEscolhida = 1;
        }
        let tamanhoTela = window.innerWidth - window.innerWidth*0.09;
        if (!(posicaoX + 5 > tamanhoTela))
            posicaoX += 5;
        madoka.style.left = posicaoX + 'px';
    }
    if(e.keyCode==37){
        if (imagemEscolhida !== 2) {
            madoka.src = "img/madokaEsquerda.gif";
            imagemEscolhida = 2;
        }
        if (!(posicaoX - 5 < 0))
            posicaoX -= 5;
        madoka.style.left = posicaoX + 'px';
    }
}

function paradaX() {
    madoka.src = "img/madokaParada.gif";
    imagemEscolhida = 0;
}