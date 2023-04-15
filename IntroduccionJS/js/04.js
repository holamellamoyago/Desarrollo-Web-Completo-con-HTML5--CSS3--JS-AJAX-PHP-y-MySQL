const tweet = 'hola Aprendiendo aprendidifndsndj jk dnskajdnskja ks nsdkan dska '; // String o cadena de texto 
const producto2 = 'Monitor HD ';

//Lengh es para la extension
console.log('Caracteres restantes: ', 250 - tweet.length );
console.log(producto2);

//IndexOf 
console.log('La palabra Aprendiendo esta en el puesto: ',tweet.indexOf('Aprendiendo'));
console.log('La palabra HD esta en el puesto: ', producto2.indexOf('HD'))

//Includes (retorna true o false)

console.log(tweet.includes('hola'))