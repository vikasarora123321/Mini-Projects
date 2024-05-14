const height = document.querySelector('#heigth')
const weight = document.querySelector('#weight')
const submitButton = document.getElementById('submitButton')
const result = document.querySelector('#result')
const category = document.querySelector('#category')

function checkHeight(height) {
    if (height > 0)
        return true
    else return false
}
function checkWeight(weight) {
    if (weight > 0)
        return true
    else return false
}

function checkCategory(num) {
    if (num < 18.5)
        return 'UnderWeight'
    else if (num >= 18.5 && num <= 24.9)
        return 'Normal Weight'
    else if (num >= 25 && num <= 29.9)
        return 'Over Weight'
    else
        return 'Obesity'
}
submitButton.addEventListener('click', function (e) {
    e.preventDefault()
    if (checkHeight(height.value) && checkWeight(weight.value)) {
        result.value = parseFloat((weight.value) / (height.value / 100) ** 2).toFixed(1)
        category.value = checkCategory(result.value)
    }
    else {
        result.value = 'Enter the Valid Weight and Height'
    }
    

}, false)