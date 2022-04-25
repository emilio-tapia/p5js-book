const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let content;
let guessItem = null;
let solution = null;
const interval = 100 //controls frequency random number is generated
let resultsArr = [];
let gameOver = false;


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
  frameRate(60);
  angleMode(DEGREES)
  textAlign(CENTER, CENTER);
}

function draw() {

  let gameScore = getGameScore(resultsArr);
  if(gameScore.loss === 3 || gameScore.total === 10){
    gameOver = true;
    displayGameOver(gameScore)
    return
  }

  background(220);
  if (frameCount === 1 || frameCount % interval === 0){ //every 1 frame or every 100 frames the remainder is 0
    solution = null; // reset solution every condition 
    guessItem = new Item(canvasWidth/2, canvasHeight/2, 1) //creates this new object
  }

  if(guessItem) { //if guestItem is true
    guessItem.render();
    showScore(gameScore.win, gameScore.loss, gameScore.total)} //render the object

    
  if(solution === true) {
    showMessage('CORRECT!',solution)

  } else if(solution === false){
    showMessage('WRONG!', solution)
  }
} // draw()

function displayGameOver(score){ //create Game Over Screen
  push();
  background(220);
  // title
  textStyle(BOLD)
  textSize(96);
  translate(canvasWidth/2, canvasHeight/2 - canvasHeight/8);
  fill(237, 34, 93)
  text('GAME OVER', 0, 0)
  // results
  translate(0, 90)
  fill(0)
  textStyle(NORMAL)
  textSize(24);
  text('Correct: ' + score.win, 0, 0)
  text('Incorrect: ' + score.loss, 0, 30)
  text('Total: ' + score.total, 0, 60)

  translate(0, 150)
  let alternatingValue = map(sin(frameCount*6), -1, 1, 0, 255)
  fill(237, 34, 93, alternatingValue)
  textStyle(BOLD)
  text('PRESS ENTER', 0, 0)
  pop();
} // displayGameOver

function getGameScore(scoreArr){
  let wins = 0;
  let losses = 0
  let total = scoreArr.length;

  for(let i=0; i<total; i++){
    item = scoreArr[i];
    if(item === true) {wins++} else {losses++}
  } // tambien se puede usarl el metodo array.filter()

  return {
    win: wins,
    loss: losses,
    total: total
  }
} // getGameScore()

function showScore(wins, losses, total){
  const scoreX = canvasWidth/6 * 5
  const scoreY = canvasHeight/6 * 5.2
  const widthContainer = 200
  const heightContainer = 100
  push()
  //CONTAINER
  strokeWeight(2)
  fill(0, 10)
  rect(scoreX, scoreY, widthContainer, heightContainer)
  // Placeholder
  textSize(20)
  fill(0, 100, 0)
  text('CORRECT: ', scoreX - widthContainer/8, scoreY - heightContainer/3)
  fill(100, 0, 0)
  text('INCORRECT: ', scoreX - widthContainer/8, scoreY)
  fill(0)
  text('TOTAL: ', scoreX - widthContainer/8, scoreY + heightContainer/3)

  // WINS
  fill(0, 100, 0)
  text(wins, scoreX + widthContainer/3, scoreY - heightContainer/3)
  // LOSS
  fill(100, 0, 0)
  text(losses, scoreX + widthContainer/3, scoreY)
  // TOTAL
  fill(1)
  text(total, scoreX + widthContainer/3,  scoreY + heightContainer/3)
  pop()

} // showScore()

function showMessage(string ,check){
  push()
  textSize(100)
  fill(255, 30)
  stroke(255)
  if (check ===  true){
    background(0, 155, 0) // change background when keypressed
    text(string, canvasWidth/2, canvasHeight/2)
  } else if (check === false) {
    background(155, 0, 0) // change background when keypressed
    text(string, canvasWidth/2, canvasHeight/2)
  }
  check = null
  pop()
} // showMessage()

function keyPressed(){

  if(gameOver){
    if (keyCode === ENTER){
      restartGame();
      console.log('restart it bitch')
      return;
    }
  }

  if(guessItem !== null){ //check to see the pressed key matches the displayed number
    solution = guessItem.solve(key) // solution es igual al metodo solve del objeto Item
    
    if (solution){
      resultsArr.push(true);
    } else {resultsArr.push(false);}
    
    guessItem = null; // reset the object
  } else {
    console.log('nothing to be solved')
  }
} // keyPressed()

function restartGame(){
  results = []; //reset score
  solution = null; //reset solution key
  gameOver = false;
}

function Item(x, y, size){
  this.x = x;
  this.y = y;
  this.scale = size;
  this.scaleIncrement = 0.5;
  this.alpha = 255;
  this.alphaDecrement = 3;
  this.solved = null; // boolean check to see the solution
  this.content = getContent();

  function getContent(){
    return parseInt(random(10), 10); // get random Integer function
  }

  this.solve = function(input){ // check if the input === content
    let solved;
    if (+input === this.content)  // convert input from string to number
    {solved = true;}
    else {solved = false;}
    this.solved = solved;
    return solved;
  }

  this.render = function(){
    push();
    if(this.solved === false) {return;}
    fill(0, this.alpha)
    translate(this.x, this.y);
    scale(this.scale);
    text(this.content,  0, 0)
    this.scale = this.scale + this.scaleIncrement // increase the scale value
    this.alpha = this.alpha - this.alphaDecrement //decrease alpha value
    pop();
  }
} // class Item