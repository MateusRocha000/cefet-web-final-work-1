function alteraChao(e) {
    let chao = document.getElementsByTagName('body')[0];
    document.body.style.backgroundImage = 'url('+e.src+'), url("file:///C:/Users/daniel.vieira/Desktop/git/tp/img/ceu01.jpeg")';
    document.getElementById('widget-chao').style.display='none';
}