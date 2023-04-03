

//Programacion orientada a objetos POO


//Objeto literal
const producto = {
    nombre: 'tablet',
    precio: 500
}

// object constructor
function Cliente(nombre , apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function () {
    return `El cliente ${this.nombre} con apellidos ${this.apellido}`
}


function Producto(nombre , precio, disponibilidad){
    this.nombre = nombre;
    this.precio = precio;
    this.disponibilidad = disponibilidad;
}

//Crear funciones que solo se utilizan en uyn objeto en especifico 

Producto.prototype.formatearProducto = function () {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`
}

const producto2 = new Producto('Monitor Curvo de 40"' , 800, false);
const producto3 = new Producto('GoPro' , 400, true);
const producto4 = new Producto('Laptop' , 300, true);
const producto5 = new Producto('Teclado' , 50 , false);

const cliente = new Cliente('Yago', 'Otero')


console.log(cliente.formatearCliente())

console.log(producto2.formatearProducto())
console.log(producto3.formatearProducto())
console.log(producto4.formatearProducto())
console.log(producto5.formatearProducto())













