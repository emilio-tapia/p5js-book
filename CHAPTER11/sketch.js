const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

let sphereArray = []
let boxArray = []

const colors = [
  [100],
  [117],
  [128],
  [115, 158, 157],
  [105],
  [100],
]

let i = 0;
let pressed; 
let up = 0;
let down = 0;
let leftArr = 0;
let rigthArr = 0;
let randomX, randomY;



function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  frameRate(30);
  // noFill();
  noStroke();
  camera = createCamera();

  sliderSpeedX = createSlider(1, 50, 40, 0.1);
  sliderSpeedX.style('width', `${canvasWidth/6}px`);
  sliderSpeedX.style('fill', `#2f2f2e`);
  sliderSpeedX.style('transform', `rotate(180deg)`);
  sliderSpeedX.position(canvasWidth/2 - canvasWidth/12, canvasHeight/2 - (canvasHeight/6)*2);

  sliderSpeedZ = createSlider(1, 50, 40, 0.1);
  sliderSpeedZ.style('width', `${canvasWidth/6}px`);
  sliderSpeedZ.style('fill', `#2f2f2e`);
  sliderSpeedZ.style('transform', `rotate(180deg)`);
  sliderSpeedZ.position(canvasWidth/2 - canvasWidth/12, canvasHeight/2 - (canvasHeight/6)*2.25);

  sliderSize = createSlider(0.5, 10, 10, 0.1);
  sliderSize.style('width', `${canvasWidth/6}px`);
  sliderSize.style('fill', `#2f2f2e`);
  sliderSize.position(canvasWidth/2 - canvasWidth/12, canvasHeight/2 - (canvasHeight/6)*2.5);
  

}

function draw() {


  background(100);
  camera.lookAt(0, 0, 0);
  let randomIndex = parseInt(random(colors.length), 10);
  let randomSize = random(200);

  fill(colors[randomIndex]);

  if(frameCount%10 === 0){
    i++
  }

  push()
  let index = 0;
  let locX = mouseX - canvasWidth / 2;
    let locY = mouseY - canvasHeight / 2;
    pointLight(100, 100, 100, locX, locY, 300 + locY);
    directionalLight(10, 10, 10, 360)
    specularMaterial(100, 240);
    shininess(50);
    rotateX((frameCount%(360+index))/sliderSpeedX.value())
    rotateZ((frameCount%(360+index))/sliderSpeedZ.value())
  
  
  box(
    ((360+index))/sliderSize.value()
    )

  pop()

  let alternateZ = map(sin(frameCount%100), -1, 1, -100, 100)
  randomX = Math.round(Math.random()*100);
  randomY = Math.round(Math.random()*100);
  


  // rotateX((frameCount%(360+index))/sliderSpeedX.value()*2)
  // rotateZ((frameCount%(360+index))/sliderSpeedZ.value()*2)
  rotateY((frameCount%(360+index))/sliderSpeedZ.value()*2)

  let sphere1 = new DrawSphere(mouseX-canvasWidth/2, mouseY-canvasHeight/2, mouseX-canvasWidth/2)
  pointLight(randomX, randomY, random(100), locX, locY, 300 + locY);
  directionalLight(100+randomX, 100+randomY, randomX, 360)
  
  shininess(50);
  
  if(mouseIsPressed === true){
    sphereArray.push(sphere1)
  }
  
  
  for(let i=0; i<sphereArray.length; i++){
    sphereArray[i].generateSphere(i)
    specularMaterial(100+randomX, 255-(i*2));
  }

  if(sphereArray.length > 30){
    sphereArray.splice(0, 1)
  }

}

// Se ejecuta esta funcion cuando hay que dar click constantemente
function keyPressed(){
  pressed = true
    if(keyCode === UP_ARROW){
      up++;
    }
    if(keyCode === DOWN_ARROW){
      down++;
    }
    if(keyCode === LEFT_ARROW){
      leftArr++;
    }
    if(keyCode === RIGHT_ARROW){
      rigthArr++;
    }
}


function DrawSphere(x, y, radiusBox) {
  this.x = x;
  this.y = y;
  this.radius = radiusBox;
  
  this.generateSphere = function(index){
    push()
    translate(this.x, this.y, this.radiusBox)
    
    noStroke();
    randomSeed(9)

    sphere(sliderSize.value());
    pop()
  }
}