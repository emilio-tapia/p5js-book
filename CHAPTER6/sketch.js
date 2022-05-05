const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight

let toogle = true;
let x,y;
let boxArray = []

// let mouseX, mouseY; // NUNCA DECLARAR ESTAS VARIABLES

const size = 40;


function mouseMoved(){
  push()
  x = mouseX - canvasWidth/2;
  y = mouseY - canvasHeight/2;
    
  noStroke();
  let flashLight = map((frameCount%30), 0, 30, 0, 10)
  
  fill(50, 100, 50, (10/flashLight))
  ellipse(x, y, size/2, size/2);

  fill(200, flashLight)
  ellipse(x, y, size, size);
  pop()
}

function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);
  pixelDensity(1)
  rectMode(CENTER);
  camera = createCamera();

  sliderSize = createSlider(20, 80, 50, 1);
  sliderSize.style('width', `${canvasWidth/4}px`);
  sliderSize.style('fill', `#2f2f2e`);
  sliderSize.position(canvasWidth/2 - canvasWidth/8, canvasHeight/2 - (canvasHeight/6)*2);

  sliderTitle = createP('EYE');
  sliderTitle.style('color', `#e8e8e830`);
  sliderTitle.style('opacity', `1`);
  sliderTitle.style('text-shadow', `
  -5px 0px 10px rgba(50, 100, 50, 5),
    0px 0px 10px rgba(50, 50, 100, 5),
    5px 0px 10px rgba(100, 50, 50, 5)
    
    `);
  sliderTitle.style('-webkit-text-stroke', `0.5px rgba(200, 200, 200, 0.5)`);
  sliderTitle.style('font-family', `'Press Start 2P', cursive`);
  sliderTitle.style('font-size', `${canvasWidth/20}px`);
  sliderTitle.position(canvasWidth/2 - canvasWidth/14, canvasHeight/2 - (canvasHeight/5 * 2.5));
  sliderClassActive = document.querySelector('input').classList.add('sliderActive');
}


function draw() {



  background(0, 220);
  ambientLight(30); // white light
  

  camera.lookAt(0, 0, 0);
  
  
  let dirX = (mouseX / width - 0) * 3;
  let dirY = (mouseY / height - 0) * 3;
  let dirZ = (mouseY / height - 0) * 3;
  let locX = mouseX - canvasWidth / 2;
  let locY = mouseY - canvasHeight / 2;

  randomSeed(99)
  let box1 = new DrawBox(mouseX-canvasWidth/2 + (sin(frameCount / 60) * 100), mouseY-canvasHeight/2, canvasWidth/2, canvasHeight/2)
  // box1.generateBox(0);

  push()
  generateEye(dirX, dirY, dirZ, locX, locY)
  camera.setPosition(sin(frameCount / 60) * 100, 0, 500);
  pop()
  if(document.activeElement.classList.contains('sliderActive')){
    
  } else {
    if(mouseIsPressed === true){
      boxArray.push(box1)
    }
  }
  
  for(let i=0; i<boxArray.length; i++){
    boxArray[i].generateBox(i)
  }


}

function generateEye(dirX, dirY, dirZ, locX, locY){
  push()
  specularMaterial(100)
  directionalLight(100, 100, 100, 1.5-dirX, 1.5-dirY, 0.5-dirZ);
  pointLight(10, 50, 10, locX, locY, 100+(sliderSize.value()*1.5));
  noStroke();
  translate(0, 0, 0)
  sphere(sliderSize.value()*2);
  pop()
}


function DrawBox(x, y, widthBox, heightBox) {
  this.x = x;
  this.y = y;
  this.width = widthBox;
  this.height = heightBox;
  
  this.generateBox = function(index){
    push()
    camera.lookAt(0, 0, 0);
    let dirX = (this.x / this.width) * 3;
    let dirY = (this.y / this.height) * 3;
    let locX = this.x - this.width;
    let locY = this.y - this.height;
    translate(this.x, this.y, this.y)
    directionalLight(100, 100, 100, 1.5-dirX, 1.5-dirY, 0.5-dirY);
    pointLight(0, locX, 0, locX, locY, 0);
    
    noStroke();
    randomSeed(9)
    rotateX((frameCount%(360+index))/15)
    rotateZ((frameCount%(360+index))/15)
    box(sliderSize.value()/2);
    pop()
  }
}