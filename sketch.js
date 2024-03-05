function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  stroke(0); //테두리 색
}

function mouseDragged(){
  line(pmouseX, pmouseY, mouseX, mouseY) //처음x, 처음y, 나중x, 나중y
  if(mouseButton == LEFT){
    strokeWeight(2)
  }
  else if(mouseButton == RIGHT){
    stroke(220)
    strokeWeight(100)
  }
}