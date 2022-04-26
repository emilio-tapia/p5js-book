const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
let guessItem = null;
let solution = null;
const interval = 100 //controls frequency random number is generated
let resultsArr = [];
let gameOver = false;
let gameScore;


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
  frameRate(60);
  angleMode(DEGREES)
  textAlign(CENTER, CENTER);
}

function draw() {

  background(220);
  if (frameCount === 1 || frameCount % interval === 0){ //every 1 frame or every 100 frames the remainder is 0
    solution = null; // reset solution every condition 
    guessItem = new Item(canvasWidth/2, canvasHeight/2, 1) //creates this new object
  }

  gameScore = getGameScore(resultsArr);
  if(gameScore.loss === 3 || gameScore.total === 10){
    gameOver = true;
    displayGameOver(gameScore);
  } else {

    if(guessItem) { //if guestItem is true
      guessItem.render();
      showScore(gameScore.win, gameScore.loss, gameScore.total) //render the object
    }
  
    if(solution === true || solution === false) {
      solutionMessage(gameScore.total, solution)
    }

  }


} // draw()

function solutionMessage(seed, solution){ // different messages every time hit the key
  const trueMessages = ['CORRECT', 'GOOD JOB!', 'SUCH WIN!', 'IMPRESSIVE']
  const falseMessages = ['WRONG', 'OH NO!', 'BAD LUCK', 'NOT BAD']

  let messages;

  push();
  fill(237, 34, 93);
  textSize(36);
  randomSeed(seed * 10000) // INTERESANTE 
  console.log(seed)
  
  if(solution === true) {
    messages = trueMessages;
  } else if(solution === false){
    messages = falseMessages;
  }
  
  const randomMessageInt = parseInt(random(messages.length), 10)
  showMessage(messages[randomMessageInt], solution);
  pop()

} // solutionMessage()


function showMessage(string ,check){ // display the message on screen
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
  results = [];
  pop();
} // displayGameOver()

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

function keyPressed(){

  if(gameOver){
    if (keyCode === ENTER){
      restartGame();
      return; // stop the function here
    }
  }

  if(guessItem !== null){ //check to see the pressed key matches the displayed number
    solution = guessItem.answerCheck(key) // solution es igual al metodo solve del objeto Item
    
    if (solution){
      resultsArr.push(true);
    } else {resultsArr.push(false);}
    
    guessItem = null; // reset the object
  } else {
    console.log('nothing to be solved')
  }
} // keyPressed()

function restartGame(){
  resultsArr = []; //reset score
  solution = null; //reset solution key
  gameOver = false;
  console.log(gameScore)

}

function Item(x, y, size){
  this.x = x;
  this.y = y;
  this.scale = size;
  this.scaleIncrement = 0.5;
  this.fillColor = 0;
  this.alpha = 255;
  this.alphaDecrement = 3;
  this.answerSolved = null; // boolean check to see the solution
  this.contentMap = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '0': 'zero',
  }
  this.colors = [
    [63,184,175],
    [127,199,175],
    [218,216,167],
    [255,61,127],
    [55,191,211],
    [159,223,111],
    [234,209,43],
    [250,69,8],
    [194,12,0]
  ]
  this.content = getContent();

  function getContent(){
    return parseInt(random(10), 10); // get random Integer function
  }

  this.answerCheck = function(input){ // function check if the input === content , returns boolean
    let typeAnswer;
    if (+input === this.content)  // convert input from string to number
    {typeAnswer = true;}
    else {typeAnswer = false;}
    this.answerSolved = typeAnswer;
    return typeAnswer;
  }

  this.drawEllipse = function(size,strokeW, speedMult, seed){ // ellipse method
    push();
    randomSeed(seed);
    translate(this.x, this.y);
    const ellipseSize = this.scale * speedMult;
    scale(ellipseSize)
    const colorRandomInt = parseInt(random(this.colors.length), 10);
    const fillClr = this.colors[colorRandomInt]
    stroke(fillClr);
    noFill();
    strokeWeight(strokeW);
    ellipse(0, 0, size, size);
    pop();
  }

  this.render = function(){
    push(); // render the ellipse animation
    this.drawEllipse(100, 15, 2, this.content * 1000)
    this.drawEllipse(60, 7, 2, this.content * 2000)
    this.drawEllipse(35, 3, 1.2, this.content * 3000)
    pop()

    push() // render number animation
    if(this.answerSolved === false) {return;} // if not solved dont render random number
    fill(this.fillColor, this.alpha)
    translate(this.x, this.y);
    scale(this.scale);
    text(this.contentMap[this.content],  0, 0)
    this.scale = this.scale + this.scaleIncrement // increase the scale value
    this.alpha = this.alpha - this.alphaDecrement //decrease alpha value
    pop();
  }
} // class Item