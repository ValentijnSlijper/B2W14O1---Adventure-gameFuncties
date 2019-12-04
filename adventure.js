var inventoryItem = document.getElementById('inventoryItem');
var image = document.getElementById('image');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var description = document.getElementById('description');
var title = document.getElementById('title');

var beer = false;


function startgame(){
  title.innerHTML = "Het drink spel!";
  description.innerHTML = "Je gaat met je vrienden de club in en je moet een aantal<br>beslissingen nemen terwijl je hebt gedronken!";
  button1.innerHTML = "Start Game";
  button2.style.display = 'none';
  button3.style.display = 'none';
  inventoryItem.style.display = 'none';
  button1.setAttribute("onclick", 'level1()');
}
function level1(){
  description.innerHTML = "";
  button2.style.display = "inline-block";
  button3.style.display = "inline-block";
  button3.innerHTML = "keuze";
}

startgame();




function startgame2(){
  if(beer == true){
    img.src = "beer.jpg";
    button1.innerHTML = "pak bierglas";
    button1.setAttribute("onclick", 'getbeer()');
  } else {
    image.src = "images/party.jpg";
    button1.innerHTML = "none";
  }

  button1.innerHTML = "pak bierglas";
  button1.setAttribute("onclick", 'getbeer()');
  button2.style.display = 'none';
  button3.style.display = 'none';
  inventoryItem.style.display = 'none';
}
function getbeer(){
  beer = true;
  startgame();
}
