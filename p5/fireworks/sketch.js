var fireworks = [];
var gravity;

function setup() {
  createCanvas(600, 600);
  stroke(255);
  strokeWeight(4);
  background(0);
  gravity = createVector(0, 0.2);
}

function draw() {
  colorMode(RGB);
  background(0, 25);
  if(random(1) < 0.06)
    fireworks.push(new Firework());

  for(var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if(fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
