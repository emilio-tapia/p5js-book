const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let speed = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER)
}

function draw() {
  background(1, 186, 240);
  speed++;

  const x = -200  + speed;
  const y = canvasHeight/2;

  // circle 1
  fill(237, 34, 93);
  noStroke();
  ellipse(x, y, 200, 200)

  // rectangle 1
  fill(255)
  rect(x, y, 150, 30)

  const x2 = -400  + (speed * 2);

  // circle 2
  fill(37, 134, 93);
  noStroke();
  ellipse(x2, y, 200, 200)

  // rectangle 2
  fill(255)
  rect(x2, y, 150, 30)

  const x3 = -800  + (speed * 3);

    // circle 3
    fill(120, 64, 93);
    noStroke();
    ellipse(x3, y, 200, 200)
  
    // rectangle 3
    fill(255)
    rect(x3, y, 150, 30)
}
