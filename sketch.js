var bkgd
var StartBkgd;
var Button, ButtonStart

var GameState="start";


function preload() {

  bkgd=loadImage("Escape Room.jpg");

  Button=loadImage("Button.png");

  StartBkgd=loadImage("Room You Escape.png");

  ButtonStart=loadImage("ButtonStart.png");

 

}

function setup() {
  createCanvas(displayWidth,displayHeight);

  button=createSprite(575, 390,);
  button.addImage(Button);
  button.scale=0.2;
button.visible=false;




 
}

function draw() {
  
  
  
if(GameState==="start"){
  background(StartBkgd);
   StartButton=createSprite(775, 100)
  StartButton.addImage(ButtonStart)

  if(mousePressedOver(StartButton)){
   
    GameState="roomOne";

 
  }

}
else if(GameState==="roomOne"){
  background(bkgd);

  
}
}