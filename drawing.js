var canvasDiv = document.getElementById("drawingArea");
var canvas = canvasDiv.getContext('2d');


canvas.beginPath();
canvas.moveTo(75,50);
canvas.lineTo(100,75);
canvas.lineTo(100,25);
canvas.fill();

canvas.beginPath();
canvas.arc(100, 75, 50, 0, 2*Math.PI);
canvas.stroke();

canvas.fillStyle = "pink";
canvas.fillRect(80, 150, 100, 100);

canvas.fillStyle = "green";
canvas.fillRect(80, 150, 100, 100);
