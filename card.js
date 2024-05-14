let profilePhoto
let firstName
let lastName

document.body.style.backgroundColor = 'black'

const xhr = new XMLHttpRequest()
const newUrl = "https://randomuser.me/api/"

xhr.onreadystatechange = function () {
    console.log(xhr.readyState)
    if (xhr.readyState === 4) {
        // const data = this.responseText
        // console.log(typeof data)  // => data received is in string format thats why we cannot use access object key - value directly

        const data = JSON.parse(this.responseText)  //=> convert string to object format or JSON format
        // console.log(data.results[0].name.first)
        profilePhoto = data.results[0].picture.medium
        firstName = data.results[0].name.first
        lastName = data.results[0].name.last

        createCard(profilePhoto, firstName, lastName)

    }
}
xhr.open('GET', newUrl)
xhr.send()



function createCard(profilePhoto, firstName, lastName) {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const h1 = document.createElement('h2')
    div.style.border = '2px solid white'
    div.style.width = '300px'
    div.style.height = '150px'
    div.style.display = 'flex'
    img.src = profilePhoto
    img.style.border = '2px solid white'
    img.style.width = '80px'
    img.style.height = '80px'
    img.style.borderRadius = '50px'
    img.style.marginTop = 'auto'
    img.style.marginBottom = 'auto'
    img.style.marginRight = '20px'
    img.style.marginLeft = '10px'
    h1.innerHTML = firstName + lastName
    h1.style.color = 'white'
    h1.style.width = '100px'


    // document.body.prepend(h1)
    // document.body.prepend(img)
    document.body.prepend(div)
    div.appendChild(h1)
    div.prepend(img)
    //console.log(document.body.children)


    //document.body.card.appendChild(h1)
}
