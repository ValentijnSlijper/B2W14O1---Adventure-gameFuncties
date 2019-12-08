var inventoryItem = document.getElementById('inventoryItem');
var image = document.getElementById('image');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var pagetitle = document.get
var description = document.getElementById('description');
var title = document.getElementById('title');

var beer = false;

//Startpagina!
function startgame(){
  title.innerHTML = "Survival weekend";
  description.innerHTML = "Je gaat met je vrienden  een Survival weekend houden in de Belgische Ardennen!<br>Hier ga je dan ook gevaarlijke activiteiten ondernemen!";
  button1.innerHTML = "Start Game";
  button2.style.display = 'none';
  button3.style.display = 'none';
  inventoryItem.style.display = 'none';
  button1.setAttribute("onclick", 'level1()');
}

//level1 Klimmen!
function level1(){
  title.innerHTML = "Klimmen en abseilen!";
  description.innerHTML = "De eerste Survival activiteit die je gaat ondernemen is klimmen!<br>Kies uit één van de volgende acties!<br> Keuze 1: Je gaat klimmen zonder  veiligheidsapparatuur!<br> Keuze 2: Je gaat klimmen en abseilen met behulp van een begeleider!<br>Keuze 3: Je gaat klimmen zonder zonder schoenen!";
  image.setAttribute("src","images/klimmen.jpg");
  button2.style.display = "inline-block";
  button3.style.display = "inline-block";
  button1.innerHTML = "Keuze 1";
  button2.innerHTML = "Keuze 2";
  button3.innerHTML = "Keuze 3";
  button1.setAttribute("onclick", 'doodlvl1()');
  button2.setAttribute("onclick", 'level2()');
  button3.setAttribute("onclick", 'doodlvl1()');
}


//Level2 Rievier!
function level2(){
  title.innerHTML = "Revier!";
  description.innerHTML = "Je moet veilig aan de overkant van de Revier komen!<br>Kies uit één van de volgende acties!<br>Keuze 1: Je loopt over een boomstam!<br>Keuze 2: Je gaat zwemmend naar de overkant!<br>Keuze 3: Je gaat met een klein boodje naar de overkant!";
  image.setAttribute("src", "images/water.jpg");
  button1.setAttribute("onclick", 'doodlvl2()');
  button2.setAttribute("onclick", 'level3()');
  button3.setAttribute("onclick", 'doodlvl1()');
  button3.innerHTML = "Pak het mes op!";
}





//Dood level1 Klimmen!
function doodlvl1(){
  title.innerHTML = "Dood!";
  description.innerHTML = "Je valt dood omdat je je grip verliest en je geen veiligheidsapparatuur of schoenen aan hebt!";
  image.setAttribute("src","images/vallen.jpg");
  button2.style.display = 'none';
  button3.style.display = 'none';
  button1.innerHTML = "Ga Terug";
  button1.setAttribute("onclick", 'level1()');
}
function doodlvl2(){
  title.innerHTML = "Dood!";
  description.innerHTML = "Je bent uitgeleden over de natte glade boomstam!<br>En je valt met je hoofd op een steen en je valt dood!";
  image.setAttribute("src", "images/boom.jpg");
  button1.innerHTML = "Ga Terug";
  button2.style.display = 'none';
  button3.style.display = 'none';
  button1.setAttribute("onclick", 'doodlvl1()');
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
