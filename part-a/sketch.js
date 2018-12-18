// lines starting with // are comments - the computer ignores them
// other lines are commands that the computer runs
function setup() {
  var rj = random(25, 255)
  var qj = random(75, 125)
  var aj = random(100, 150)
  createCanvas(600, 300);
  background(rj,qj,aj,aj)
  background(0, 0, 0)
 }
 function draw() {
  background(0, 0, 0, 20)
  noStroke();
  var rj = random(25, 255)
  var qj = random(75, 125)
  var aj = random(100, 150)
  //rotateX(frameCount * 0.002);
  rotate(frameCount * -0.02);
  fill(rj, aj, qj, qj);
  ellipse(100, 150, 43, 210);
 
}
