const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

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

let pressed; 
let up = 0;
let down = 0;
let leftArr = 0;
let rigthArr = 0;


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  frameRate(6);
  noFill();
  noStroke();



  // FIRST EXERCISE
  for(let i=0; i<100; i++){
    let randomValue = random(5,120);
    sizes.push(randomValue)
  }
}

function draw() {

  // Se ejecuta esta funcion cuando hay que dar click una sola vez y sigue aumentando
    // pressed = true
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
      if(keyCode === ENTER){
        up, down, leftArr, rigthArr = 0
      }
  
  background(240);
  let randomIndex = parseInt(random(colors.length), 10);
  let randomSize = random(200);

  fill(colors[randomIndex]);
  console.log(up)
  rect(
    canvasWidth/2 - leftArr*10 + rigthArr*10,
    canvasHeight/2 - up*10 + down*10, 
    randomSize/8 + 50,
    randomSize/8 + 50
    )
  
  if (pressed === true){ //presionar teclas, no el mouse
    fill(colors[randomIndex]);
    ellipse(
      random(canvasWidth),
      random(canvasHeight/2),
      randomSize,
      randomSize
    );
  }
  pressed = false;
  // console.log(pressed)

}

// Se ejecuta esta funcion cuando hay que dar click constantemente
// function keyPressed(){
//   pressed = true
//     if(keyCode === UP_ARROW){
//       up++;
//     }
//     if(keyCode === DOWN_ARROW){
//       down++;
//     }
//     if(keyCode === LEFT_ARROW){
//       leftArr++;
//     }
//     if(keyCode === RIGHT_ARROW){
//       rigthArr++;
//     }
// }