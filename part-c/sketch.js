function setup() {
  createCanvas(600, 800)
  background(0, 0, 0)
}

function draw() {
  noStroke();
  fill(255);
  rect(0, 0, 600, 50)
  fill (0, 0, 255)
  textSize(25);
  text('B', 5, 25);
  fill (255, 0, 0);
  text ('R', 40, 25)
  fill (0, 255, 0)
  text ('G', 75, 25)
  if (keyIsPressed) {
    if (key=='b') {
    fill(0, 0, 255)
    ellipse(mouseX, mouseY, 30, 30)
  }
    if (key=='r') {
    fill(255, 0, 0)
    ellipse(mouseX, mouseY, 30, 30)
  }
  if (key=='g') {
    fill(0, 255, 0)
    ellipse(mouseX, mouseY, 30, 30)
  }
}
}
