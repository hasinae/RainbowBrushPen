/* global createCanvas, colorMode, HSB, color, noStroke, background, fill,
 *  ellipse, text, stroke, line, width, height, mouseX, mouseY, mouseIsPressed, rect, strokeweight, */

// We'll use variables for most of our colors in this code-along.
let brushHue,
  priorX,
  priorY,
  backgroundColor,
  color1,
  color2,
  textColor,
  brightness,
  saturation;

function setup() {
  createCanvas(400, 400); // (width, height)
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeweight(6);
  textColor = color(20);
  saturation = 80;
  brightness = 80;

  color1 = color(0, saturation, brightness); // red
  color2 = color(200, saturation, brightness); // blue
}

function draw() {
  background(backgroundColor);
  drawCenterLine();
  
  
  fill(color1);
  ellipse(width / 4, height / 2, 50);

  // right ellipse
  fill(color2);
  ellipse(0.75 * width, height / 2, 50);

  // The grey circle and the text:
  fill(textColor);

  // circle that follows mouse
  ellipse(mouseX, mouseY, 50);
  text("Flip the switch", 20, 20);
  //chooseColors();
  
  if (mouseX > width / 2) {
    // change the colors to black
    nightMode();
  } else if (mouseX < width / 2) {
    //change the colors back
    dayMode();
  }
  if (mouseIsPressed) {
    ellipse(priorX, priorY, mouseX, mouseY);
  }
    priorX = mouseX;
    priorY = mouseY;
}


// flip the switch
function nightMode() {
  backgroundColor = color(20);
  textColor = color(95);

  color1 = color(200, saturation, brightness); // blue
  color2 = color(0, saturation, brightness); // red
}

function chooseColors() {
  brushHue += 1;
  if (brushHue > 359) {
    brushHue = 0;
  }
  stroke(brushHue, 50, 80); //HSB
  fill(brushHue, 50, 80);
}

function keyPressed() {
  background(95);
}

// flip the switch back to day mode
function dayMode() {
  backgroundColor = color(95);
  textColor = color(20);

  color1 = color(0, saturation, brightness); // red
  color2 = color(200, saturation, brightness); // blue
}

function drawCenterLine() {
  stroke(textColor);
  line(width / 2, 0, width / 2, height);
  noStroke();
}
