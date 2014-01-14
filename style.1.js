
function init() {
	alert("hi!");
	var cells = documents.getElementsByClassName("row");
	for(var i in cells) {
		cells[i].onclick = function() {
			alert("testing testing" + this.id);
		}
	}
}