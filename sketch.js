var ball;
//Runs once
function setup() {
  createCanvas(5000,4500);
ball = createSprite(200,200, 20,50)
}

//Runs infinitely
function draw() 
{

  background(100);
  ball.velocityX = 500
  ball.velocityY = 500

  


  
  drawSprites()


}



