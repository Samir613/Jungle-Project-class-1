var canvas;
var ground;
var bg;
function preload(){
  bg=loadImage("Sprite/Jungle.png")
}

function setup() {
  canvas = createCanvas(displayWidth-20,displayHeight-30);
 ground = createSprite(900, 800, 1900, 50);
 ground.shapeColor="blue"
}

function draw() {
  background(bg);  
  drawSprites();
}