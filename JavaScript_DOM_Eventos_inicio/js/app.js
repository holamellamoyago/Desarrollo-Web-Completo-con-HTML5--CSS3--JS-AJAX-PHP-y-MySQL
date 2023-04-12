// querySelector

const heading  = document.querySelector('a') //0 o 1 elementos
console.log(heading)
// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a')
enlaces[0].textContent = 'Enlace cambiado'
enlaces[0].href = 'https://google.com'
enlaces[0].classList.add('nueva-clase')
// enlaces[0].classList.remove('navegacion__enlace')
console.log(enlaces)

// getElementById

const heading2 = document.getElementById('heading')
console.log(heading2)

// Generar un nuevo enlace

const nuevoEnlace = document.createElement('A')

nuevoEnlace.href = 'Un-Nuevo-enlace.html'
nuevoEnlace.classList.add('navegacion__enlace')
nuevoEnlace.textContent = 'Nuevo Enlace'

// Agregarlo a la documento

const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace)


console.log(nuevoEnlace)

// Eventos

console.log(1)



window.addEventListener('load', imprimir)

window.onload = function() {
    console.log(3)
}

document.addEventListener('DOMContentLoaded', function(){ //Solo espera a que se descargue el HTML pero no imagenes
    console.log(4)
})

console.log(5)

function imprimir(){
    console.log(2)
}


window.onscroll = function(){
    console.log('Scrolling')
}























