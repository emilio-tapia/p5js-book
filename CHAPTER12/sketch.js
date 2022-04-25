const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight * 2
let i = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  frameRate(50);
  noStroke();
  angleMode(DEGREES)
}

function draw() {
  let modulusRate = (frameCount%5)/1.5
  i++
  background(20);
  
  push();
  translate(canvasWidth/2, canvasHeight/4)
    for(let h=0; h<100; h++){
      noFill();
      stroke(220+h, (100-frameCount%h)/2)
      let rotation = map(h, 0, 100, 0, 360)
      rotate(i/10)
      rect(
        0,
        0,
        500 - (h*10),
        500 - (h*10)
        )
      }
  pop();
    
  push();
  translate(canvasWidth/2, canvasHeight/4 + canvasHeight/2)
  rotate(i)
  rectFlashing(0,0,25,25)
  rectFlashing(250,0,modulusRate,500)
  rectFlashing(-250,0,modulusRate,500)
  rectFlashing(0,250,500,modulusRate)
  rectFlashing(0,-250,500,modulusRate)


  // for(let h=0; h<4; h++){ // COMO HAGO TODO ESTE CODIGO DE RECT EN UN FOR LOOP?
  // LA UNICA SOLUCION ES HACER UNA FUNCION EXTERNA
  // FOR LOOP ES ALGO MAS SIMPLIFICADO PARA ITERAR EN BASE AL INDEX
  // FUNCIONES PUEDEN ACEPTAR CUALQUIER TIPO DE ARGUMENTOS
  // rect(
  //     250,
  //     0,
  //     (frameCount%5),
  //     500
  // )

  // rect(
  //   -250,
  //   0,
  //   (frameCount%5),
  //   500
  // )

  // rect(
  //   0,
  //   250,
  //   500,
  //   (frameCount%5)
  // )

  // rect(
  //   0,
  //   -250,
  //   500,
  //   (frameCount%5)
  // )

  for(let h=0; h<100; h++){
    noFill();
    stroke(220+h, (100-frameCount%h)/1.5)
    rect(
      0,
      0,
      500 - (h*10),
      500 - (h*10)
      )
  }
  pop();

  }

  function rectFlashing(x,y,width,height){
    push()
    noStroke()
    fill(237, (100-frameCount%100));
    rect(
      x,
      y,
      width,
      height
    )
    pop()
  }