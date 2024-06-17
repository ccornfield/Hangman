
let username = 'Adam'
let game = {
    dictionary: ["bramble"],
    currentWord: [],
    hiddenWord: [],
    guesses: 0,
    score: 0,
    gameStart: 0
}

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("type") === "submit" && game["gameStart"] == 0) {
                //collectUsername();
                console.log(`Get ready to play ${username}!`);
                console.log(`the word for this game is ${game["dictionary"]}`)
                ++game["gameStart"]
                runGame();
            } else {
                checkLetter()
            }
        });
    }
});

/***
 * The collectUsername function servers to take the input data from the user-name input box and transfer it to the username variable so that it
 * can be used to tell the play whether they've won or lost in the game of hangman.
 */
//function collectUsername(){
    //const userInput = document.getElementById("user-name");
   // if (userInput !== null){
       // username = userInput.value;
   // } else {
      //  console.error("Please insert a valid username!")
      //  throw `Invalid User Input ${userInput}. Aborting!`;
    //}
//}
/***
 * The runGame function is in place to set up both the HTML required to run the game but also the variables nessecary for elements to display properly
 * such as the current word the game is using and the _ lines beneath the hangman image showing the current player guesses and their progress in the game.
 */
function runGame(){
    console.log("Running the game...")
    currentWord = game["dictionary"]
    //currentWord = words[Math.floor(Math.random() * 1175)];

    if (game["gameStart"] >= 1) {
        gameScreenEle = `<img id="game-screen" src="assets/images/apfel.jpg" alt="0/6 Guesses remaining">`
        currentWordEle = `<div id="current-word"></div>`
        document.getElementById("score").innerHTML = "Score: 0"
        document.getElementById("user-header").outerHTML = gameScreenEle;
        document.getElementById("user-info").outerHTML = currentWordEle;
    } else {
        //This is empty to ensure that the script does not try to generate the html elements again.
    }

    if (currentWord !== null){
        let word = currentWord[0]
        hiddenWord = ' _ '.repeat(word.length)
        document.getElementById('current-word').innerHTML = hiddenWord
        } else {
            console.error("An invalid word has been chosen!")
            throw `Invalid hangman word chosen: ${currentWord}. Aborting!`;
        }
    }


function checkLetter(){
    let letterSuggestion = document.getElementById("letter-input").value
    return console.log(letterSuggestion)
    }


//function compareCorrectLetter(){}

function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function updateHiddenWord(){

}

function updateHangmanImage(){

}
