const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight * 2

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  frameRate(12)
}

function draw() {
  
  background(175, 50);

  textSize(40);

  //circle properties
  noStroke();
  let diameter = 50
  let x = canvasWidth/2;
  let y = canvasHeight/4;
  let gapX = canvasWidth/8;
  let gapY = canvasHeight/16;
  let randomCustom = (i, j) => Math.round((Math.random()*100) - (i-j+20))

  for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
    fill(random(255) - 50, randomCustom(i, j) + 50); 
    // p5.js random ==> random(range value)
    // custom random ==> randomCustom(first value, second value)
    ellipse(x * i/6 + gapX, y * j/6 + gapY, random(diameter), random(diameter))
    }
  }


  for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
    fill(random(255) - 50, randomCustom(i, j) + 50); 
    ellipse(x * i/6 + gapX, y * j/6 + gapY + canvasHeight/2, noise(frameCount+i+j)*diameter, noise(frameCount+i+j)*diameter)

    }
  }

}
