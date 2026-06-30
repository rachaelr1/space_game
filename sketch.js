
//furby varibale
let furby

function preload(){
  furby = loadImage('images/furby.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  image(furby, windowWidth/2, windowHeight/2, 100,100)
  
  print(mouseX)
  background(206, 190, 220);
  //background(random(23), random(23), random(200))
  stroke(219, 68, 207)
  strokeWeight(5)
  //point(300,400)
//line(0, 0, 350, 400)

  
  //rect styles
   //fill(50, 76, 200, 200)
  //rect(400,400,150,300)

  //butterfly
  noStroke()
//elipse style
  fill(252, 252, 126)
ellipse(400,400,90,400)


//triangle styles
  stroke(79, 95, 240)
  fill(79, 95, 240)
  triangle(100,50,100,300,355,300)

  stroke(252, 252, 126)
   triangle(120,100,120,280,355,300)

  stroke(79, 95, 240)
  fill(79, 95, 240)
  triangle(700,50,700,300,445,300)

   stroke(252, 252, 126)
   triangle(680,100,680,280,445,300)
  
  stroke(79, 95, 240)
  fill(79, 95, 240)
  triangle(445,305,700,600,445,600)

   stroke(252, 252, 126)
 triangle(445,305,660,580,465,580)
  
  stroke(79, 95, 240)
  fill(79, 95, 240)
  triangle(355,305,100,600,355,600)

  stroke(252, 252, 126)
  triangle(355,305,140,580,335,580)
  
  //lines
   stroke(140, 75, 214)
  line(300, 50, 400, 200)

  line(500, 50, 400, 200)
}