/* global createCanvas, colorMode, HSB, color, noStroke, background, fill,
 *  ellipse, text, stroke, circle, line, width, height, mouseX, mouseY, mouseIsPressed, rect, strokeweight, */

// We'll use variables for most of our colors in this code-along.
let brushHue, priorX, priorY, backgroundColor, color1, color2, textColor, brightness, saturation;

let didchange = false;

function setup() {
  // Canvas & color settings
  createCanvas(500, 300); // (width, height)
  colorMode(HSB, 360, 100, 100);
  noStroke();
  brushHue = 0;

  // When used with only one argument, the color mode is greyscale.
  // 0 is black and 100 is white.
  backgroundColor = color(95);
  textColor = color(20);
  saturation = 80;
  brightness = 80;

  
  color1 = color(0, saturation, brightness);// red
  color2 = color(200, saturation, brightness);// blue
}

function draw() {
  //background(backgroundColor);
  drawCenterLine();
  
  // The red and blue circles:
  // left ellipse
  fill(color1);
  ellipse(width / 4, height / 2, 50);
  
  // right ellipse
  fill(color2);
  ellipse(.75 * width, height / 2, 50);

  // The grey circle and the text:
  fill(textColor);
  
  // circle that follows mouse
  ellipse(mouseX, mouseY, 50);
  text("Flip the switch", 20, 20);
  chooseColors();
  
  if(mouseX > width / 2) { // change the colors to black
    nightMode();
  } else if (mouseX < width / 2) { //change the colors back
    dayMode();
  }
  if (mouseIsPressed) {
    circle(priorX, priorY, mouseX, mouseY)
  }
  priorX = mouseX
  priorY = mouseY
}

function chooseColors() {
  brushHue += 1;
  if (brushHue > 359) {
    brushHue = 0;
  }
  stroke(brushHue, 10, 50);
  fill(brushHue, 50, 80);
}

// flip the switch
function nightMode() {
  backgroundColor = color(20);
  textColor = color(95);  
  if (didchange == false) {
    background (backgroundColor)
    didchange = true
  }

  color1 = color(200, saturation, brightness); // blue
  color2 = color(0, saturation, brightness); // red
}

// flip the switch back to day mode
function dayMode(){
  backgroundColor = color(95);
  textColor = color(20);
  if (didchange == true) {
    background (backgroundColor)
    didchange = false
  }
  color1 = color(0, saturation, brightness); // red
  color2 = color(200, saturation, brightness);// blue
}

function keyPressed() {
  background(95)
}

function mousePressed() {
  ellipse(mouseX, mouseY, 15, 15);
}

function drawCenterLine() {
  // This function will turn stroke on, draw the line, and then turn stroke
  // back off.
  // Remember a line segment in p5.js has four arguments: x1, y1, x2, y2
  stroke(textColor);
  line(width / 2, 0, width / 2, height);
  noStroke();
}

