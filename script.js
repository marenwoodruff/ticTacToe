document.getElementsByClassName("button")[0].onclick= function() {
	var userChoice = prompt("Who should Bridget end up with? (type in 'MD' for Mark Darcy or 'DC' for Daniel Cleaver)");
	if (userChoice == "MD") {
		alert("You chose Darcy!!! Good luck fighting Cleaver! Darcy starts!");
		window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html"; }
	else if (userChoice == "DC") {
		alert("You chose Cleaver!!! Good luck winning Bridget's heart! Darcy starts!");
		window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html"; }	
	else 
		alert("Who do you think Bridget is?!? Her only loves are Darcy and Cleaver.");
	};

var nums = ["box1", "box2", "box3", "box4", "box5", "box6", "box7", "box8", "box9"];
// Array of spaces that will change/moves
var moves = [[null, null, null], [null, null, null], [null, null, null]];
// for loop, loops through each cell (9 of them) by name
var darcy = true
// Array of id names of divs/cells

for (var i in nums) {
// when you click, finds cell by name and makes it clickable and calls the clickstuff function
	document.getElementById(nums[i]).onclick=clickStuff;
}

// defines function
function clickStuff() {
  // makes sure there is nothing in cell
  // this = "THE DIV" -- whatever is assigned on line 11
  // if you had set line 11 = image, "this" would refer to "THE IMAGE"
	if (this.innerHTML== ""){
		if(darcy) {
			this.innerHTML='<img src="Mark_Darcy.jpg"/>';
			// checks each variable in nums to see which one was clicked
			for (var i in nums) {
				if (this.id == nums[i]) {
				// figures out which row and column [][], referencing the var moves and saves as x
					moves [Math.floor(i / 3)][i % 3] = "x";
				}
			}
			// after putting image to darcy, switches to cleaver
			darcy = false;
		}
		// if not darcy, then cleaver
		else {
			this.innerHTML='<img src="Daniel_Cleaver.jpg"/>';
			for (var i in nums) {
				if (this.id == nums[i]) {
					moves [Math.floor(i / 3)][i % 3] = "o";
				}
			}
			// after cleaver, next one will be darcy
			darcy = true;
		}
	}
	// checkWin function is called
	checkWin();
	//checkCats function is called
	checkCats();
};

var counter = 0;

function checkCats() {
	++counter;
	if (counter == 9) {
		alert("Cleaver:: [lands on restaurant table] I'm so sorry, I'm so sorry! Darcy:: [places hand in someone's salad] Oh, God! I'm sorry! [wipes dirty hand on man's suit] Darcy:: I really am sorry. I-I will pay. Cleaver:: Had enough Darcy? Darcy:: Not quite, if that's all right by you. [punches Daniel hard] Waiter:: Happy birthday to you... [everyone joins in, stopping fight] Waiter:: Happy birthday to you! Darcy:: Happy birthday dear what's-his-name... Cleaver:: Happy birthday to you... [tackles Darcy, both fly out window] Currently the game is a draw. Press 'New Game' to start again!");
		window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
	}
};

function checkWin(){
  if (moves [0][0]=="x" && moves [1][0]=="x" && moves [2][0]=="x") {
    alert("Bridget:: I'm so sorry. I didn't mean it. Well, I meant it, but I was so stupid that I didn't mean what I meant... After all, it's only a diary. Everyone knows diaries are just... full of crap. Darcy:: Yes, I know that. I was just buying you a new one. ")
	window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }

  if (moves [0][1]=="x" && moves [1][1]=="x" && moves [2][1]=="x") {
    alert("Bridget:: Wait a minute... nice boys don't kiss like that. Darcy:: Oh, yes, they fucking do. ")
	window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }

  if (moves [0][2]=="x" && moves [1][2]=="x" && moves [2][2]=="x") {
    alert("Darcy:: I realize that when I met you at the turkey curry buffet, I was unforgivably rude, and wearing a reindeer jumper. ")
    window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }

  if (moves [0][0]=="o" && moves [1][0]=="o" && moves [2][0]=="o") {
    alert("Cleaver:: Now these are very silly little boots, Jones. And this is a very silly little dress. And, um, these are, fuck me, absolutely enormous panties. Bridget:: Jesus. Fuck. Cleaver:: No, no. Don't apologize. I like them. Hello, Mummy. [they kiss] Cleaver:: I'm sorry, I have to have another look. They're too good to be true. Bridget:: No... Cleaver:: They're nothing to be embarrassed about. I'm wearing something similar myself. ")
    window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }

  if (moves [0][1]=="o" && moves [1][1]=="o" && moves [2][1]=="o") {
    alert("Bridget:: Daniel, what you just did is actually illegal in several countries. Cleaver:: That is one of the reasons that I'm so thrilled to be living in Britain today. ")
    window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }

  if (moves [0][2]=="o" && moves [1][2]=="o" && moves [2][2]=="o") {
    alert("Cleaver:: First, have some more wine, and then tell me the story about practicing French kissing with the art girls at school, because it's a very good story. Bridget:: It wasn't French kissing. Cleaver:: Don't care, make it up. That's an order, Jones.")
    window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }


  if (moves [0][0]=="x" && moves [0][1]=="x" && moves [0][2]=="x") {
    alert("Bridget:: [as Una Alconberry] No, Pam. Besides, the gravy needs sieving. Darcy:: [as Pamela Jones] Surely not, just stir it Una. ")
	window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }

  if (moves [1][0]=="x" && moves [1][1]=="x" && moves [1][2]=="x") {
    alert("Darcy:: I like you, very much. Bridget:: Ah, apart from the smoking and the drinking, the vulgar mother and... ah, the verbal diarrhea. Darcy:: No, I like you very much. Just as you are. ")
    window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }

  if (moves [2][0]=="x" && moves [2][1]=="x" && moves [2][2]=="x") {
    alert("Bridget:: You once said you liked me just as I am and I just wanted to say likewise. I mean there are stupid things your mum buys you, tonight's another... classic. You're haughty, and you always say the wrong thing in every situation and I seriously believe that you should rethink the length of your sideburns. But, you're a nice man and I like you. If you wanted to pop by some time that might be nice... more than nice. Darcy:: Right, crikey.  ")
    window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }

  if (moves [0][0]=="o" && moves [0][1]=="o" && moves [0][2]=="o") {
    alert("Darcy:: [about Bridget's attempt at caper berry gravy] I have to say, this really is the most incredible shit.  ")
    window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }

  if (moves [1][0]=="o" && moves [1][1]=="o" && moves [1][2]=="o") {
    alert("Bridget:: Apparently, I used to run round naked in his paddling pool. Cleaver:: I bet you did, you dirty bitch.")
    window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }

  if (moves [2][0]=="o" && moves [2][1]=="o" && moves [2][2]=="o") {
    alert("Cleaver:: I've been going crazy. I can't stop thinking about you, and thinking about what an idiot I've been. Christ, is that blue soup?")
    window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }

  if (moves [0][0]=="o" && moves [1][1]=="o" && moves [2][2]=="o") {
    alert("Bridget:: You know, I never really understood why you wanted to date me. It seems so unlikely. Cleaver:: Come on, Jones, for God's sake. You're sexy. You make me laugh - at you of course, not with you. And you were, incidentally, the best shag I ever had. ")
    window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }

  if (moves [2][0]=="o" && moves [1][1]=="o" && moves [0][2]=="o") {
    alert("Bridget:: So what do you think of the situation in Chechnya? Cleaver:: I couldn't give a fuck, Jones. ")
    window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }

  if (moves [0][0]=="x" && moves [1][1]=="x" && moves [2][2]=="x") {
    alert("[regarding the blue soup] Bridget:: How's it look? Mark:: Uh, great. It's, um, blue. Bridget:: Blue? Mark:: No, but, blue is good. If you ask me there isn't enough blue food. Bridget:: Oh, shit! It must be the string. Mark:: Oh, it's string soup? ")
    window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }	

  if (moves [0][2]=="x" && moves [1][1]=="x" && moves [2][0]=="x") {
    alert("Darcy: I don't think you're an idiot at all. I mean, there are elements of the ridiculous about you. Your mother's pretty interesting. And you really are an appallingly bad public speaker. And, um, you tend to let whatever's in your head come out of your mouth without much consideration of the consequences... But the thing is, um, what I'm trying to say, very inarticulately, is that, um, in fact, perhaps despite appearances, I like you, very much. Just as you are. ") 
    window.location = "/Users/marenwoodruff/wdi/tic%20tac%20toe/ticTacToeDraft2.html";
  }	
}
// document.getElementById("").onclick = function() {
//  document.getElementById("numbers").innerHTML = "";
// };

