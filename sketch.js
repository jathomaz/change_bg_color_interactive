//var col = 0;
var r = 0;
var b = 255;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  r = map(mouseX, 0, 600, 0, 255);
  b = map(mouseX, 0, 600, 255, 0);
  background(r, 0, b);
  fill(250, 115, 222);
  ellipse(mouseX, 200, 64, 64)
}