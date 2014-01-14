var turn = ("O");

function init() {
	alert("hi!");
	var cells = documents.getElementsByClassName("row");
	for(var i in cells) {
		cells[i].onclick = function() {
			var row = this.id.substring(3);
			var cell = this.id.substring(4);
			alert("testing testing " + row = " " + cell);
			this.innerHTML = "X";
		}
	}
}

function init() {
	alert("hi!");
	var cells = documents.getElementsByClassName("row");
	for(var i in cells) {
		cells[i].onclick = makeMove;
	}
}

function makeMove() {
	cell = this.id[4];
	alert("testing testing " + cell);
	turn = (turn == "X"?"O":"X");
	this.innerHTML = turn;
}
