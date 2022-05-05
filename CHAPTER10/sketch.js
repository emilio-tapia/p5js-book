const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight * 3;

// array first exercise
const sizes = []; 

// array second exercise
const word = ['TECHNO', 'LOVE', '', 'WITH', 'ECHO', '']
const colors = [
  [100],
  [117],
  [128],
  [115, 158, 157],
  [105],
  [100],
]

// practice exercise
let numberCount = 420;


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  frameRate(10);
  noFill();

  // FIRST EXERCISE
  for(let i=0; i<60; i++){
    let randomValue = random(5,120);
    sizes.push(randomValue)
  }
}

function draw() {

  // SECOND EXERCISE
  const currentIndex = frameCount % word.length;
  const currentColor = colors[currentIndex];
  const currentWord = word[currentIndex];
  background(currentColor);
  noFill()
  strokeWeight(2)
  stroke(1)
  textSize(currentIndex*50 + 20) 
  text(
    currentWord, 
    canvasWidth/2, 
    canvasHeight/6 + canvasHeight/3)


  // FIRST EXERCISE
  noFill();
  for(let i=0; i<sizes.length; i++){
    ellipse(
      canvasWidth/2,
      canvasHeight/6,
      sizes[i]*currentIndex + 50,
      sizes[i]*currentIndex + 50
    )
  }
  
  // practice exercise
  if (numberCount === 0){
    numberCount = 0
  } else {
    numberCount--;
  }

  countdown(numberCount, 'Launch!')

}


function countdown(numberCount, stringMessage){

  // create array from a number
  const arr = [...Array(numberCount).keys()].map(x => ++x); 
  // se obtiene sin el map el array de 0-9
  // con el .map el array es 1-10
  // crear un currentIndex para poder indicar cada valor 
  // const currentIndex = frameCount % numberCount;


  fill(5);
  textSize(120) 
  if(numberCount === 0){
    text(stringMessage,    
      canvasWidth/2, 
      canvasHeight/6 + (canvasHeight/3 * 2))
  } else {
    text(numberCount,    
      canvasWidth/2, 
      canvasHeight/6 + (canvasHeight/3 * 2))
  }
}