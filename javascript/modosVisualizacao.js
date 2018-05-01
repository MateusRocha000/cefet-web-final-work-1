function modosVisualizacao() {
    if (document.getElementById('mudarVisualizacao-botao').innerText==='Mudar para modo de edição') {
        document.getElementById('widget-chao-botao').style.display='inline-block';
        document.getElementById('widget-ceu-botao').style.display='inline-block';
        document.getElementById('widget-texto-botao').style.display='inline-block';
        document.getElementById('mudarVisualizacao-botao').innerText='Mudar para modo de visualização'
    } else {
        document.getElementById('widget-chao-botao').style.display='none';
        document.getElementById('widget-ceu-botao').style.display='none';
        document.getElementById('widget-texto-botao').style.display='none';
        document.getElementById('mudarVisualizacao-botao').innerText='Mudar para modo de edição'
    }
}
