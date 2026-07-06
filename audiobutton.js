

let canvas 

let modemSound
let playButton

let modemVolSlider
let modemRateSlider

let level
let amplitude

let videoButton
let playing = false
let t100

//font
let airstrike

function preload(){
	modemSound = loadSound('audio/ModemSound.mp3')
	t1000 = createVideo(['video/T1000Reforming.mp4'])
	airstrike = loadFont('airstrike.ttf')
}
function setup(){

	canvas = createCanvas(windowWidth,windowHeight)
	canvas.position(0,0)
	canvas.style('z-index','-1')

	playButton = createButton('play audio')
	playButton.mousePressed(playModem)
	playButton.position(100,100)
	
	t1000.position(50,500)
	videoButton = createButton('play video')
	videoButton.mousePressed(playVideo)
	videoButton.position(300,100)

	modemVolSlider = createSlider(0,1,1,0.01)
	modemRateSlider = createSlider(0.1, 3, 1, 0.01)

	amplitude = new p5.Amplitude()



}

function playVideo(){
	if(playing){
	t1000.pause()
	videoButton.html('Play Video')

	}else{
	t1000.loop()
	videoButton.html('Pause Video')
	}

	playing = !playing
}

function playModem (){
	if(!modemSound.isPlaying()){
		modemSound.loop()
		playButton.html('Pause Audio')
	}else{
		modemSound.pause()
		playButton.html('Start Audio')
	
	}


}

function draw(){
	background(0)

	fill(0,255,255)
	textFont(airstrike)
	textSize(60)
	text('Words', 100, 100)
	
	level = amplitude.getLevel()

	let ellipsesize = map(level, 0.01, .2, 100, 800 )

	modemSound.setVolume(modemVolSlider.value())
	modemSound.rate(modemRateSlider.value())

	fill(250,0,0)
	ellipse(windowWidth/2, windowHeight/2, ellipsesize, ellipsesize)

}

function windowResized(){

	resizeCanvas (windowWidth, windowHeight);

}