let x, y, d;
function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  x=0;
  y=25;
  d=50;
}

function draw() {
  // Set background to black
  background(0,20);
  //reset x to 0 when it runs off the edge
  if(x > width){
    x=0;
  }
  if(x< width/2){
    fill('green');
  }
  else {
    fill('tan');
  }

  circle(x, y, d);
  x += 10;
  y += 5;

  if(y > height){
    y = 25;
  }
}
