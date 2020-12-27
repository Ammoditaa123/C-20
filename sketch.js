var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(200, 200, 50, 50)
  fixedRect.shapeColor="green";
  movingRect = createSprite(250, 300, 100, 100)
  movingRect.shapeColor="red";
}
// |2-1|=1
// |1-2|=1
function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(Math.abs(fixedRect.x-movingRect.x)<(fixedRect.width/2+movingRect.width/2)&& Math.abs(fixedRect.y-movingRect.y)<(fixedRect.width/2+movingRect.width/2))
  {
    fixedRect.shapeColor="yellow";
    movingRect.shapeColor="yellow";
  }
  else
  {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="red";
  }

  drawSprites();
}