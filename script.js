var numSquares = 3;
var colors = [];
var pickedColor;

var boxes = document.querySelectorAll(".box");
var colorCode = document.getElementById("colorcode");
var mssg = document.getElementById("message");
var h1 = document.querySelector("h1");
var beginBtn = document.getElementById("beginbtn");
var easyBtn = document.querySelector(".easylvl");
var hardBtn = document.querySelector(".hardlvl");

init();

function init() {
	colorCode.innerHTML = pickedColor;
	setBoxes();
    easyBtn.addEventListener("click", function(){
		numSquares=3;
		reset();
	});
    hardBtn.addEventListener("click", function(){
        numSquares=6;
        reset();
    })
	reset();
}

beginBtn.addEventListener("click", function() {
	reset();
});

function setBoxes() {
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].style.backgroundColor = colors[i];
		boxes[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				mssg.innerHTML = "CORRECT";
				beginBtn.innerHTML = "PLAY AGAIN";
                for(var i = 0; i < boxes.length; i++) {
                    boxes[i].style.backgroundColor = pickedColor;
                    h1.style.backgroundColor = pickedColor;
                }
			}
			else {
				this.style.backgroundColor = "#202020";
				mssg.innerHTML = "TRY AGAIN";
			}
		});
	}
}


function reset() {
	colors = RandomCol(numSquares);
	pickedColor = colors[Math.floor(Math.random() * colors.length)];
	colorCode.innerHTML = pickedColor;
	h1.style.backgroundColor = "#d3b50c";
	beginBtn.innerHTML = "NEW COLORS";
	mssg.innerHTML = "";
    var i=0;
	while(i!=boxes.length){
		if(colors[i]) { 
			boxes[i].style.display = "block";
			boxes[i].style.backgroundColor = colors[i];
		}
		else {
			boxes[i].style.display = "none";
		}
        i++;
	}
}

function RandomCol(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
        var r = Math.floor(Math.random() * 256);
	    var g = Math.floor(Math.random() * 256);
	    var b = Math.floor(Math.random() * 256);
	    arr.push("rgb(" + r + ", " + g + ", " + b + ")"); 
	}
	return arr;
}

