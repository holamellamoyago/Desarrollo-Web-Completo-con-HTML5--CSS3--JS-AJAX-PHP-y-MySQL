
// quierySelector

const heading = document.querySelector('#heading') //0 o 1 elementos 
heading.textContent = 'Nuevo Heading'
heading.classList.add('Nueva--clase')
console.log(heading)

// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a') // de 0 a todos los que concuerden
enlaces[0].textContent = 'Nuevo Texto para enlaces'
enlaces[0].href = 'https://google.com'
enlaces[0].classList.add('nueva--clase')
// enlaces[0].classList.remove('navegacion__enlace')
console.log(enlaces[0])

// getElementById
const heading2 = document.getElementById('heading')
console.log(heading2)

// Generar un nuevo enlace.

























