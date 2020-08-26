let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
// for(let i = 0; i < 6; i++) {
//     ctx.fillRect(i * 10, i * 10, 10, 10);
// }

function createRobot() {
  ctx.fillRect(60, 0, 50, 50); // Robot's head
  ctx.fillRect(80, 50, 10, 30); // Robot's neck
  ctx.fillRect(25, 75, 120, 10); // Robot's hands
  ctx.fillRect(45, 85, 80, 70); // Robot's body
  ctx.fillRect(45, 155, 10, 60); // Left leg
  ctx.fillRect(115, 155, 10, 60); // Right leg
}

function createThreeRectangles() {
  let colors = ["Red", "Black", "Green"];
  for (let i = 0; i < colors.length; i++) {
    ctx.fillStyle = colors[i];
    ctx.fillRect(i * 50, 0, 50, 100);
  }
}

function createStrokeRect() {
  ctx.strokeStyle = "Orange"; // color of lines
  ctx.lineWidth = 4; // lines width
  ctx.strokeRect(10, 10, 100, 20);
}

function createCross() {
  ctx.strokeStyle = "Pink";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(60, 60);
  ctx.moveTo(60, 10);
  ctx.lineTo(10, 60);
  ctx.stroke();
}

function createFunnyLittleMan() {
  ctx.lineWidth = 4;
  ctx.strokeRect(50, 10, 20, 20); // Head
  ctx.beginPath();
  ctx.moveTo(60, 30);
  ctx.lineTo(60, 80); // Body
  ctx.moveTo(60, 50);
  ctx.lineTo(36, 30); // Left hand
  ctx.moveTo(60, 50);
  ctx.lineTo(84, 30); // Right hand
  ctx.moveTo(60, 80);
  ctx.lineTo(36, 106); // Left leg
  ctx.moveTo(60, 80);
  ctx.lineTo(84, 106); // Right leg
  ctx.stroke();
}

function createLittleHut() {
  ctx.fillStyle = "Blue";
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(100, 60);
  ctx.lineTo(130, 30);
  ctx.lineTo(160, 60);
  ctx.lineTo(160, 100);
  ctx.lineTo(100, 100);
  ctx.fill();
}

function drawCircles() {
  ctx.lineWidth = 2;
  ctx.strokeStyle = "Green";

  ctx.beginPath();
  ctx.arc(50, 50, 20, 0, Math.PI / 2, false);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(100, 50, 20, 0, Math.PI, false);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(150, 50, 20, 0, Math.PI * 2, false);
  ctx.stroke();
}

function drawCircle(x, y, radius, fillCircle) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle === true) {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}

function drawDartboard() {
  ctx.lineWidth = 4;
  ctx.strokeStyle = "Red";
  drawCircle(100, 100, 10);
  ctx.strokeStyle = "Orange";
  drawCircle(100, 100, 20);
  ctx.strokeStyle = "Yellow";
  drawCircle(100, 100, 30);
  ctx.strokeStyle = "Green";
  drawCircle(100, 100, 40);
  ctx.strokeStyle = "Blue";
  drawCircle(100, 100, 50);
  ctx.strokeStyle = "Purple";
  drawCircle(100, 100, 60);
}

function drawSnowman() {
  ctx.lineWidth = 4;
  drawCircle(100, 50, 30); // Head
  drawCircle(90, 45, 4, true); // Left eye
  drawCircle(110, 45, 4, true); // Right eye
  ctx.fillStyle = "Orange";
  drawCircle(100, 55, 4, true); // Nose
  drawCircle(100, 130, 50); // Body
  ctx.fillStyle = "Black";
  for (let i = 1; i < 4; i++) {
    drawCircle(100, 90 + i * (10 * 2), 4, true);
  } // Buttons
}
