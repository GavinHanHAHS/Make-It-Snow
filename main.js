// JAVASCRIPT

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 600;

// Global Variables
// Arrays to store data

let snow = [];
for(let n = 0; n < 150; n++) {
  snow.push([randomDec(0, cnv.width), 0, randomDec(3, 8), Math.random() * (4 - 1) + 1]);
}

//Main Program Loop
requestAnimationFrame(draw);

function draw() {

  // Drawing
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Snow
  ctx.fillStyle = "white";
  
  for(let i = 0; i < snow.length; i++) {
    drawCircle(snow[i][0], snow[i][1], snow[i][2]);
    snow[i][1] += snow[i][3];
    if(snow[i][1] >= cnv.height) {
      snow[i][1] = 0;
      snow[i][0] = randomDec(0, cnv.width);
      snow[i][3] = Math.random() * (4 - 1) + 1;
    }
  }

  // Request another Animation Frame
  requestAnimationFrame(draw);
}

// Event Functions / handlers

document.addEventListener("click", mousedownHandler);
document.addEventListener("keydown", keydownHandler);

function mousedownHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();
  let mouseX = Math.round(event.clientX - cnvRect.left);
  let mouseY = Math.round(event.clientY - cnvRect.top);

  snow.push([mouseX, mouseY, randomDec(3, 8), Math.random() * (4 - 1) + 1])
}

function keydownHandler(event) {
  if(event.code == "ArrowLeft") {
    snow.pop();
  } else if(event.code == "ArrowRight") {
    snow.push([randomDec(0, cnv.width), 0, randomDec(3, 8), Math.random() * (4 - 1) + 1]);
  }
}

// Other random functions

function drawCircle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fill();
}

function randomDec(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}


