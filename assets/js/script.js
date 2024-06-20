
let username = ''
let game = {
    dictionary: words,
    currentWord: 'example',
    hiddenWord: '',
    guesses: 0,
    score: 0,
    gameStart: 0
}
let newHiddenWord = []

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("type") === "submit" && game["gameStart"] == 0) {
                collectUsername();
                alert(`Get ready to play ${username}!`);
                console.log(`the word for this game is ${game["currentWord"]}`);
                ++game["gameStart"];
                changeHTMLForGameplay();
                runGame();
            } else if (this.getAttribute("type") === "submit" && game["gameStart"] >= 1) {
                checkLetter();
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
    username = userInput.value;
    if (userInput !== null){
        username = userInput.value;
    } else {
        console.error("Please insert a valid username!")
        throw `Invalid User Input ${userInput}. Aborting!`;
    }

    //if (userInput.value.length == 0){
            //alert('Please insert a username!')
    //}
}

function changeHTMLForGameplay(){

        gameScreenEle = `<img id="game-screen" src="assets/images/0-guesses.jpg" alt="0/6 Guesses remaining">`
        currentWordEle = `<div id="current-word"></div>`
        document.getElementById("scoreboard").innerHTML = `Score:<span id="score">0</span>`
        document.getElementById("user-header").outerHTML = gameScreenEle;
        document.getElementById("user-info").outerHTML = currentWordEle;

}

/***
 * The runGame function is in place to set up both the HTML required to run the game but also the variables nessecary for elements to display properly
 * such as the current word the game is using and the _ lines beneath the hangman image showing the current player guesses and their progress in the game.
 */
function runGame(){
    newHiddenWord = []
    game.guesses = 0;
    document.getElementById("game-screen").outerHTML = `<img id="game-screen" src="assets/images/0-guesses.jpg" alt="0/6 Guesses remaining"></img>`;
    console.log("Running the game...");
    currentWord = words[Math.floor(Math.random() * 1175)];
    alert(currentWord);

    if (currentWord !== null){
        initializeHiddenWord()
        } else {
            console.error("An invalid word has been chosen!");
            throw `Invalid hangman word chosen: ${currentWord}. Aborting!`;
        }
    }

/***
 * The check letter function is designed to allow for the program to decide whether or not the letter provided by the user is equal to any of the 
 */
function checkLetter(){
    let correctWord = 0;
    let incorrectWord = 0;
    let letterSuggestion = document.getElementById("user-name").value;
    let wordArray = currentWord.split('');
    console.log(currentWord)

    for (let letters of wordArray) {
        if (letterSuggestion === letters){
            console.log("This is the correct letter!")
            correctWord++
            updateHiddenWord()
        } else if (correctWord == 0) {
            console.log("This is the incorrect letter!")
            incorrectWord++
            if(incorrectWord == currentWord.length){
                console.log("None of these letters are correct!")
                game.guesses++
                updateHangmanImage()
            }
        }
        doesPlayerwin()
    }
}

/***
 * This function is for the sole purpose of increasing and decreasing the score displayed in the header whenever the user wins a game of hangman.
 */

function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function initializeHiddenWord(){
    newHiddenWord = Array(currentWord.length).fill('_')
    document.getElementById('current-word').innerHTML = newHiddenWord.join(' ');
}

function doesPlayerwin(){
    let remainingWords = newHiddenWord.filter(x => x=='_').length
    if (remainingWords == 0 ) {
        alert(`Congratulations ${username}, you won!`)
        incrementScore()
        runGame()
    }
}

function updateHiddenWord(){
    let letterSuggestion = document.getElementById("user-name").value
    let wordArray = currentWord.split('')

    for (let i = 0; i < wordArray.length; i++) {
        if (letterSuggestion === wordArray[i]) {
            newHiddenWord[i] = letterSuggestion;
        } 
    }

    document.getElementById('current-word').innerHTML = newHiddenWord.join(' ');

}

/***
 * This function will update the hangman image based on the number of guesses the player has used while also handling the games loss state.
 */
function updateHangmanImage(){
    console.log(game.guesses)
    if (game.guesses == 1) {
        document.getElementById("game-screen").outerHTML = `<img id="game-screen" src="assets/images/1-guesses.jpg" alt="1/6 Guesses remaining"></img>`
    } 
    else if (game.guesses == 2){
        document.getElementById("game-screen").outerHTML = `<img id="game-screen" src="assets/images/1-guesses.jpg" alt="2/6 Guesses remaining"></img>`
    }
    else if (game.guesses == 3){
        document.getElementById("game-screen").outerHTML = `<img id="game-screen" src="assets/images/1-guesses.jpg" alt="3/6 Guesses remaining"></img>`
    }
    else if (game.guesses == 4){
        document.getElementById("game-screen").outerHTML = `<img id="game-screen" src="assets/images/1-guesses.jpg" alt="4/6 Guesses remaining"></img>`
    }
    else if (game.guesses == 5){
        document.getElementById("game-screen").outerHTML = `<img id="game-screen" src="assets/images/1-guesses.jpg" alt="5/6 Guesses remaining"></img>`
    }
    else if (game.guesses == 6){
        document.getElementById("game-screen").outerHTML = `<img id="game-screen" src="assets/images/1-guesses.jpg" alt="GAME OVER"></img>`
        alert(`Sorry ${username}, you lost! The word was ${game.currentWord}.`)
        runGame()
    }
}
