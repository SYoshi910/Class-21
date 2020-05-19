var move, ob2;

function setup() {
  //frameRate = 166;
  createCanvas(2560/2,900);
  static = createSprite(400, 500, 50, 50);
  move = createSprite(400,100,50,50);
  move.velocityY = 3;
  static.velocityY = 0;
  move.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  collide(move,static);
  edgeBounce(move);
  edgeBounce(static);
  drawSprites();
}
