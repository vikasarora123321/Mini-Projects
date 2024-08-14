
window.addEventListener("keydown", (e) => {
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    if(Number(audio) === 0) return 
    audio.currentTime = 0
    audio.play()
    key.classList.add('playing')
    console.log(e.keyCode)
})

function removeTransition(e){
    this.classList.remove('playing')
}

const keys = document.querySelectorAll(".key")
keys.forEach( key => {
    key.addEventListener("transitionend",removeTransition)
});