const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let speed = 0;
let figure1;
let xPosition;
const x = -700;
const y = canvasHeight/2;
const size = 50
let figureArr = [];
let focusInput;


// WebGL Load Font
  // let myFont;
  // function preload() {
  //   myFont = loadFont('fonts/PressStart2P-Regular.ttf');
  // }



function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);
  rectMode(CENTER)
  textAlign(CENTER, CENTER)
  // textFont(myFont)
  angleMode(DEGREES)

  sliderSpeed = createSlider(1, 10, 3, 0.1);
  sliderSpeed.style('width', `${canvasWidth/6}px`);
  sliderSpeed.style('fill', `#2f2f2e`);
  sliderSpeed.position(canvasWidth/2 - canvasWidth/12, canvasHeight/2 - (canvasHeight/6)*2);

  sliderTitle = createP('SPEED');
  sliderTitle.style('color', `#2f2f2e`);
  sliderTitle.style('font-family', `'Press Start 2P', cursive`);
  sliderTitle.style('font-size', `${canvasWidth/24}px`);
  sliderTitle.position(canvasWidth/2 - canvasWidth/10, canvasHeight/2 - canvasHeight/12);
  
  
}

function draw() {
  focusInput = document.querySelector('input').classList.add('orbit');
  if(document.activeElement.classList.contains('orbit')){
    orbitControl();
  }

  background(0, 240);
  ambientLight(60);
  let alternatingOpacity = map(sin(frameCount*(sliderSpeed.value()*2)), -1, 1, 0, 0.5)
  sliderTitle.style('opacity', `${alternatingOpacity}`);

  speed = speed + sliderSpeed.value()

  xPosition = Math.round((frameCount * sliderSpeed.value()) % (canvasWidth+900+size))
  for(let i=0; i<5; i++){
    figure1 = new Figures(x-(i*150), y, xPosition, size, sliderSpeed.value(), xPosition%255)
    figure1.render()
  }

  // showText('SPEED')

}

function showText(texto){
  push()
  let alternatingValue = map(sin(frameCount*6), -1, 1, 0, 255)
  // let alternatingDegree = map(sin(frameCount), -1, 1, 0, -180)
  translate(canvasWidth/4-245, canvasHeight/4+20, 0)
  // rotateX(alternatingDegree)
  textSize(30)
  specularMaterial(55, alternatingValue);
  text(texto, 0, 0)
  pop()
}

function Figures(x, y, animationX, size, speedFactor, fillColor){
  this.x = x;
  this.y = y;
  this.size = size;
  this.xPosition = animationX
  this.fillColor = fillColor;
  this.speedFactor = speedFactor
  this.texture = fillColor

  this.drawEllipse = function(size){
    push()
    let locX = mouseX - canvasWidth / 2;
    let locY = mouseY - canvasHeight / 2;
    pointLight(255, 255, 255, locX, locY, 50);
    specularMaterial(250);
    shininess(50);
    
    noStroke()
    translate(this.xPosition + this.x, this.y-500, 10)
    // ellipse(this.xPosition, 0, size, size)
    torus(45, 15, 64, 64);

    translate(this.xPosition + this.x, this.y-200, 200)
    sphere(size, 10, 10)
    pop()
  }

  this.render = function(){
    this.drawEllipse(this.size)
  }
}