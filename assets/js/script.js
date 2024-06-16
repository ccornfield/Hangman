
let username = ''
let game = {
    dictionary: ["Bramble"],
    currentWord: [],
    guesses: 0,
    score: 0
}

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                username = collectUsername();
                console.log(`Get ready to play ${username}!`);
                runGame();
            }
        });
    }
});

/***
 * The collectUsername function servers to take the input data from the user-name input box and transfer it to the username variable so that it
 * can be used to tell the play whether they've won or lost in the game of hangman.
 */
function collectUsername(){
    const userInput = document.getElementById("user-name");
    return userInput.value;
}

function runGame(){
    console.log("Running the game...")
}

function checkLetter(){

}

function compareCorrectLetter(){

}

function incrementScore(){

}

function displayHiddenWord(){

}

function displayHangmanImage(){

}
