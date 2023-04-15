//Arreglos o arrays

const numeros = [10,20,30,40,50]


const arreglo = ['Hola' , 10 ,true , 'si' , null , {nombre:'Juan', trabajo:'Programador'}, [1,2,3]]



numeros.push(60, 70) //Agregar al final del elemento
numeros.unshift(-10, -20,-30) //Agregar al inicio del arreglo 

console.table(numeros)

const meses = ['Enero', 'Febrero' , 'Marzo' , 'Abril' , 'mayo']

// meses.pop() //Elimina el final del elemento
// meses.shift() //Elimina el primer elemento

// meses.splice(2, 1)
// console.table(meses)

//Rest Operator o Spread Operator

const nuevoArray = [...meses, 'junio', 'julio']
console.log(nuevoArray)













//Acceder a los valores de un arreglo
// console.log(numeros[0])
// console.log(numeros[1])
// console.log(numeros[2])
// console.log(numeros[3])
// console.log(numeros[4])

//Conocer la extension de un arreglo

// numeros.forEach(function(numero){
//     console.log(numero)
// })



// console.log(meses.length)

// console.table(arreglo)
