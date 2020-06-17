var color ; 

function setup() {
  createCanvas(510,510);
}
function draw() {
  if (World.mouseX >255) {
    color = World.mouseX - 255;
  }
  else{
    color = World.mouseX;
  }
  background(color,250,250);  
}