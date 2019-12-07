var inventoryItem = document.getElementById('inventoryItem');
var image = document.getElementById('image');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var pagetitle = document.get
var description = document.getElementById('description');
var title = document.getElementById('title');

var beer = false;


function startgame(){
  title.innerHTML = "Survival weekend";
  description.innerHTML = "Je gaat met je vrienden  een Survival weekend houden in de Belgische Ardennen!<br>Hier ga je dan ook gevaarlijke activiteiten ondernemen!";
  button1.innerHTML = "Start Game";
  button2.style.display = 'none';
  button3.style.display = 'none';
  inventoryItem.style.display = 'none';
  button1.setAttribute("onclick", 'level1()');
}
function level1(){
  description.innerHTML = "De eerste Survival activiteit die je gaat ondernemen is klimmen!<br>Kies uit één van de volgende acties!<br> Keuze 1: Je gaat klimmen zonder  veiligheidsapparatuur!<br> Keuze 2: Je gaat klimmen en abseilen met behulp van een begeleider!<br>Keuze 3: Je gaat klimmen zonder zonder schoenen!";
  image.setAttribute("src","images/klimmen.jpg");
  button2.style.display = "inline-block";
  button3.style.display = "inline-block";
  button1.innerHTML = "Keuze 1";
  button2.innerHTML = "Keuze 2";
  button3.innerHTML = "Keuze 3";
  button1.setAttribute("onclick", 'doodlvl1()');
}


//NIET WERKEN CODE START NIET
// function doodlvl1(){
//   title.innerHTML = :"Dood!";
//   description.innerHTML = "Je valt dood omdat je je grip verliest en je geen veiligheidsapparatuur aan hebt!";
//   image.setAttribute("src","images/vallen.jpg");
//   button2.style.display = 'none';
//   button3.style.display = 'none';
//   button1.innerHTML = "Restart Game";
//   button1.setAttribute("onclick", 'startgame()');
// }



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
