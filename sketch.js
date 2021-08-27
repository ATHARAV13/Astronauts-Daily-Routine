var bg,sleep,brush,gym,eat,drink,move,bath;
function preload() {
    //load the images here
    bg=loadImage("iss.png")
    sleep=loadImage("sleep.png")
    brush=loadImage("brush.png")
    gym=loadAnimation("gym12.png","gym11.png","gym1.png","gym2.png")
    eat=loadAnimation("eat1.png","eat2.png")
    drink=loadAnimation("drink1.png","drink2.png")
    move=loadAnimation("move.png")
    bath=loadAnimation("bath1.png","bath2.png")
}

function setup(){
    createCanvas(800,600);
   
  astronaut = createSprite (400,400)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.scale=0.1;
  
  wall=createSprite(400,600,800,1);
  wall.visibility=false;
   wall1=createSprite(0,300,1,800);
 wall1.visibility=false;
 wall2=createSprite(400,0,800,1);
 wall2.visibility=false;
 wall3=createSprite(800,300,1,800);
 wall3.visibility=false;
  
}

function draw() {
 background(bg);
 createEdgeSprites();
 astronaut.bounceOff(wall);
 astronaut.bounceOff(wall1);
 astronaut.bounceOff(wall2);
 astronaut.bounceOff(wall3);
 
 if(keyDown(UP_ARROW)){
     astronaut.addAnimation("brushing",brush)
     astronaut.changeAnimation("brushing",brush)
     astronaut.y=350;
     astronaut.x=400;
     astronaut.velocityX=0
     astronaut.velocityY=0
 }

if(keyDown(DOWN_ARROW)){
    astronaut.addAnimation("gymming",gym)
    astronaut.changeAnimation("gymming",gym)
    astronaut.y=390;
    astronaut.x=400;
    astronaut.velocityX=0
    astronaut.velocityY=0
     }
    
    
 if(keyDown(LEFT_ARROW)){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating",eat)
    astronaut.x=230;
    astronaut.velocityX=0
    astronaut.velocityY=0
     }

if(keyDown(RIGHT_ARROW)){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing",bath)
    astronaut.x=580;
    astronaut.velocityX=0
    astronaut.velocityY=0
}

//keycode for m
if(keyDown("m")){
    
    astronaut.addAnimation("moving",move)
    astronaut.changeAnimation("moving",move)
    astronaut.velocityX=1
    astronaut.velocityY=1
    
}
textSize(30);
  fill("white")
  text("Instructions:",20, 35);
  textSize(15);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);

drawSprites();
}
