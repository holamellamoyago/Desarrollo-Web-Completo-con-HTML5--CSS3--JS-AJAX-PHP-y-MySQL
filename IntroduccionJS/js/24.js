
// For Loop

// for( let i = 0; i < 10; i++ ){
//     console.log(i)
// }

// for( let i = 0; i < 100; i++ ){
//     if(i % 2 ===0 ){ // EL PORTENCAJE SE UTILIZABA EN LAS DIVISIONES PARA SABER SI TERMINABA EN 0 !!! 
//         console.log(`El numero ${i} es par`)
//     } else{
//         console.log(` El numero: ${i} es impar`)
//     }
// }

const carrito = [
    { nombre: 'Monitor de 20 Pulgadas', precio: 20},
    { nombre: 'Television 50 pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200}

]

for(let i = 0; i < carrito.length; i++ ){
    console.log(carrito[i].nombre)
}

//While lopp

// let i = 1 //Indice

// while (i <= 100 ) { //Condicion

// if(i % 2 === 0){
//     console.log(`El numero ${i} es par`)
// } else {
//     console.log(`El numero ${i} es impar`)
// }

//     i++; //Incremento
// }



//Do while Loop

let i = 0;

do{
    
    console.log(i)

    i++;
} while( i < 100)








