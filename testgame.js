var canvas = document.getElementById("layer2");
var context;


var canv = document.getElementById('map');

var ctx = canv.getContext('2d');
ctx.scale(2.5,2.5);

var gx = 505;
var gy = 130;
var gmy = 5;
var ddx = 255;
var ddy = 255;
var action = false;
var ddmvx = 0;
var intrvlID = 0;
var pan = 0.0;
var pI = 0.1;
=======
var canv = document.getElementById('map');
var ctx = canv.getContext('2d');
var gx = 210;
var gy = 50;
var gmy = 4;
var ddx = 105;
var ddy = 125;
var zPos = 295;
var action = false;
var ddmvx = 0;
var intrvlID = 0;
var pan = -1.0;
var i = 0.3;
var stpID;


var steps = new Howl({
		src: ['footsteps2.mp3'],
		html5: true,
		loop: true,
		volume: 1.0, 
		sprite: {
			walk: [0,6000]
		}
	});

function init(){
	context = canvas.getContext("2d");
	map();

	intrvlID = setInterval(draw,100);
}
function dareD(){
	context.beginPath();
	context.rect(ddx,ddy,30,30);
=======
	Howler.pos(ddx,ddy,-0.5);
	Howler.stereo(-1.0);
	stpID = steps.play(['walk']);
	positionPanner();
	intrvlID = setInterval(draw,100);
}
function positionPanner(){
	steps.pos(gx,gy,-0.5,stpID);
	steps.stereo(pan);
}
function getData(){
	src = audioctx.createMediaElementSource(audio);
	src.connect(pan);
	pan.connect(audioctx.destination);
	positionPanner();
}
function dareD(){
	context.beginPath();
	context.rect(ddx,ddy,10,10);

	context.fillStyle = 'blue';
	context.fill();
	context.closePath();
}
function guard(x,y){
	context.beginPath();

	context.rect(x,y,40,40);
=======
	context.rect(x,y,10,10);

	context.fillStyle = 'red';
	context.fill();
	context.closePath();
}
function map(){
  ctx.beginPath();
  ctx.moveTo(100,100);
  ctx.lineTo(200,100);
  ctx.lineTo(200,50);
  ctx.lineTo(400,50);
  ctx.lineTo(400,100);
  ctx.lineTo(500,100);
  ctx.lineTo(500,50);

  ctx.fillStyle= "white";
  ctx.fillRect(200, 50, 200, 150);
  ctx.fillStyle = "green";
  ctx.fillRect(100, 100, 100, 50);
  ctx.fillRect(400, 100, 100, 50);
  ctx.fillRect(500, 50, 50, 100);



  ctx.moveTo(100,150);
  ctx.lineTo(200,150);
  ctx.lineTo(200,200);
  ctx.lineTo(400,200);
  ctx.lineTo(400,150);
  ctx.lineTo(550,150);

  ctx.lineTo(550,50); 

  ctx.lineTo(550,50);

  ctx.lineTo(500,50);

  ctx.moveTo(100,100);
  ctx.lineTo(100,150);

  ctx.stroke();
  ctx.closePath();

   
}
function onKeyDown(e){
	if (e.keyCode ==32){
=======
  
}
function onKeyDown(e){
	if (e.keyCode == 32){

		action = true;
	}
}
function onKeyUp(e){
	if (e.keyCode == 32) {
		action = false;
	}
}
$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);

function clear(){
	context.clearRect(0,0,canvas.width,canvas.height);
}

//function footsteps(){
	
//}
=======


function draw(){
	clear();
	guard(gx,gy);
	dareD();
	if (action){

		if(gy < 200 || gy > 300){
=======
		if(gy < 100 || gy > 150){

			ddmvx = 20;
		}else{
			clearInterval(intrvlID);
			alert('Game Over. The guard spotted you');
			steps.stop();
		}	
	}

	if(gy + gmy > 460 || gy + gmy < 130){
		gmy = -gmy;
		pI = -pI;
	}
	if(ddx + ddmvx > 1300){
		clearInterval(intrvlID);
		steps.stop();
	}
	pan += pI;
	steps.stereo(-1.0,id);
	ddx += ddmvx;
	gy += gmy;
}
var id = steps.play('walk');
=======
	if(gy + gmy > 190 || gy + gmy < 50){
		gmy = -gmy;
		i = -i;
	}
	if(ddx + ddmvx > 525){
		clearInterval(intrvlID);
		steps.stop();
	}
	pan += i;
	ddx += ddmvx;
	gy += gmy;
	positionPanner();
	
}

init();


