let red = 0;
let green = 0;
let blue = 0;
let sun = 400;
function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height;
  frameRate(20);
}

function draw() {
  background(red += 3, green++, blue);

  noStroke();
  fill(255, 206, 0);
  ellipse(x, y, 150, 150);
  x = x
  // Moving up at a constant speed
  y = y - 1;

  fill(38, 25, 20);
  triangle(0, 399, 98, 205, 213, 405);
  fill(89, 54, 34);
  triangle(214, 400, 294, 271, 396, 400);
}
