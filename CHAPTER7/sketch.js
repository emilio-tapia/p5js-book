const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight * 3

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
  let y = canvasHeight/6;
  let gapX = canvasWidth/8;
  let gapY = canvasHeight/24;
  let randomCustom = (i, j) => Math.round((Math.random()*100) - (i-j+20))

  for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
    fill(
      random(255) - 50, 
      randomCustom(i, j) + 50); 
    // p5.js random ==> random(range value)
    // custom random ==> randomCustom(first value, second value)
    ellipse(
        x * i/6 + gapX, 
        y * j/6 + gapY, 
        random(diameter), 
        random(diameter))
    }
  }


  for(let i=0; i<10; i++){
    for(let j=0; j<10; j++){
    fill(
      random(255) - 50, 
      randomCustom(i, j) + 50); 
    ellipse(
      x * i/6 + gapX, 
      y * j/6 + gapY + canvasHeight/3, 
      noise(frameCount+i+j)*diameter, 
      noise(frameCount+i+j)*diameter)

    }
  }

  let color = 0

  for(let v=0; v<9; v++){

    fill(
      255 - v * 35, 
      randomCustom(v, v) + 50); 
    ellipse(
      x * v/6 + gapX * 1.25, 
      y + (canvasHeight/3 * 2), 
      noise(frameCount+v)*diameter, 
      noise(frameCount+v)*diameter)

    color = color + v * 2

      fill(
        color + v * 10, 50); 
    rect(
        x * v/6 + gapX * 1.25, 
        y + (canvasHeight/3 * 2), 
        70, 
       400)

    // }
  }

}
