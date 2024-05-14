const form = document.querySelector('.form')
const guessField = document.querySelector('#guessField')
const submitButton = document.querySelector('#submitButton')
const message = document.querySelector('.message')
const randomNumber = Math.round(Math.random() * 100 + 1)
const guessRemaining = document.querySelector('#guessRemaining')
const guesses = document.body.querySelector('.guesses')
const newButton = document.querySelector('#newButton')
let count = 10
console.log(randomNumber)

submitButton.addEventListener('click', function (e) {
    e.preventDefault()
    if (checkGuessField(guessField.value)) {
        // matchNumber(Number(guessField.value))
        displayMessage(Number(guessField.value), randomNumber)
    }
    else {
        message.innerHTML = `${guessField.value} - is not a number, Enter the valid number`
    }
    let p = document.createElement("p");
    p.innerHTML = guessField.value
    guesses.appendChild(p)
    count = count - 1;
    guessRemaining.innerHTML = count
    if(count === 0)
    addNewButton()
}, false)


function checkGuessField(str) {
    if (isNaN(str))
        return false
    else
        return true
}


function displayMessage(num1, num2) {
    if (num1 === num2) {
        message.innerHTML = `Yes, you guessed it right`
        addNewButton()
    }
    else {
        if (num1 > num2) {
            message.innerHTML = `Guessed number is high`
        }
        else {
            message.innerHTML = `Guessed number is low`
        }
    }
}

function addNewButton(){
    newButton.removeAttribute("hidden")
    guessField.setAttribute("disabled","");
    submitButton.setAttribute("disabled","");

}

newButton.addEventListener('click', function(e){
    e.preventDefault()
    guessField.removeAttribute("disabled");
    submitButton.removeAttribute("disabled");
    newButton.setAttribute("hidden", "true")
    count = 10
    guessRemaining.innerHTML = count
    guesses.innerHTML = 'Previous guess:'
    message.innerHTML = ''
    guessField.value = ''
}, false)