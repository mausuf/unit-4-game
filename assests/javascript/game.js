var wins = 0; //Number of wins
var losses = 0; //Number of losses
var randomTargetNumber; //Number generated @ start of game
var counter = 0;

//------------------------------------------------
$(".crystalboxes").on("click", function() {
    // Clicking the button triggers an alert message.
    alert("You clicked a crystal!" + counter + "times");
  });
//------------------------------------------------
$("numberToGuess").text("randomGeneratedNumber")
//------------------------------------------------
//The random number shown at the start of the game should be between 19 - 120.
function randomTargetNumber(min,max) {
    return Math.floor(Math.random() * 101+19);
  }
console.log(randomGeneratedNumber());
$("#computerNumber").html('Random Result: ');
//Each crystal should have a random hidden value between 1 - 12.
for(var i=0; i<4; i++){
    var randomCrystalNumber = Math.floor(Math.random()*12+1);
    console.log (randomCrystalNumber);
}
document.onclick = function(event) {


var userCrystalClicked = event.key; //How to capture what was pressed on click
var computernumber  = randomGeneratedNumber[Math.floor(Math.random() * randomGeneratedNumber.length)];

}





    /*Here's how the app works:

There will be four crystals displayed as buttons on the page.

The player will be shown a random number at the start of the game.

When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

Your game will hide this amount until the player clicks a crystal.
When they do click one, update the player's score counter.
The player wins if their total score matches the random number from the beginning of the game.

The player loses if their score goes above the random number.

The game restarts whenever the player wins or loses.

When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.*/



//ALL NOTES BELOW//
/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
//function getRandomArbitrary(min, max) {
 //   return Math.random() * (max - min) + min;
//}
/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
//NOTES END//