let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField")
const submit = document.querySelector("#btn")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastresult")
const lowOrHigh = document.querySelector(".lowOrHigh")
const startOver = document.querySelector(".resultpass")

const p = document.querySelector("p");

let prevGuess=[];
let numGuess=1;
let playGame= true;

if(playGame){
        submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert('please enter a valid value');   
    }
    else if (guess < 1) {
        alert('please enter a value more than 1');   
    }
    else if(guess > 100) {
       alert('please enter a value less than 100');   
    }
    else{
        prevGuess.push(guess)
        if (numGuess === 10) {
            cleanupGuess(guess);
            displayMessge(`Game Over. Random number was ${randomNumber}`);
            endGame();
        }
        else{
            cleanupGuess(guess);
            checkGuess(guess);
        }
    }

}
function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessge(`Congrats!! you guess correct. Random number was ${randomNumber}`)
        endGame();   
    } 
    else if(guess > randomNumber) {
        displayMessge(`Value is too high!!`);
    }
    else if(guess < randomNumber) {
        displayMessge(`value is too low!!`);
    }

}
function cleanupGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML=`${11 - numGuess}`;

}
function displayMessge(message){
    lowOrHigh.innerHTML = `<h2> ${message} </h2>`;

}
function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<span id="newGame">Start new game</span>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}
function newGame(){
    const newGameButton= document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
    
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        displayMessge('');
        playGame = true;
        
    })
}
