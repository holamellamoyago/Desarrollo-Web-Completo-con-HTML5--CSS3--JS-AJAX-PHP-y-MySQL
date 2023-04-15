// "use strict"; //Correr JavaScrcript en modo estricto

const producto = {
    nombreProducto : 'Monitor 20 pulgadas', 
    precio: 300,
    disponible: true
}

Object.seal(producto); //.freeze .seal siq ue permite modificar ya valores de las existentes
producto.precio = 'Nuevo precio';

delete producto.precio

console.log(producto)