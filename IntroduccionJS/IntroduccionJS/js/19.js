// function sumar(n1, n2){
//     return n1 + n2
// }

// const resultado = sumar(2, 3);

// console.log(resultado)

let total = 0;
let precio = 0;

function agregarCarrito(precio){

    return total += precio;
}

function calcularImpuesto(total){
    return 1.21 * total;
}

function calcularIva(total , precio){
    return total - precio;
}

total = agregarCarrito(200);
total = agregarCarrito(400);
total = agregarCarrito(600);

precio = agregarCarrito(precio)


console.log(total)

const totalAPagar = calcularImpuesto(total);
console.log(`El total a pagar con IVA es de: $${totalAPagar} `)

const IvaAPagar = calcularIva(total , precio);
console.log(IvaAPagar)






















