// initially will be olive
var olive = true
// Array of id names of divs/cells
var nums = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
// Array of spaces that will change/moves
var moves = [[null,null,null],[null,null,null],[null,null,null]];
// for loop, loops through each cell (9 of them) by name
for(var i in nums) 
  // when you click, finds cell by name and makes it clickable and calls the clickstuff function

  document.getElementById(nums[i]).onclick=clickstuff;

// defines function
function clickstuff(){
  // makes sure there is nothing in cell
  // this = "THE DIV" -- whatever is assigned on line 11
  // if you had set line 11 = image, "this" would refer to "THE IMAGE"
  if (this.innerHTML== ""){ 
    if (olive)
  {
  this.innerHTML='<img src="images/olive.png" />';
  // checks each variable in nums to see which one was clicked
  for(var i in nums) {
    if (this.id == nums[i]){
      // figures out which row and column [][], referencing the var moves and saves as x
     moves [Math.floor(i / 3)][i % 3] = "x";
      }
   }
// after putting image to olive, switches to mushroom
  olive = false 
    }
    // if not olive, then mushroom
  else {
  this.innerHTML='<img src="images/mushroom.png" />';
  
 for(var i in nums) {

      if (this.id == nums[i]) {
      moves [Math.floor(i / 3)][i % 3] = "o";
      }
   }
  // after mushroom, next one will be olive
  olive = true
  }
}
else {
alert("nope")
}
// checkWin function is called
checkWin();
}

function checkWin(){
  if (moves [0][0]=="x" && moves [1][0]=="x" && moves [2][0]=="x")
    alert("X wins!")
  if (moves [0][1]=="x" && moves [1][1]=="x" && moves [2][1]=="x")
    alert("X wins!")
  if (moves [0][2]=="x" && moves [1][2]=="x" && moves [2][2]=="x")
    alert("X wins!")

  if (moves [0][0]=="o" && moves [1][0]=="o" && moves [2][0]=="o")
    alert("O wins!")
  if (moves [0][1]=="o" && moves [1][1]=="o" && moves [2][1]=="o")
    alert("O wins!")
  if (moves [0][2]=="o" && moves [1][2]=="o" && moves [2][2]=="o")
    alert("O wins!")

  if (moves [0][0]=="x" && moves [0][1]=="x" && moves [0][2]=="x")
    alert("X wins!")
  if (moves [1][0]=="x" && moves [1][1]=="x" && moves [1][2]=="x")
    alert("X wins!")
  if (moves [2][0]=="x" && moves [2][1]=="x" && moves [2][2]=="x")
    alert("X wins!")

  if (moves [0][0]=="o" && moves [0][1]=="o" && moves [0][2]=="o")
    alert("O wins!")
  if (moves [1][0]=="o" && moves [1][1]=="o" && moves [1][2]=="o")
    alert("O wins!")
  if (moves [2][0]=="o" && moves [2][1]=="o" && moves [2][2]=="o")
    alert("O wins!")

  if (moves [0][0]=="o" && moves [1][1]=="o" && moves [2][2]=="o")
    alert("O wins!")
  if (moves [2][0]=="o" && moves [1][1]=="o" && moves [0][2]=="o")
    alert("O wins!")

 
}



function resetbutton()
{
  if (confirm("Reset?"))
    location.reload();
}

