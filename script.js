// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    HSB, background, color, colorMode, createCanvas, ellipse, fill, height, line, mouseIsPressed,
 *    mouseX, mouseY, rect, stroke, strokeWeight, width, mouseIsPressed
 */

let brushHue, priorX, priorY;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(6);
  background(95);
}

function draw() {
  chooseColors();
  if (mouseIsPressed) {
      //rect(mouseX, mouseY, 15, 15);
      line(priorX, priorY, mouseX, mouseY)
  }
  priorX = mouseX
  priorY = mouseY
}

function chooseColors() {
  brushHue += 1;
  if (brushHue > 359) {
    brushHue = 0;
  }

  stroke(brushHue, 50, 80); //HSB
  fill(brushHue, 50, 80);
}

function keyPressed () {
  background(95)
}

// function mousePressed () {
  //rect(mouseX, mouseY, 15, 15);
//}

// change to different shapes
// maybe try implementing this to flip the switch