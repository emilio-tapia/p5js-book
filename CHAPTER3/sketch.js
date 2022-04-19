function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(220);
  const radiusX = 500; 
  const radiusY = 500;
  let size = 1;
  let contrast = 100

  // Circle #1 (BACKGROUND STATIC)
  fill(151);
  strokeWeight(4);
  stroke(75);
  ellipse(window.innerWidth/2, window.innerHeight/2, radiusX, radiusY);


  // Circle #2 (BACKGROUND DYNAMIC)
  fill(255, 53, 139);
  strokeWeight(3);
  stroke(75);
  ellipse(window.innerWidth/2, window.innerHeight/2, radiusX * (0.75 / size) + contrast/4, radiusY * (0.75 / size) + contrast/4);
 
  // Circle #3 (BACKGROUND DYNAMIC)
  fill(1, 176, 240);
  strokeWeight(2);
  stroke(75);
  ellipse(window.innerWidth/2, window.innerHeight/2, radiusX * (0.5 / size)  + contrast/2, radiusY * (0.5 / size)  + contrast/2);

  // Circle #4 (BACKGROUND DYNAMIC)
  fill(174, 238, 0);
  strokeWeight(1);
  stroke(75);
  ellipse(window.innerWidth/2, window.innerHeight/2, radiusX * (0.25 / size) + contrast, radiusY * (0.25 / size) + contrast);

}
