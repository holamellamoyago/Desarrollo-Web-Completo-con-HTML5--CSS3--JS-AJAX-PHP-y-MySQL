// querySelector

// const heading  = document.querySelector('a') //0 o 1 elementos
// console.log(heading)
// querySelectorAll
// const enlaces = document.querySelectorAll('.navegacion a')
// enlaces[0].textContent = 'Enlace cambiado'
// enlaces[0].href = 'https://google.com'
// enlaces[0].classList.add('nueva-clase')
// enlaces[0].classList.remove('navegacion__enlace')
// console.log(enlaces)

// getElementById

// const heading2 = document.getElementById('heading')
// console.log(heading2)

// Generar un nuevo enlace

// const nuevoEnlace = document.createElement('A')

// nuevoEnlace.href = 'Un-Nuevo-enlace.html'
// nuevoEnlace.classList.add('navegacion__enlace')
// nuevoEnlace.textContent = 'Nuevo Enlace'

// Agregarlo a la documento

// const navegacion = document.querySelector('.navegacion')
// navegacion.appendChild(nuevoEnlace)


// console.log(nuevoEnlace)

// Eventos

// console.log(1)



// window.addEventListener('load', imprimir)

// window.onload = function() {
//     console.log(3)
// }

// document.addEventListener('DOMContentLoaded', function(){ //Solo espera a que se descargue el HTML pero no imagenes
//     console.log(4)
// })

// console.log(5)

// function imprimir(){
//     console.log(2)
// }


// window.onscroll = function(event){
//     console.log(event)
// }

// Seleccionar elementos y darles un evento 

// const btnEnviar = document.querySelector('.boton--primario')
// btnEnviar.addEventListener('click' , function(event){
//     console.log(event.target)
//     console.log(event.preventDefault())

//     //Validar un formulario

//     console.log('Enviando formulario')
// })







// Eventos de los inputs o TextArea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario')


nombre.addEventListener('input',leertexto)
email.addEventListener('input',leertexto)
mensaje.addEventListener('input',leertexto)


// El evento de submit
formulario.addEventListener('submit' , function(event){
    event.preventDefault()

    // Validar el formulario

    const {nombre , email, mensaje} = datos

    if(nombre === ''|| email ==='' || mensaje===''){

        mostratAlerta('Todos los campos son obligatorios', true)
        
        return
    }
    // Enviar el formulario
        mostratAlerta('Se ha enviado correctamente')
})




function leertexto(event) {
    // console.log(event.target.value)

    datos[event.target.id] = event.target.value;

    // console.log(datos)

}


function mostratAlerta(mensaje , error = null ){
    const alerta = document.createElement('P')
    alerta.textContent = mensaje

    if(error){
        alerta.classList.add('error')
    }else {
        alerta.classList.add('enviado')
    }

    formulario.appendChild(alerta)

    setTimeout(() => {
        alerta.remove()
    }, 3000)


}
    
//Muestra un error en la pantalla

// Muestra que se ha enviado en la pantalla


























