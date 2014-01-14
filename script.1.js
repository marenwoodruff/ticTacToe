document.getElementsByClassName("button")[0].onclick= function() {
	var userChoice = prompt("Who should Bridget end up with? (type 'MD' for Mark Darcy or 'DC' for Daniel Cleaver)");
	if (userChoice === "MD") {
		alert("ou chose Darcy!!! Good luck fighting Cleaver! Darcy starts!");
		window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html"; }
	else if (userChoice === "DC") {
		alert("You chose Cleaver!!! Good luck winning Bridget's heart! Darcy starts!");
		window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html"; }	
	else 
		alert("Who do you think Bridget is?!? Her only loves are Darcy and Cleaver.");
};
