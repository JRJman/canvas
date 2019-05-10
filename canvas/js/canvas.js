let canvas = document.getElementById("myCanvas");
let button = document.getElementById("button");
let context = canvas.getContext("2d");
let nummer1 = 120;
let nummer2 = 0;

setTimeout(linkeroor, 1000);

function linkeroor(){
  context.lineWidth = 2;
  context.beginPath();
  context.arc(60,200,60,0,2*Math.PI);
  context.closePath();
  context.fillStyle = "green";
  context.fill();
  context.stroke();
  setTimeout(rechteroor, 1000);
}

function rechteroor(){
  context.beginPath();
  context.arc(340,200,60,0,2*Math.PI);
  context.closePath();
  context.fill();
  context.stroke();
  setTimeout(hoofd, 1000);
}

function hoofd(){
  context.beginPath();
  context.arc(200,200,150,0,2*Math.PI);
  context.fillStyle = "yellow";
  context.fill();
  context.stroke();
  setTimeout(linkeroog, 1000);
}

function linkeroog(){
  context.beginPath();
  context.arc(130,130,40,0,2*Math.PI);
  context.closePath();
  context.strokeStyle = "black";
  context.stroke();
  // pupil
  context.beginPath();
  context.arc(145,135,20,0,2*Math.PI);
  context.closePath();
  context.strokeStyle = "red";
  context.stroke();
  setTimeout(rechteroog, 1000);
}

function rechteroog(){
  context.beginPath();
  context.arc(290,130,40,0,2*Math.PI);
  context.closePath();
  context.strokeStyle = "black";
  context.stroke();

  // pupil
  context.beginPath();
  context.arc(275,135,20,0,2*Math.PI);
  context.closePath();
  context.strokeStyle = "red";
  context.stroke();
  setTimeout(mond, 1000);
}

function mond(){
  context.beginPath();
  context.arc(200,210,100,-0.2,0.9*Math.PI);
  context.closePath();
  context.fillStyle = "black";
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = "blue";
  context.stroke();
  setTimeout(haar, 500);
}

function haar(){
  context.lineWidth = 10;
  context.beginPath();
  context.moveTo(nummer1+10,40);
  context.lineTo(nummer1,70);
  context.closePath();
  context.strokeStyle = "blue";
  context.stroke();
  nummer1 = nummer1 + 15;
  if(nummer2 < 10){
    setTimeout(haar, 500);
    nummer2 = nummer2 + 1;
  }
}
