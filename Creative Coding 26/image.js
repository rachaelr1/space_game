//furby varibale
let furby

function preload(){
	furby = loadImage('images/furby.png')

}

function setup(){
	createCanvas(windowWidth, windowHeight)
	imageMode(CENTER)
	background(245, 149, 237)
}
function draw (){
	
if(mouseIsPressed == true){
		background(0,0,255)
	}else{
		background(245, 149, 237)
	}

	fill(81, 208, 224)
	textSize(100)
	text('hello', mouseX, mouseY)
	// if(keyIsPressed == true){
	// 	background(0,0,255)
	// }else{
	// 	background(100, 200, 50)
	// }

	image(furby, windowWidth/2, windowHeight/2, 100,100)

}