//images
let saturnX = 750;
let saturnY = 170;


let earthX = 300;
let earthY = 550;


let astronautX;
let astronautY;



let astroidX = 300;
let astroidY = 90;


let spaceshipX = 750;
let spaceshipY = 650;


let moonX = 1200;
let moonY = 500;


let ufoX = 1200;
let ufoY = 120

let alien

let startastronaut

let galaxy 

let bullet




let mars
let blue
let space

//controls
let button
let gameScreen = "start"

let button2

let button3

let button4

let obstacleArray = [];
let lastAddTime = 0;
let randomInterval = 0;

let Lives = 3;




let vx = 0;
let vy = 0;


const thrust = 0.05;   // how strongly arrow keys push
const drag = 0.995;    // closer to 1 = more "floaty" (less friction)
const maxSpeed = 4;




//fonts
let airstrike

//sound
let calmMusic
let playButton

let mouseDist
let loseBool = false

function preload(){

	//images
	saturn = loadImage('images/saturn.png')	
	earth = loadImage('images/earth.png')
	astronaut = loadImage('images/astronaut.png')
	astroid = loadImage('images/astroid.png')
	spaceship = loadImage('images/spaceship.png')
	moon = loadImage('images/newmoon1.png')
	ufo = loadImage('images/ufo.png')
	mars = loadImage('images/bettermars.png')
	blue = loadImage('images/betterblue.png')
	space = loadImage('images/spacebackground.jpg')
	alien = loadImage('images/alien.png')
	startastronaut = loadImage('images/startastronaut.png')
	galaxy = loadImage('images/galaxy.png')
	bullet = loadImage('images/bullet.png')

	//font
	airstrike = loadFont('airstrike.ttf')

	//sound
	calmMusic = loadSound('audio/calmMusic.mp3')

}



function setup (){
canvas = createCanvas(windowWidth,windowHeight)
	canvas.position(0,0)
	canvas.style('z-index','-1')


	button = createButton('PLAY')
	button.mousePressed(drawCutScene1)
	button.position(665,400)
	imageMode(CENTER)

	button2 = createButton('continue')
	button2.mousePressed(gameLoad)
	button2.position(665,400)
	imageMode(CENTER)
	button2.hide();

	button3= createButton('continue')
	button3.mousePressed(drawLevel2Screen)
	button3.position(665,400)
	imageMode(CENTER)
	button3.hide();

	button4 = createButton('continue')
	button4.mousePressed(drawLevel3Screen)
	button4.position(665,400)
	imageMode(CENTER)
	button4.hide();






astronautX = width/2
astronautY = height/2
}


function gameLoad(){

	spawnAstronaut();

	gameScreen = 'game';
	button2.hide();

	calmMusic.loop();

}

//INTRO SCREEN
function drawStartScreen(){
background(0)

image(startastronaut, 300, 525, 400, 400)
image(galaxy, 1100, 525, 600, 600)

 	textAlign(CENTER);
  	textFont(airstrike);
    textSize(90);
    fill(255);
    text("SPACE EXPLORER", 700, 150 );

	
    textAlign(CENTER);
  	textFont(airstrike);
    textSize(60);
    fill(255);
    text("Welcome!", 700, 250 );


  	textAlign(CENTER);
  	textFont(airstrike);
    textSize(40);
    fill(255);
    text("Press Play to start", 700, 300 );
}


//CUT SCENE 1
function drawCutScene1(){
background(0)

gameScreen = "cutScene1";
	button.hide();
	button2.show();

	calmMusic.loop();

textAlign(CENTER);
  	textFont(airstrike);
    textSize(40);
    fill(255);
    text("Your ship is destroyed and you are stranded in space.", 700, 300 );

    textAlign(CENTER);
  	textFont(airstrike);
    textSize(40);
    fill(255);
    text("Avoid obstacles and survive to make it back home.", 700, 350 );

	
}

//LEVEL 1
function drawGame(){
background(52, 37, 89)
image(space, windowWidth/2,windowHeight/2,width,height) 


//mouseDist = dist(mouseX, mouseY, xPos, yPos)
			
//movement
if (keyIsDown(LEFT_ARROW)) vx -= thrust;
if (keyIsDown(RIGHT_ARROW)) vx += thrust;
if (keyIsDown(UP_ARROW)) vy -= thrust;
if (keyIsDown(DOWN_ARROW)) vy += thrust;

vx *= drag;
vy *= drag;

vx = constrain(vx, -maxSpeed, maxSpeed);
vy = constrain(vy, -maxSpeed, maxSpeed);

astronautX += vx;
astronautY += vy;

	image(saturn, saturnX, saturnY, 500, 500)
	if(dist(astronautX, astronautY, saturnX, saturnY) < 185){
		
			gameScreen = 'lose'
			
		}

	image(earth, earthX, earthY, 300, 300)
	if(dist(astronautX, astronautY, earthX, earthY) < 203){
		
			gameScreen = 'lose'
		}

	image(astroid, astroidX, astroidY, 500, 500)
	if(dist(astronautX, astronautY, astroidX, astroidY) < 185 ){
		
			gameScreen = 'lose'
		}

	image(spaceship, spaceshipX, spaceshipY, 400, 400)
	if(dist(astronautX, astronautY, spaceshipX, spaceshipY) < 215){
		
			gameScreen = 'lose'
		}

	image(moon, moonX, moonY, 300, 300)
	if(dist(astronautX, astronautY, moonX, moonY) < 175){
		
			gameScreen = 'lose'
		}


	image(ufo, ufoX, ufoY, 500, 500)
	if(dist(astronautX, astronautY, ufoX, ufoY) < 132){
		
			gameScreen = 'lose'
		}

//astronaut
	image(astronaut, astronautX, astronautY, 150, 150)

	textAlign(CENTER);
  	textFont(airstrike);
    textSize(50);
    fill(255);
    text('LEVEL 1', 200, 100 );

    textAlign(CENTER);
  	textFont(airstrike);
    textSize(30);
    fill(255);
    text('Try to avoid the obstacles!', 300, 150 );

    

    

    if (astronautX > width - 75) {
    	Lives = 2;

    gameScreen = "cutScene2";
  
	}
}

//CUT SCENE 2
function drawCutScene2(){
background(0)

gameScreen = "cutScene2";
	button2.hide();
	button3.show();


	

textAlign(CENTER);
  	textFont(airstrike);
    textSize(40);
    fill(255);
    text("You come across a planet and decide to explore it.", 700, 300 );

    textAlign(CENTER);
  	textFont(airstrike);
    textSize(40);
    fill(255);
    text("But it looks like you have some company...", 700, 350 );


spawnAstronaut();
	
}


//LEVEL 2
function drawLevel2Screen(){

// spawnAstronaut();
	gameScreen ="level2"
	button3.hide();
	
	

	background(10, 20, 30);
image(mars, windowWidth/2,windowHeight/2,width,height);

	//movement
if (keyIsDown(LEFT_ARROW)) vx -= thrust;
if (keyIsDown(RIGHT_ARROW)) vx += thrust;
if (keyIsDown(UP_ARROW)) vy -= thrust;
if (keyIsDown(DOWN_ARROW)) vy += thrust;

vx *= drag;
vy *= drag;

vx = constrain(vx, -maxSpeed, maxSpeed);
vy = constrain(vy, -maxSpeed, maxSpeed);

astronautX += vx;
astronautY += vy;

	image(astronaut, astronautX, astronautY, 150, 150)

	 //if the timer runs out, add to array
    if(millis() - lastAddTime >= randomInterval){
    obstacleArray.push({
      x: windowWidth + 30,
      y: random(windowHeight),
      objectSize: random(60, 70),
      speed: random( -5, -6)
    });
    //reset the timer
    lastAddTime = millis();
    randomInterval = 450;
    }


  // Iterate over the array and display the elements
  for (let i = 0; i < obstacleArray.length; i++) {
    let element = obstacleArray[i];
    element.x = element.x + element.speed
    // Draw the element (replace with your desired drawing code)
    	noStroke();
    	fill(255,0,0)
    image(bullet, element.x, element.y, element.objectSize, element.objectSize);
   
    if(dist(astronautX, astronautY, element.x, element.y) < element.objectSize){ //check
    	Lives = Lives-1;

    	obstacleArray.splice(i,1);

    	if (Lives <= 0){
    		gameScreen = 'lose'
    		return;
    	}

    
    continue;

 
    }

  }


	textAlign(CENTER);
  	textFont(airstrike);
    textSize(50);
    fill(255);
    text('LEVEL 2', 200, 100 );

    textAlign(CENTER);
  	textFont(airstrike);
    textSize(25);
    fill(255);
    text(" You're being attacked by Aliens!", 300, 150 );

    textAlign(CENTER);
  	textFont(airstrike);
    textSize(25);
    fill(255);
    text("Avoid the bullets", 200, 180 );

    textAlign(CENTER);
  	textFont(airstrike);
    textSize(30);
    fill(230, 42, 5);
    text(' Lives: ' + Lives, 190, 210);

    textAlign(CENTER);
    textSize(25)
    textFont('Arial')
    text('❤️', 110, 210);


    if (astronautX > width - 75) {
    	obstacleArray = [];
    	lastAddTime = millis();
    	randomInterval = 300;

    	Lives = 3;

    gameScreen = "cutScene3";
    
	}
}
//CUT SCENE 3
function drawCutScene3(){
background(0)

gameScreen = "cutScene3";
	button3.hide();
	button4.show();


	

textAlign(CENTER);
  	textFont(airstrike);
    textSize(40);
    fill(255);
    text("The Aliens are mad you've invaded their planet", 700, 300 );

    textAlign(CENTER);
  	textFont(airstrike);
    textSize(40);
    fill(255);
    text("Now they're coming to kill you!", 700, 350 );


spawnAstronaut();
	
}


//LEVEL 3


function drawLevel3Screen(){
	gameScreen ="level3"
	button4.hide();

	background(10, 20, 30);
	image(blue, windowWidth/2,windowHeight/2,width,height)



	//movement
if (keyIsDown(LEFT_ARROW)) vx -= thrust;
if (keyIsDown(RIGHT_ARROW)) vx += thrust;
if (keyIsDown(UP_ARROW)) vy -= thrust;
if (keyIsDown(DOWN_ARROW)) vy += thrust;

vx *= drag;
vy *= drag;

vx = constrain(vx, -maxSpeed, maxSpeed);
vy = constrain(vy, -maxSpeed, maxSpeed);

astronautX += vx;
astronautY += vy;

	image(astronaut, astronautX, astronautY, 150, 150)

	 //if the timer runs out, add to array
    if(millis() - lastAddTime >= randomInterval){
    obstacleArray.push({
      x: windowWidth + 30,
      y: random(windowHeight),
      objectSize: random(40,50,60,70),
      speed: random(-6,-7)
    });
    //reset the timer
    lastAddTime = millis();
    randomInterval = 300;
    }


  // Iterate over the array and display the elements
  for (let i = 0; i < obstacleArray.length; i++) {
    let element = obstacleArray[i];
    element.x = element.x + element.speed
    // Draw the element (replace with your desired drawing code)
    	noStroke();
    	fill(255,0,0)
    image(alien, element.x, element.y, element.objectSize, element.objectSize)
   
    if(dist(astronautX, astronautY, element.x, element.y) < element.objectSize/2 +50){
    	Lives = Lives-1;

    	obstacleArray.splice(i,1);

    	if (Lives <= 0){
    		gameScreen = 'lose'
    		return;
    	}

    
    continue;

  }
}

	textAlign(CENTER);
  	textFont(airstrike);
    textSize(50);
    fill(255);
    text('LEVEL 3', 200, 100 );

    textAlign(CENTER);
  	textFont(airstrike);
    textSize(25);
    fill(255);
    text(" Avoid the Aliens!", 200, 150 );

    textAlign(CENTER);
  	textFont(airstrike);
    textSize(30);
    fill(230, 42, 5);
    text('❤️ Lives: ' + Lives, 200, 180);

     textAlign(CENTER);
    textSize(25)
    textFont('Arial')
    text('❤️', 140, 181);



  

 if (astronautX > width - 75) {
    gameScreen = "winScreen";
   
	}

}

//WIN SCREEN
function drawWinScreen(){

background(73, 222, 120)
	textAlign(CENTER);
  	textFont(airstrike);
    textSize(100);
    fill(255);
    text("YOU WIN!", 700, 300 );

    
	textAlign(CENTER);
  	textFont(airstrike);
    textSize(40);
    fill(255);
    text("You managed to escape the aliens and leave their planet", 705, 400);

  
	textAlign(CENTER);
  	textFont(airstrike);
    textSize(40);
    fill(255);
    text("A rescue ship has found you, and you have returned to Earth!", 705, 450);



}

function draw (){
   if (gameScreen == "start") {
        drawStartScreen();
    }

    if (gameScreen == "cutScene1") {
        drawCutScene1();
    }



    if (gameScreen == "game") {
        drawGame();
    }

    if (gameScreen == "cutScene2"){
    	drawCutScene2();
    }

 	if (gameScreen == "level2"){
    	drawLevel2Screen();
}
    if(gameScreen == "lose"){
		drawLoseScreen()
    }

    if (gameScreen =="cutScene3"){
    	drawCutScene3();

    }

    if (gameScreen == "level3"){
    	drawLevel3Screen();
    }

    if (gameScreen == "winScreen"){
    	drawWinScreen();

    }
}
//LOSE SCREEN
function drawLoseScreen(){
background(0)
	textAlign(CENTER);
  	textFont(airstrike);
    textSize(100);
    fill(255);
    text("YOU LOSE!", 700, 300 );

    textAlign(CENTER);
  	textFont(airstrike);
    textSize(40);
    fill(255);
    text("You got lost in space and died...", 700, 400);

     textAlign(CENTER);
  	textFont(airstrike);
    textSize(40);
    fill(255);
    text("Try Again!", 700, 450);
}

//ASTRONAUT SPAWNER
function spawnAstronaut(){
	astronautX = 100;
	astronautY = height/2;

	vx = 0;
    vy = 0;
}



function windowResized(){

	resizeCanvas (windowWidth, windowHeight);

}

