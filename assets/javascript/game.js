console.log("This is connected")

var userguess = null;
var computerGuess = "bad luck";
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

// Create Array of Letters (var options = ["A", . . . ]) for computer to choose from; I'm sure there's a faster way to do this, but I'm going to leave it like this.

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//create a function to set up the innerHtml text for every element.  This function will update all the variables at once.  
/*document.getelementbyID("id name").innerHTML=(wins, losses, guesses left)

*/

//Computer chooses a random letter from the array
var computerChoice = function () {
    computerGuess = options[Math.floor(Math.random() * options.length)];
    console.log("Computer's Guess: ", computerGuess);

}

//call the function to get the computer's guess 
//computerChoice()

//create a function to run the game

var runTheGame = function () 
{
    console.log("Game is Ready");
    //this code captures the user's guess
    //notes from the youtube video on Rock Paper Scissors: "what we're doing is that a user presses a key.  after the key is released an onkeyup event happens
    //the keycode that is attached to the key that was just released.  take that character and turn it into a string"
    
    computerChoice()


    document.onkeyup = function () 
    {
        //userChoice = function(){
        var userguess = String.fromCharCode(event.keyCode).toLowerCase();
        //var userguess= keypress.key;

        console.log("User's Guess: ", userguess);


        //userChoice()


        if (userguess == computerGuess) 
        {
            wins++;
            document.getElementById("winsTotal").innerHTML=wins;
            alert("You got it this time.  Will you guess it again?");
            computerChoice();
        } 
        
        else 
        {
            console.log(userguess + " " + computerGuess);
            guessesLeft--;
            alert("You chose wrong!");
            console.log(guessesLeft);
        }
    }

    //when guesses left = 0, losses++
    if (guessesLeft == 0)
    {
        losses++;
        guessesLeft = 9;
        guessesSoFar = [];
        document.getElementById("guessesLeft").innerHTML=losses;
        computerChoice();

    }

}

runTheGame()



console.log("3rd function");



//*this code captures a key press on the screen    document.onkeyup = function() {        alert("Working!");   }*//

//PSEUDO CODE FOR THE GAME//
//  var computerChoice executes the function to choose a random letter;
//-Computer chooses a random letter
// Create Array of Letters (var options = ["A", . . . ]) for computer to choose from;
// Capture userGuess onkeyup guess  (make sure to use .toLowerCase);


//record letters (var guessesSoFar (event.onkey) chosen by UserGuess;
//create wins variable (var wins = 0);
//create losses variable (var losses = 0);
//Create guessesLeft variable (var guesses = 9);
//guessesLeft-- (i-1) to subtract a guess on a wrong answer;
//Compare userGuess to Computerchoice  (if, else/if, else)
//if userGuess = computerChoice, wins++
//if userGuess doesn't equal computer choice, guessesLeft--
//if guessesLeft reaches less than 1 and doesn't match computerChoice add +1 to losses (losses++)

//when wins++ or losses++ 
//reset guessesLeft back to 9
//reset guessSoFar back to emptyArray
//execute computerChoice again on the reset

//console.log every step and write one step at a time.  TEST OFTEN with console.log        

computersGuess = function () {
    var computerGuess = options[Math.floor(Math.random() * options.length)];
    console.log(computerGuess);
    console.log("fourth function");
};   