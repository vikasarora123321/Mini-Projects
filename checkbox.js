
const inputs = document.querySelectorAll("input[type = 'checkbox']")


function handleCheckbox(e){
    console.log(e)
    const point = document.querySelector("p")
    if(this.checked === true){
        console.log(this)
        point.classList.add("strike")
    }
    if(this.checked === false){
        console.log(this)
        point.classList.remove("strike")
    }
    console.log(point.classList)
}


inputs.forEach((input) => {
    input.addEventListener("click", handleCheckbox)
})




