var box; //global variable


function setup() {
  createCanvas(400,400);
  
  box=createSprite(200,200,20,20);
}

function draw() 

{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
    background('red');

  }
  if(keyIsDown(LEFT_ARROW)){
    background('green');

  }
  if(keyIsDown(UP_ARROW)){
    background('yellow');
  }

  if(keyIsDown(DOWN_ARROW)){
    background('blue');
  }
drawSprites()
}





