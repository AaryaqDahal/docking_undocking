var iss
var issImage
var spaceCraft,spaceCraftImg
var bg,hasDocked=false;

function setup() {

  createCanvas(600,350);
  spaceCraft=createSprite(285, 240, 50, 50);
spaceCraft.addImage(scImg1);
spaceCraft.scale= 0.2
iss=createSprite(330,130);
iss.addImage(issImage);
iss.scale=0.6
}
function preload(){
  bg=loadImage ("spacebg.jpg");
  issImage=loadImage ("iss.png");
  scImg1=loadImage ("spacecraft1.png");
  scImg2=loadImage ("spacecraft2.png");
  scImg3=loadImage ("spacecraft3.png");
  scImg4=loadImage ("spacecraft4.png");
}

function draw() {
  background(bg);  

  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1);
  
  if(keyDown("UP_ARROW")){
     spaceCraft.y = spaceCraft.y -2;
     }
     if(keyDown("DOWN_ARROW"))
     {
      spaceCraft.addImage(scImg2) 
      spaceCraft.y=spaceCraft.y+2;
     }
      if(keyDown("LEFT_ARROW"))
      {
        spaceCraft.addImage(scImg3);
        spaceCraft.x = spaceCraft.x - 1;
      }
      
    if(keyDown("RIGHT_ARROW"))
    {
      spaceCraft.addImage(scImg4);
      spaceCraft.x = spaceCraft.x + 1;
    }
  }
    if(spaceCraft.y <= (iss.y+20) && spaceCraft.x <= (iss.x-10)){
      hasDocked = true;
      textSize(25);
      fill("white")
      text("Docking Successful!", 200, 300);
    }
  drawSprites();
}


