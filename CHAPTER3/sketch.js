const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let sliderContrast;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  angleMode(DEGREES)
  rectMode(CENTER)
  sliderContrast = createSlider(0, 200, 100);
  sliderSize = createSlider(0.8, 3, 1, 0.05);
  sliderMult = createSlider(0.20, 0.25, 0.20, 0.01);
  // sliderContrast.style('transform', `rotate(90deg)`);
  // sliderContrast.style.transform = 'rotate(45deg)'; //p5.js not recognize this syntax
  sliderContrast.style('width', `${canvasWidth/6}px`);
  sliderSize.style('width', `${canvasWidth/6}px`);
  sliderMult.style('width', `${canvasWidth/6}px`);
  sliderContrast.position(canvasWidth/6 - 125, canvasHeight/2 + canvasHeight/10);
  sliderSize.position(canvasWidth/6 - 125, canvasHeight/2);
  sliderMult.position(canvasWidth/6 - 125, canvasHeight/2 - canvasHeight/10);
  
}

function draw() {
  background(220);

  push()
  fill(0, 100)
  textSize(canvasWidth/50)
  text('CONTRAST', canvasWidth/6 - 125, canvasHeight/2 + canvasHeight/10 - 10);
  text('SIZE', canvasWidth/6 - 125, canvasHeight/2 - 10);
  text('MULT', canvasWidth/6 - 125, canvasHeight/2 - canvasHeight/10 - 10);

  pop()

  let mult = sliderMult.value();
  const radiusX = 300 / (mult*4); 
  const radiusY = 300 / (mult*4);
  let size = sliderSize.value();
  let contrast = sliderContrast.value(); // always call value()

  // Circle #1 (BACKGROUND STATIC)
  fill(151);
  strokeWeight(4);
  stroke(75);
  ellipse(window.innerWidth/2, window.innerHeight/2, radiusX, radiusY);


  // Circle #2 (BACKGROUND DYNAMIC)
  fill(255, 53, 139);
  strokeWeight(3);
  stroke(75);
  ellipse(window.innerWidth/2, window.innerHeight/2, radiusX * ((mult*3) / size) + contrast/4, radiusY * ((mult*3) / size) + contrast/4);
 
  // Circle #3 (BACKGROUND DYNAMIC)
  fill(1, 176, 240);
  strokeWeight(2);
  stroke(75);
  ellipse(window.innerWidth/2, window.innerHeight/2, radiusX * ((mult*2) / size)  + contrast/2, radiusY * ((mult*2) / size)  + contrast/2);

  // Circle #4 (BACKGROUND DYNAMIC)
  fill(174, 238, 0);
  strokeWeight(1);
  stroke(75);
  ellipse(window.innerWidth/2, window.innerHeight/2, radiusX * (mult / size) + contrast, radiusY * (mult / size) + contrast);

}
