

function setup() {
  // CODE WRITEN HERE IS EXECUTED ONLY ONCE
  createCanvas(window.innerWidth, window.innerHeight); // width,  height
  // console.log(rectMode(CENTER))
}

function draw() {
  // CODE WRITTEN HERE IS EXECUTED CONSTANTLY
  background(220); // ONE COLOR === rgb(220, 220, 220)
  fill(360, 300, 100);
  rectMode(CENTER); // ANCHOR POINT CENTER
  rect(window.innerWidth/2, window.innerHeight/2, 500, 250) // x, y, width, height
  ellipse(window.innerWidth/2 - 375, window.innerHeight/2, 250, 250) // x, y, horizontal radius, vertical radius
  ellipse(window.innerWidth/2 + 125, window.innerHeight/2, 250, 250) // x, y, horizontal radius, vertical radius

}
