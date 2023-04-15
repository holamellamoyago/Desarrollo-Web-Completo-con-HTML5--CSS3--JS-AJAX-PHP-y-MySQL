const producto = {
    nombreProducto : 'Monitor 20 pulgadas', 
    precio: 300,
    disponible: true
}

//Forma anterior de hacerlo 
// const precioProducto = producto.precio
// const nombreProducto = producto.nombreProducto


// console.log(precioProducto);
// console.log(nombreProducto);

//Destructuring  -> Extraer valor en un solo paso. 
const {precio, nombreProducto} = producto;
console.log(precio)
console.log(nombreProducto)
