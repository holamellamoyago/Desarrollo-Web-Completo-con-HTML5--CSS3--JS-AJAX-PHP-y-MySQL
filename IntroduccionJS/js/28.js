// Classes

class Producto {
    constructor(nombre, precio, disponibilidad){
        this.nombre = nombre;
        this.precio = precio;
        this.disponibilidad = disponibilidad
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de $${this.precio}`
    }

    obtenerPrecio(){
        console.log(this.precio)
    }

}

const producto = new Producto();
const producto2 = new Producto('Monitor Curvo de 40"' , 900, false);
const producto3 = new Producto('GoPro' , 400, true);



//Herencia de datos
class Libro extends Producto{
    constructor(nombre, precio, isbn ){ 
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearLibro(){
        return `${super.formatearProducto()} mas tiene un ISBN de ${this.isbn}`
    }

    obtenerPrecio(){
        super.obtenerPrecio()
        console.log('Y si hay en existencia ')
    }

}

const libro = new Libro('JavaScript la revolucion', 600, '2313445313231321' );
const libro2 = new Libro('El senor de los anillos', 800 , '700')



console.log(libro.formatearLibro())
console.log(libro.obtenerPrecio())
console.log(producto2.formatearProducto())
