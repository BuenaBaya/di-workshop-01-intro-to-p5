// lines starting with // are comments - the computer ignores them
// other lines are commands that the computer runs
function setup() {
  var rj = random(25, 255)
  var qj = random(75, 125)
  var aj = random(100, 150)
  createCanvas(600, 300, WEBGL);
  background(rj,qj,aj,aj)
  
 }
 function draw() {
  var rj = random(25, 255)
  var qj = random(75, 125)
  var aj = random(100, 150)
  background(rj,qj,aj,aj)
  rotateX(frameCount * 0.002);
  rotateZ(frameCount * -0.02);
  noFill();
  cone(100, 150);
 
}
