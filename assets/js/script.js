
let username = ''
let game = {
    dictionary: ["Bramble"],
    currentWord: [],
    guesses: 0,
    score: 0,
    guesses: 0
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
    //dictionary = words[Math.floor(Math.random() * 1175)];
    //document.getElementById("user-header").innerText = `<img src="/assets/images/apfel.jpg" alt="0/6 Guesses remaining">`;
    //document.getElementById("user-info").innerText = `<div id="current-word">_ _ _ _ _ _ _</div>`;

}

function checkLetter(){
    //let letterSuggestion = document.getElementById("user-name").value
    for (let letters of currentWord) {
        if (letters = letterSuggestion){
            updateHiddenWord()
        } else {
            updateHangmanImage()
            document.getElementById("score").innerText = ++oldScore;
        }
    }
}

function compareCorrectLetter(){

}

function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function updateHiddenWord(){

}

function updateHangmanImage(){

}
