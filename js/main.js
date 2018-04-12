
var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var bgpic = new Image();
var canwidth;
var canheight;
var ane;

document.body.onload = game;

function game() {
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init() {
	can1 = document.getElementById('canvas1');
	can2 = document.getElementById('canvas2');
	ctx1 = can1.getContext("2d");
	ctx2 = can2.getContext("2d");

	bgpic.src = './src/background.jpg';
	canwidth = can1.width;
	canheight = can1.height;	
	ane = new aneObj();
	ane.init();
}

function gameloop() {

	// 相比较setTimeou setInterval 更加科学，会根据机器的性能来绘制。
	window.requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	drawBack();
	// console.log(deltaTime);
}