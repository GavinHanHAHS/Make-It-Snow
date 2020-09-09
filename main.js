// JAVASCRIPT

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");

cnv.width = 800;
cnv.height = 600;

// Global Variables
// Arrays to store data

let snow = [[400, 300, 40]];

//Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Snow
  ctx.strokeStyle = "white";
  
  drawCircle(snow[0][0], snow[0][1], snow[0][2]);

  // Request another Animation Frame
  requestAnimationFrame(draw);
}

function drawCircle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.stroke;
}