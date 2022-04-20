const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let firstCircle, secondCircle, thirdCircle;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  frameRate(12);

  circleInit = { // ejemplo Object Initializer
    x: canvasWidth/2,  // ojo aqui el simbolo : y el simbolo ,
    y: canvasHeight/2,
    size: 0,
    draw: function(){
      ellipse(
        this.x,
        this.y,
        this.size,
        this.size
      )
    },
    grow: function(){
        if (this.size < 200){
          this.size += 1;
        }
    }
  }

  firstCircle = new Circle;
  secondCircle = new Circle;
  thirdCircle = new Circle;
}

function draw() {
  background(220);

  text(frameCount, canvasWidth/2, canvasHeight/2)
  textSize(100)

  secondCircle.x = canvasWidth/4
  thirdCircle.x = canvasWidth/4 * 3

  if(frameCount > 20){
      firstCircle.draw();
      firstCircle.grow();
  } 
  
  if(frameCount > 30) {
    secondCircle.draw();
    secondCircle.grow();
  } 
  
  if(frameCount > 40){
    thirdCircle.draw()
    thirdCircle.grow()
  }

}

const Circle = function(){ // ejemplo Object Constructor Function
  this.x = canvasWidth/2; // ojo aqui el simbolo de = y el simbolo ;
  this.y = canvasHeight/2;
  this.size = 0;
  this.draw = function(){
    ellipse(
      this.x,
      this.y,
      this.size,
      this.size
    )
  };
  this.grow = function(){
      if (this.size < 200){
        this.size += 1;
      }
  }
}
