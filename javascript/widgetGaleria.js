if(localStorage.links === "")
{
  localStorage.links = 'https://fegemo.github.io/cefet-web/images/philae-parts.jpg';
}
else
{
  links = localStorage.links;
  links = links.split(";");
  links.pop();

  document.getElementById('slide').src = links[0];
}

if(localStorage.comentarios === "")
{
  localStorage.comentarios = 'comentario da foto 1';
}
else
{
  comentarios = localStorage.comentarios;
  comentarios = comentarios.split(";");
  comentarios.pop();

  document.getElementById('cmt_galeria').innerHTML = comentarios[0];
}

/*var servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];*/

let index = 0;
function alteraImagem(change) 
{

  links = localStorage.links;
  comentarios = localStorage.comentarios;

  links = links.split(";");
  comentarios = comentarios.split(";");

  links.pop();
  comentarios.pop();

  if (change === 1 || change === -1)
  {
    index = (links.length + index + change)%links.length;
  }
  document.getElementById('slide').src = links[index];
  document.getElementById('cmt_galeria').innerHTML = comentarios[index];
}

function salvaGaleria(e)
{
  localStorage.links = document.getElementById('img-galeria').value;
  localStorage.comentarios = document.getElementById('cmt-galeria').value;

  links = localStorage.links;
  comentarios = localStorage.comentarios;

  links = links.split(";");
  comentarios = comentarios.split(";");

  links.pop();
  comentarios.pop();

  document.getElementById('slide').src = links[0];
  document.getElementById('cmt_galeria').innerHTML = comentarios[0];
}

function carregaGaleria(e)
{
  document.getElementById('widget-galeria').style.display='block';
  document.getElementById('img-galeria').value = localStorage.links;
  document.getElementById('cmt-galeria').value = localStorage.comentarios;
}

document.getElementById('proximo').addEventListener('click', function(e) {alteraImagem(1)});

document.getElementById('anterior').addEventListener('click', function(e) {alteraImagem(-1)});