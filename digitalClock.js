const time = document.querySelector('#time')


setInterval(() => {
    const date = new Date()
    console.log(date.toLocaleTimeString())
     time.innerHTML =  date.toLocaleTimeString()
}, 1000);