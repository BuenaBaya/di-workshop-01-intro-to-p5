function setup() {
  createCanvas(400, 400)
  background(0, 0, 0)
}

function draw() {
  var rj = random(25, 255)
  var qj = random(0, 125)
  var aj = random(125, 150)
  var moose = ((mouseX*mouseY)/rj)
  var mooses = (mouseY*aj)

  noStroke();
  fill(moose,11,mooses)
  ellipse(mouseX, mouseY, aj, aj)
  stroke (aj, 0, 0, qj)
  fill (aj, 0, 0, qj);
  var ajx = (aj-25)
  ellipse (mouseX, mouseY, ajx, ajx)
  var ajk = (aj+25)
  noStroke();
  fill (mooses, ajk, rj, 40)
  triangle (mouseX, mouseY, mouseX+rj, mouseY+50, mouseX+aj, mouseY+ajx,)
  triangle (mouseX-qj, mouseY/rj, mouseX, mouseY+aj, mouseX+aj/2, mouseY+ajx,)
}
