var incX = 0.04;
var incY = 0.05;
var distance = 22;
var wavesHeight = 50;
var looping = true;
var frame = 0;

let myFont, myFont2;
function preload() {
  myFont = loadFont('Noe-Text-Black.otf');
  myFont2 = loadFont('SourceCodePro-Light.ttf');
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('sketch-holder');
  background(0);
  noiseDetail(2);
}

function draw() {
  var zOff = frameCount * 0.01;
  background(0);
  //noStroke();
  strokeWeight(0.5);
	stroke(0);
  var yOff = 0;
  for(var y = - wavesHeight; y < height + wavesHeight; y += distance) {
    var xOff = 0;
    var r = xOff;
    beginShape();
		
    for(var x = -wavesHeight; x < width *2; x += distance) {
      var n = noise(xOff, yOff, zOff);
      var g = n;
      var b = yOff;
      var value = map(n, 0, 1, -wavesHeight, wavesHeight);
      curveVertex(x, y + value);
      xOff += incX;
      r = map(xOff, 0, 3.5, 255, 255);
      g = map(n, 0.2, 0.7, 255, 255);
      b = map(yOff, 0, 4, 255, 255);
      fill(r, g, b, b*1.5);
    }
    endShape();
    yOff += incY;
  
  }

  // big screen
  if(width > 1479) {
    strokeWeight(0.5);
    textFont(myFont);
    fill(255);
    textSize(250);
    text('Flux Island', width/2 - 720, height/2-50);
  
    fill(0);
    rect(width/2 - 290, height/2 - 10, 640,120);
    textFont(myFont2);
    fill(255);
    textSize(100);
    text('1.2 - 22.2', width/2 - 270, height/2+80);
  
    fill(0);
    rect(width/2 - 500, height/2 + 140, 1100,120);
    textFont(myFont2);
    fill(255);
    textSize(100);
    text('Vuotalo, Vuosaari', width/2 - 450, height/2+220);
  }
  // mid sized screen/iPad
  else if(width <= 1479 && width > 800){
    strokeWeight(0.5);
    textFont(myFont);
    fill(255);
    textSize(200);
    text('Flux Island', width/2 - 500, height/2-50);
  
    fill(0);
    rect(width/2 - 270, height/2 - 10, 640,120);
    textFont(myFont2);
    fill(255);
    textSize(100);
    text('1.2 - 22.2', width/2 - 250, height/2+80);
  
    fill(0);
    rect(width/2 - 440, height/2 + 140, 1100,120);
    textFont(myFont2);
    fill(255);
    textSize(100);
    text('Vuotalo, Vuosaari', width/2 - 400, height/2+220);
  }
  //phone
  else {
    strokeWeight(0.5);
    textFont(myFont);
    fill(255);
    textSize(100);
    text('Flux', width/2 - 100, height/2-50);
    text('Island', width/2 - 140, height/2+50);
  
    fill(0);
    rect(width/2 -100, height/2 + 80, 200,50);
    textFont(myFont2);
    fill(255);
    textSize(20);
    text('1.2 - 22.2', width/2 - 70, height/2+110);
  
    fill(0);
    rect(width/2 -120, height/2 + 150, 240,50);
    textFont(myFont2);
    fill(255);
    textSize(20);
    text('Vuotalo, Vuosaari', width/2 - 100, height/2+185);

  }


  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}