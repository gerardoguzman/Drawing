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


//background
canvas.fillStyle = "black";
canvas.fillRect(0,556,1050,150);

//lines
canvas.fillStyle = "yellow";
canvas.fillRect(0,600,90,50);

canvas.fillStyle = "yellow";
canvas.fillRect(200,600,200,50);

canvas.fillStyle = "yellow";
canvas.fillRect(500,600,200,50);

//tire
canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(200,500,70,0,2*Math.PI,true);
canvas.fill();

canvas.beginPath();
canvas.fillStyle = "black";
canvas.arc(580,500,70,0,2*Math.PI,true);
canvas.fill();

//body
canvas.fillStyle = "grey";
canvas.fillRect(0,290,1000,150);

//top of the car
canvas.fillStyle = "grey";
canvas.fillRect(0,70,750,220);

//window
canvas.fillStyle = "aquamarine";
canvas.fillRect(500,100,200,150);

//light
canvas.beginPath();
canvas.fillStyle = "gold";
canvas.arc(760,360,30,0,2*Math.PI,true);
canvas.fill();
