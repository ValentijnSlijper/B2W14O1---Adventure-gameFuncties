var inventory = document.getElementById('inventory');
var image = document.getElementById('image');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var description = document.getElementById('description');

var beer = false;

function startgame(){
  if(beer == true){
    img.src = "beer.jpg";
    button1.innerHTML = "pak bierglas";
    button1.setAttribute("onclick", 'getbeer()');
  } else {
    image.src = "white.png";
    button1.innerHTML = "none";
  }

  button1.innerHTML = "pak bierglas";
  button1.setAttribute("onclick", 'getbeer()');
  button2.style.display = 'none';
  button3.style.display = 'none';
}
function getbeer(){
  beer = true;
  startgame();
}


startgame();
