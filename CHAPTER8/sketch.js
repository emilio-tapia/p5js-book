const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  frameRate(12)
}

function draw() {
  background(220);
  grid(10, 5, 40);
}

function grid(numX, numY, size){

  
  
  for(let x=0; x<numX; x++){
    for (let y=0; y<numY; y++){
      
      fill(
        random(255) - 50, 
        random(x*y*5));
    
    
      ellipse(
          mouseX,
          mouseY, 
          size/x*y,
          size/x*y);

      fill(
        (frameCount/1.1), (frameCount/1.1)*2
      )
      
      noStroke();
      rect(
        (canvasWidth/numX * x) + canvasWidth/(numX*2), 
        (canvasHeight/numY * y) + canvasHeight/(numY*2), 
        size + random(size/10),
        size + random(size/10))
    }
  }

}