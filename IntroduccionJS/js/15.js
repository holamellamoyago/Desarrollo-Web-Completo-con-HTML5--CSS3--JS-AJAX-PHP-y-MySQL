//Array methods

const meses = ['Enero', 'Febrero' , 'Marzo' , 'Abril' , 'mayo']

const carrito = [
    { nombre: 'Monitor de 20 Pulgadas', precio: 20},
    { nombre: 'Television 50 pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Portatil', precio: 800},
    { nombre: 'Monitor de 20 Pulgadas', precio: 20},
    { nombre: 'Monitor de 20 Pulgadas', precio: 20},
]

//forEach
meses.forEach(function(mes){
    if(mes =='Marzo'){
        console.log('Marzo si existe') 
    } else {console.log('Marzo no existe')}
});

//Includes
let resultado = meses.includes('Marzo')

//SOME IDEAL PARA ARREGLOS DE OBJETOS

resultado = carrito.some(function(producto){
    return producto.nombre === 'celular'
})

// Reduce 

resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0)

//Filter
resultado = carrito.filter(function(producto){
    return producto.precio > 400
}),

resultado = carrito.filter(function(producto){
    return producto.nombre != 'Celular'
})





console.log(resultado)

