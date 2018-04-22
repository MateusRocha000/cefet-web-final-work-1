var madoka = document.getElementById('madoka');
var maxX = screen.width;
//Tem que fazer o controle pra ela nao conseguir deslocar para fora da tela

var posicaoX = 0;

//document.onkeydown = movimentaX;
document.onkeypress = movimentaX;

function movimentaX(e) {
    if(e.keyCode==39){
        madoka.src="img/madokaDireita.gif";
        posicaoX += 5
        madoka.style.left = posicaoX + 'px';
    }
    if(e.keyCode==37){
        madoka.src="img/madokaEsquerda.gif";
        posicaoX -= 5
        madoka.style.left = posicaoX + 'px';
    }
}