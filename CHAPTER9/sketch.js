const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let firstCircle;
let circleSizeArr = []
const size = 20;

function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  frameRate(16);
  angleMode(DEGREES)
  // pixelDensity(1)
  camera = createCamera();

  // circleInit = { // ejemplo Object Initializer
  //   x: canvasWidth/2,  // ojo aqui el simbolo : y el simbolo ,
  //   y: canvasHeight/2,
  //   size: 0,
  //   draw: function(){
  //     ellipse(
  //       this.x,
  //       this.y,
  //       this.size,
  //       this.size
  //     )
  //   },
  //   grow: function(){
  //       if (this.size < 200){
  //         this.size += 1;
  //       }
  //   }
  // }

  firstCircle = new Circle;
  
    sliderSpeed = createSlider(0, 15, 15, 0.1);
    sliderSpeed.style('width', `${canvasWidth/6}px`);
    sliderSpeed.style('fill', `#2f2f2e`);
    sliderSpeed.position(canvasWidth/2 - canvasWidth/12, canvasHeight/2 - (canvasHeight/6)*2);

    sliderY = createSlider(1, 90, 15, 0.5);
    sliderY.style('width', `${canvasWidth/6}px`);
    sliderY.style('fill', `#2f2f2e`);
    sliderY.position(canvasWidth/2 - canvasWidth/12, canvasHeight/2 - (canvasHeight/6)*2.25);

    sliderRotation = createSlider(1, 90, 80, 0.5);
    sliderRotation.style('width', `${canvasWidth/6}px`);
    sliderRotation.style('fill', `#2f2f2e`);
    sliderRotation.position(canvasWidth/2 - canvasWidth/12, canvasHeight/2 - (canvasHeight/6)*2.5);

    for(let i=0; i<size; i++){
      let alternateValue = map(i*2, 0, size*2, 5, 1)
      
      circleSizeArr.push(alternateValue)
        circleArrayConcat();
      
    }  

  
}

function draw() {
  background(220);

  // orbitControl()
  let mouseClamp = map(mouseY, 0, canvasHeight, 100, 50)
  let sliderClamp = map(sliderSpeed.value(), 0, 5, 0, 100)
  let moveXSine = map(sin(frameCount), -1, 1, -190, 190)
  camera.lookAt(0, mouseClamp-200, 0);

  circleArraySplice()

  console.log(moveXSine)
    const currentIndex = frameCount % circleSizeArr.length;

  for(let i=0;i<circleSizeArr.length;i++){
    push()
    rotateX(sliderRotation.value())
    translate(moveXSine, sliderY.value(), (i+sliderY.value())*sliderSpeed.value()-sliderClamp,  sliderSpeed.value()*-100);
    let locX = mouseX - canvasWidth / 2;
    let locY = mouseY - canvasHeight / 2;
    pointLight(100, 100, 100, locX, locY, 300 + locY);
    directionalLight(100, 10, 10, 360)
    specularMaterial(100, 240);
    shininess(50);
    noStroke()
    torus(
      circleSizeArr[i]*sliderY.value(), circleSizeArr[i]/5, 100, 100 
    )
    pop()
  }
}

function circleArraySplice(){
  circleSizeArr.push(circleSizeArr[0])
  circleSizeArr.splice(0, 1)
}

function circleArrayConcat(){
  let circleSizeInvert = circleSizeArr.reverse()
      circleSizeArr.concat(circleSizeInvert);
}

const Circle = function(){ // ejemplo Object Constructor Function
  this.x = canvasWidth/2; // ojo aqui el simbolo de = y el simbolo ;
  this.y = canvasHeight/2;
  this.z = 0
  this.size = 0;
  this.draw = function(){
    // ellipse(
    //   this.x,
    //   this.y,
    //   this.size,
    //   this.size
    // )
    push()
    rotateX(90)
    translate(0, 0, this.z)
    let locX = mouseX - canvasWidth / 2;
    let locY = mouseY - canvasHeight / 2;
    pointLight(100, 100, 100, locX, locY, 300 + locY);
    specularMaterial(250);
    shininess(50);
    noStroke()
    torus(this.size, 15, 100, 100)
    pop()
  };
  this.grow = function(){
    let counter = 0
    if (frameCount%15 === 0){
      counter++
    }

    let sizeSin = map(sin(random(counter)), -1, 1, 0, 100)
    this.size += sizeSin

      if (this.size > 200){
        this.size = 0
      }
  }
}
