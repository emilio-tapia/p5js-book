const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let i = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textAlign(CENTER, CENTER)
  rectMode(CENTER)
  frameRate(60); // Necesario poner aqui esta funcion
}

function draw() {
  background(220);
  fill(237, 34, 93)
  textSize(36)
  i++;
  
  let x1 = 0;
  const y = (height/2 - 200) + Math.round(Math.random() * 8);
  
  if(x1 === 0){
    x1 = (-200 + frameCount) * 4; 
  }
  
  if(x1 > width - 100){
    i = 0;
    x1 = (width - 100);
    
  }
  
  let x2 = x1 * 2;

  if(x2 > width - 100){
    x2 = (width - 100);
  }
  
  let x3 = x1 * 4;

  if(x3 > width - 100){
    x3 = (width - 100);
  }
  
  // circle 1
  fill(237, 34, 93);
  noStroke();
  ellipse(x1, y, 200, 200)

  // rectangle 1
  fill(255)
  rect(x1, y, 150, 30)


  // circle 2
  fill(37, 94, 93);
  noStroke();
  ellipse(x2, y, 200, 200)

  // rectangle 2
  fill(255)
  rect(x2, y, 150, 30)

  // circle 3
  fill(97, 144, 43);
  noStroke();
  ellipse(x3, y, 200, 200)

  // rectangle 3
  fill(255)
  rect(x3, y, 150, 30)



  let fps = parseInt(frameRate(), 10) // Funcion frame rate no ejecuta ningun dato, devuelve el frame rate actual
  text('frameRate:' + fps,  width/2,  height/2)
  text('frameCount:' + frameCount,  width/2,  height/2 + 50)
}
