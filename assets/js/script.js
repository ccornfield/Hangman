
let username = ''
let game = {
    dictionary: words,
    currentWord: '',
    hiddenWord: '',
    guessedWords: [],
    guesses: 0,
    score: 0,
    gameStart: 0
}

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("type") === "submit" && game["gameStart"] == 0) {
                collectUsername();
                alert(`Get ready to play ${username}!`);
                console.log(`the word for this game is ${game["currentWord"]}`)
                ++game["gameStart"]
                changeHTMLForGameplay()
                runGame();
            } else if (this.getAttribute("type") === "submit" && game["gameStart"] >= 1) {
                checkLetter()
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
}

function changeHTMLForGameplay(){

        gameScreenEle = `<img id="game-screen" src="assets/images/0-guesses.jpg" alt="0/6 Guesses remaining">`
        currentWordEle = `<div id="current-word"></div>`
        document.getElementById("score").innerHTML = "Score: 0"
        document.getElementById("user-header").outerHTML = gameScreenEle;
        document.getElementById("user-info").outerHTML = currentWordEle;

}

/***
 * The runGame function is in place to set up both the HTML required to run the game but also the variables nessecary for elements to display properly
 * such as the current word the game is using and the _ lines beneath the hangman image showing the current player guesses and their progress in the game.
 */
function runGame(){
    game.guesses = 0;
    document.getElementById("game-screen").outerHTML = `<img id="game-screen" src="assets/images/0-guesses.jpg" alt="0/6 Guesses remaining"></img>`;
    console.log("Running the game...");
    currentWord = words[Math.floor(Math.random() * 1175)];
    alert(currentWord);
    //currentWord = words[Math.floor(Math.random() * 1175)];

    if (currentWord !== null){
        let spaces = ' _ '
        game.hiddenWord = spaces.repeat(currentWord.length);
        //game.hiddenWord = ' _ ' * word.length;
        document.getElementById('current-word').innerHTML = game.hiddenWord;
        } else {
            console.error("An invalid word has been chosen!")
            throw `Invalid hangman word chosen: ${currentWord}. Aborting!`;
        }
    }

/***
 * The check letter function is designed to allow for the program to decide whether or not the letter provided by the user is equal to any of the 
 */
function checkLetter(){
    //game.currentWord[0].split('') This is to divide up the currentWord into individual letters that can be searched through with a for loop.
    let correctWord = 0
    let incorrectWord = 0
    let letterSuggestion = document.getElementById("user-name").value
    let wordArray = game.currentWord[0].split('');

    //for (let guess in game.guessedWords){
        //if (letterSuggestion == guess){
            //alert("You have already used this word!")
        //}
    //}

    for (let letters of wordArray) {
        if (letterSuggestion === letters){
            console.log("This is the correct letter!")
            ++correctWord
        } else if (correctWord == 0) {
            console.log("This is the incorrect letter!")
            ++incorrectWord
            if(incorrectWord == 7){
                console.log("None of these letters are correct!")
                ++game.guesses
                updateHangmanImage()
            }
        }

    if (correctWord !== 0) {
        game.guessedWords.push(letterSuggestion)
        //updateHiddenWord()
    }
    }
}


//function compareCorrectLetter(){}

function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function updateHiddenWord(){
    /***
     * For this function I want to achieve the following goal: It goes by word by word, if it's the word the player submitted, it prints that word, 
     * otherwise it does ' _ '. A way for it to go item by item like currentWord[0], currentWord[1] etc. A for loop may be the best way to do this.
     */

}

/***
 * This function will update the hangman image based on the number of guesses the player has used while also handling the games loss state.
 */
function updateHangmanImage(){
    console.log(game.guesses)
    if (game.guesses == 1) {
        document.getElementById("game-screen").outerHTML = `<img id="game-screen" src="assets/images/1-guesses.jpg" alt="1/6 Guesses remaining"></img>`
    } else if (game.guesses == 6){
        alert(`Sorry ${username}, you lost!`)
        runGame()
    }
}
