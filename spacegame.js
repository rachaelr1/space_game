//images
let saturn
let earth
let astronaut
let astroid
let spaceship
let moon

//controls
let button
let gameScreen = "start"

//fonts
let airstrike

//sound
let calmMusic
let playButton

function preload(){

	//images
	saturn = loadImage('images/saturn.png')	
	earth = loadImage('images/earth.png')
	astronaut = loadImage('images/astronaut.png')
	astroid = loadImage('images/astroid.png')
	spaceship = loadImage('images/spaceship.png')
	moon = loadImage('images/moon.png')
	ufo = loadImage('images/ufo.png')

	//font
	airstrike = loadFont('airstrike.ttf')

	//sound
	calmMusic = loadSound('audio/calmMusic.mp3')

}



function setup (){
canvas = createCanvas(windowWidth,windowHeight)
	canvas.position(0,0)
	canvas.style('z-index','-1')


	button = createButton('Start')
	button.mousePressed(gameLoad)
	button.position(windowWidth/2,windowHeight/2)


}

function gameLoad(){
	gameScreen = 'game';
	button.hide();

	calmMusic.loop();

}

function drawStartScreen(){
background(0)

  	textAlign(CENTER);
  	textFont(airstrike);
    textSize(40);
    fill(255);
    text("Press Play to start!", 700, 300 );
}

function drawGame(){
background(52, 37, 89)

	image(saturn, 700, 0, 500, 500)

	image(earth, 300, 500, 300, 300)

	image(astronaut, 100, 300, 100, 100)

	image(astroid, 250, -120, 500, 500)

	image(spaceship, 750, 550, 400, 400)

	image(moon, 1200, 500, 200, 200)

	image(ufo, 1200, -10, 200, 200)
}

function draw (){
   if (gameScreen === "start") {
        drawStartScreen();
    }

    if (gameScreen === "game") {
        drawGame();
    }




}

function windowResized(){

	resizeCanvas (windowWidth, windowHeight);

}

