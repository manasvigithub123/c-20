var fixedRect,movingRect;

function setup(){
createCanvas(1200,800)

fixedRect= createSprite(200,200,50,80);
movingRect= createSprite(400,200,80,30);

fixedRect.shapeColor="green"
movingRect.shapeColor="green"
}

function draw(){
background("lightblue")

stroke ("black")
fill ("black")
textSize(30)
text("Collision Algorithm",340,35);

movingRect.y=mouseY
movingRect.x=mouseX

if (movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2
   &&fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2
   &&movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2
   &&fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2
    ){
movingRect.shapeColor="black"
fixedRect.shapeColor="black"
}
else{
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green"
    
}
drawSprites();
}