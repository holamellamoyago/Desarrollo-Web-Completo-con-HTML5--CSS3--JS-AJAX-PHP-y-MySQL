const producto = {
    nombreProducto : 'Monitor 20 pulgadas', 
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

//Es como unir dos objhetos pero sin modificar los dos originales
const nuevoProducto = { ...producto, ...medidas }

console.log(producto)
console.log(nuevoProducto)