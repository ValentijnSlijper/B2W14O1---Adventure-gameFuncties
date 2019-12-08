var inventoryItem = document.getElementById('inventoryItem');
var image = document.getElementById('image');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var pagetitle = document.get
var description = document.getElementById('description');
var title = document.getElementById('title');

var mes = false;

//Startpagina!
function startgame(){
  title.innerHTML = "Survival weekend";
  description.innerHTML = "Je gaat met je vrienden  een Survival weekend houden in de Belgische Ardennen!<br>Hier ga je dan ook gevaarlijke activiteiten ondernemen!";
  button1.innerHTML = "Start Game";
  button2.style.display = 'none';
  button3.style.display = 'none';
  inventoryItem.style.display = 'none';
  image.setAttribute("src","images/start.jpg");
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
  description.innerHTML = "Je moet veilig aan de overkant van de Revier komen!<br>Kies uit één van de volgende acties!<br>Keuze 1: Je loopt over een boomstam!<br>Keuze 2: Je gaat zwemmend naar de overkant!<br>Pak het mes: Er ligt een mes aan de waterkant deze kan je mee nemen!";
  image.setAttribute("src", "images/water.jpg");
  button1.setAttribute("onclick", 'doodlvl2()');
  button2.setAttribute("onclick", 'level3()');
  button3.setAttribute("onclick", 'getmes()');
  button1.innerHTML = "Keuze 1";
  button2.innerHTML = "Keuze 2";
  button3.innerHTML = "Pak het mes op!";
  button2.style.display = "inline-block";
  button3.style.display = "inline-block";
}
function getmes(){
  mes = true;
}

function level3(){
  if(mes == true){
    title.innerHTML = "Je hebt hoger!";
    description.innerHTML = "Aangezien je honger hebt ga je opzoek naar eten!<br>Kies uit een van de volgende acties!<br>Keuze 1: Je gaat paddenstoelen plukken en eten!<br>Keuze 2: Je hebt een dood konijn gevonden en deze ga je eten!<br>Keuze 3: Je gaat blauwe bessen plukken een stuk verderop in het bos!";
    image.setAttribute("src", "images/bessen.jpg");
    button3.innerHTML = "Keuze 3";
    button1.setAttribute("onclick", 'doodlvl3p()');
    button2.setAttribute("onclick", 'doodlvl3k()');
    button3.setAttribute("onclick", 'einde()');
  }else {
    title.innerHTML = "Je hebt hoger!";
    description.innerHTML = "Aangezien je honger hebt ga je opzoek naar eten!<br>Kies uit een van de volgende acties!<br>Keuze 1: Je gaat paddenstoelen plukken en eten!<br>Keuze 2: Je hebt een dood konijn gevonden en deze ga je eten!<br>Keuze 3: Je gaat blauwe bessen plukken een stuk verderop in het bos!";
    image.setAttribute("src", "images/bessen.jpg");
    button3.innerHTML = "Keuze 3";
    button1.setAttribute("onclick", 'doodlvl3p()');
    button2.setAttribute("onclick", 'doodlvl3k()');
    button3.setAttribute("onclick", 'doodlvl3b()');
  }
}
function einde(){
  title.innerHTML = "Je hebt het Survival Weekend overleeft!";
  description.innerHTML = "Je werdt tijdens het plukken van bessen aangevallen door een beer maar deze heb je weg gejaagd met het mes wat je bij de revier hebt opgepakt!<br>Je hebt met succes het Survival weekend overleeft!";
  image.setAttribute("src","images/gewonne.jpg");
  button2.style.display = 'none';
  button3.style.display = 'none';
  button1.innerHTML = "Opnieuw spelen";
  button1.setAttribute("onclick", 'startgame()');
}

function doodlvl3b(){
  title.innerHTML = "Dood!";
  description.innerHTML = "Terwijl je bessen aan het plukken bent kom je een beer tegen en deze valt je aan en je gaat dood! Aangezien je geen mes hebt kan je je niet verdedigen!";
  image.setAttribute("src","images/beer.jpg");
  button2.style.display = 'none';
  button3.style.display = 'none';
  button1.innerHTML = "Ga Terug";
  button1.setAttribute("onclick", 'level2()');
}

function doodlvl3p(){
  title.innerHTML = "Dood!";
  description.innerHTML = "Je gaat dood omdat je een giftige paddenstoel hebt gegeten!";
  image.setAttribute("src","images/paddenstoel.png");
  button2.style.display = 'none';
  button3.style.display = 'none';
  button1.innerHTML = "Ga Terug";
  button1.setAttribute("onclick", 'level2()');
}
function doodlvl3k(){
  title.innerHTML = "Dood!";
  description.innerHTML = "Je gaat dood omdat je een ziek konijn hebt geten";
  image.setAttribute("src","images/konijn.jpg");
  button2.style.display = 'none';
  button3.style.display = 'none';
  button1.innerHTML = "Ga Terug";
  button1.setAttribute("onclick", 'level2()');
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
  description.innerHTML = "Je bent uitgeleden over de natte glade boomstam!<br>En je valt met je hoofd op een steen en je verdrinkt!";
  image.setAttribute("src", "images/boom.jpg");
  button1.innerHTML = "Ga Terug";
  button2.style.display = 'none';
  button3.style.display = 'none';
  button1.setAttribute("onclick", 'level2()');
}






function getmes(){
  mes = true;
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
