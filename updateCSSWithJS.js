const inputs = document.querySelectorAll('input')
console.log(inputs)

function handleChange(){
    const suffix = this.dataset.sizing || ""
    console.log(this.name, this.value)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach((input) => {
    input.addEventListener('change', handleChange)
    input.addEventListener('mousemove', handleChange)
})

// inputs.forEach((input) => {
//     input.addEventListener('change', (e) => {
//         console.log(input.value)
//     })
// })