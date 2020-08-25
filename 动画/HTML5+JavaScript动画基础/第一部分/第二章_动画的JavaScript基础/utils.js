var utils = {};
var objA = {};
objA.name = "My Object A";
objA.sex = 'N';
objA.age = 19;
console.log("Name = "+ objA.name+ " objA.sex = "+ objA.sex+ " objA.age = "+ objA.age);

function drawFrame(){
	window.requestAnimationFrame(drawFrame, canvas);
	
	//animation code...
};

if (!window.requestAnimationFrame){
	window.requestAnimationFrame = (
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback){
				return window.setTimeout(callback, 1000/60);
			});
}