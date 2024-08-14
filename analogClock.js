
const secondHand = document.querySelector(".secondHand")
const minuteHand = document.querySelector(".minuteHand")
const hourHand = document.querySelector(".hourHand")
const hand = document.querySelector(".hand")

function setDate(){
    const now = new Date();
    const second = now.getSeconds();

    const secondDegree = ((second/60)*360) - 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`

    const minute = now.getMinutes();
    const minuteDegree = ((minute/60)*360) - 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`

    const hour = now.getHours();
    const hourDegree = ((hour/12)*360) - 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(setDate, 1000)