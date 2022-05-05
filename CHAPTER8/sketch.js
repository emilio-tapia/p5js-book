const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let sliderSpeed, sliderTitle;
let squareX;
let squareY;
let size;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textAlign(CENTER, CENTER);
  angleMode(DEGREES)
  rectMode(CENTER);
  frameRate(12)

  sliderSize = createSlider(10, 100, 40, 1);
  sliderSize.style('width', `15vw`);
  sliderSize.style('fill', `#2f2f2e`);
  sliderSize.position(canvasWidth/2 + canvasWidth/2.75, canvasHeight/2 + (canvasHeight/5)*2);
  opacityClass = document.querySelectorAll('input')[0].classList.add('sizeSlider');

  sliderX = createSlider(10, 50, 10, 1);
  sliderX.style('width', `15vw`);
  sliderX.style('fill', `#2f2f2e`);
  sliderX.position(canvasWidth/2 + canvasWidth/2.75, canvasHeight/2 + (canvasHeight/5)*1.8);
  axisXClass = document.querySelectorAll('input')[1].classList.add('x-Slider');

  sliderY = createSlider(5, 25, 5, 1);
  sliderY.style('width', `15vw`);
  sliderY.style('fill', `#2f2f2e`);
  sliderY.position(canvasWidth/2 + canvasWidth/2.75, canvasHeight/2 + (canvasHeight/5)*1.6);
  axisYClass = document.querySelectorAll('input')[2].classList.add('y-Slider');


  sliderTitle = createP('');
  sliderTitle.style('font-family', `'Teko', sans-serif`);

  
}

function draw() {
  background(220);

  push()
  fill(100, 200)

  if(mouseIsPressed){
    if(document.activeElement.classList.contains('sizeSlider')){
      sliderTitle.elt.innerText = 'SIZE'
    } else if(document.activeElement.classList.contains('x-Slider')) {
      sliderTitle.elt.innerText = 'X-AXIS'
    } else if(document.activeElement.classList.contains('y-Slider')) {
      sliderTitle.elt.innerText = 'Y-AXIS'
    } else {
      sliderTitle.elt.innerText = ''
    }
  }
  
  pop()


  squareX = sliderX.value();
  squareY = sliderY.value();
  size = sliderSize.value();
  grid(squareX, squareY, size/2);

  push()
  fill(50, 100)
  rect(canvasWidth/2  + canvasWidth/2.72, canvasHeight/2 + canvasHeight/3, 220, 150)
  pop()
}

function grid(numX, numY, size){

  // let alternativeOpacity = map(sin(frameCount), -1, 1, 0, 1)
  // sliderTitle.style('opacity', `${alternativeOpacity}`);
  push()
  for(let x=0; x<numX; x++){
    for (let y=0; y<numY; y++){
      
      let alternativeAlpha = map(sin(mouseX-mouseY), -1, 1, 255, 50)
      let alternativeColor = map(sin(mouseY+mouseX), -1, 1, 200, 150)
      fill(
        random(255) - 50, 
        random(x*y*5));
    
    
      ellipse(
          mouseX,
          mouseY, 
          size/x*y*3,
          size/x*y*3);

      fill(
        alternativeColor, alternativeAlpha+(y)
      )
      noStroke();

      push()
      let alternativeX = map(sin(mouseX*size), -1, 1, 0, 30)
      let alternativeY = map(sin(mouseY*size), -1, 1, 0, 30)
      rect(
        (canvasWidth/numX * x) + canvasWidth/(numX*2), 
        (canvasHeight/numY * y) + canvasHeight/(numY*2), 
        alternativeX,
        alternativeY)
        rotate(90)
      pop()

      rect(
        (canvasWidth/numX * x) + canvasWidth/(numX*2), 
        (canvasHeight/numY * y) + canvasHeight/(numY*2), 
        size + random(size),
        size + random(size))
    }
  }
  pop()

}