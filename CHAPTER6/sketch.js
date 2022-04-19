const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

let toogle = true;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
}

function draw() {

  const x = mouseX;
  const y = mouseY;
  const size = 50;
  // condition
  if(mouseIsPressed === true){
        //rectangle
  fill(100, 100, 90, 90)
  rect(x, y, size * 2, size * 2)

    toogle = !toogle;
    console.log(toogle)
  }

  background(220, 88);

  if(toogle === true){
    background(150, 90);
    fill(97, 154, 63, 83);
  } else {
    background(220, 88);
    fill(237, 14, 93, 53);
  }
  // circle
  
  noStroke();
  ellipse(x, y, size, size);


}
