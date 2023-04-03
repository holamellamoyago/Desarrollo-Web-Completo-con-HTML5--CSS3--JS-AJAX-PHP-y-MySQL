const carrito = [
    { nombre: 'Monitor de 20 Pulgadas', precio: 20},
    { nombre: 'Television 50 pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Portatil', precio: 800},

]

//ForEach

carrito.forEach(producto => console.log(producto));

// map
const arreglo2 = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

console.log(arreglo2)









