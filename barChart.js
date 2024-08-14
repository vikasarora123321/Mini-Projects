const data = [
    {
        name: 'Safety',
        ticketCount: 20
    },
    {
        name: 'Utility',
        ticketCount: 30
    },
    {
        name: 'Quality',
        ticketCount: 10
    },
    {
        name: 'Production',
        ticketCount: 50
    }
]

data.forEach((obj) => {
    const bar = document.createElement('div')
    bar.style.backgroundColor = "Black"
    bar.style.width = '20px'
    bar.style.height = `${obj.ticketCount} + px`
    document.querySelector(".chartContainer").appendChild(bar)
})