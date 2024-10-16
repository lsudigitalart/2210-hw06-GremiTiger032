let imgElmo, randomCat, imgCat, imgPlaceX, imgPlaceY, pressed, imgRocket, imgRocketScalar, imgRocketSize, imgMoon, imgMoonScalar, imgMoonSize, imgMonster, imgMonsterScalar, imgMonsterSize;

function preload() {
  imgRocket = loadImage("gorilla1.jpg.webp");
  imgMoon = loadImage("gorilla2.jpg.webp");
  imgMonster = loadImage("banana.webp");
  imgCat = loadImage("gorilla3.jpg")
  imgElmo = loadImage("monke.webp")
  pressed = false;
}

function setup() {
  createCanvas(900, 900);
  imgRocketScalar = 3017/1748;
  imgRocketSize = 400;
  imgMoonScalar = 3090/2731;
  imgMoonSize = 250;
  imgMonsterScalar = 4096/2731;
  imgMonsterSize = 50;
  randomCat = round(random());
  print(randomCat)
}

function draw() {
  background(220);
  image(imgRocket, 0, 0, imgRocketSize, imgRocketSize/imgRocketScalar);
  image(imgMoon, 0, 0, imgMoonSize, imgMoonSize/imgMoonScalar);
  if(pressed) {
    image(imgMonster, imgPlaceX, imgPlaceY, imgMonsterSize, imgMonsterSize/imgMonsterScalar);
  }

  if(randomCat){
    image(imgCat, 0, height/4);
  } else {
    image(imgElmo, 0, height/4);
  }
  
}

function mousePressed() {
  imgPlaceX = mouseX;
  imgPlaceY = mouseY;
  pressed = true;
  print("hi")
}