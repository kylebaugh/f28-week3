let movieForm = document.querySelector('form')
let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')

const color = () => {
    alert('Qui-gon lightsaber green')
}

const place = () => {
    alert('"My spot" in American Fork Canyon')
}

const ritual = () => {
    alert('Cracking open my monster every morning')
}

const submitForm = (event) => {
event.preventDefault()

    alert('Incorrect. They are all the best LOTR movie.')
}

colorBtn.addEventListener('click', color)
placeBtn.addEventListener('click', place)
ritualBtn.addEventListener('click', ritual)
movieForm.addEventListener('submit', submitForm)