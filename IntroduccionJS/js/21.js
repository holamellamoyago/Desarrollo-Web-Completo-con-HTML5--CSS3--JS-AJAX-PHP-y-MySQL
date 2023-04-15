

// Arrow Functions
const sumar2 = (n1, n2) => console.log(n1+n2)


sumar2(5 ,10 );

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`)



aprendiendo('Javascript')



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
meses.forEach(mes => {
    if(mes =='Marzo'){
        console.log('Marzo si existe') 
    }
});

//SOME IDEAL PARA ARREGLOS DE OBJETOS
let resultado;
resultado = carrito.some(producto =>  producto.nombre === 'Celular')



// Reduce 
resultado = carrito.reduce((total, producto) => total + producto.precio, 0)



//Filter
resultado = carrito.filter(producto => producto.precio > 400 ),

resultado = carrito.filter(producto =>  producto.nombre != 'Celular')

console.log(resultado)
 

























