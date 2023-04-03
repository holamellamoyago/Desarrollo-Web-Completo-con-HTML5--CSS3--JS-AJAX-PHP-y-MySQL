
const usuarioAuntenticado = new Promise( (resolve, reject) => {
    const auth = false;

    if(auth){
        resolve('Usuario autenticado'); //El promis se cumple
    } else{
        reject('No se pudo iniciar sesion'); //El promis NO se cumple
    }
})

usuarioAuntenticado
    .then( resultado => {console.log(resultado)})
    .catch( error =>{console.log(error) })

console.log(usuarioAuntenticado)


//En los Promises existen 3 valores
//Pending : No se ha cumplido pero tampoco se ha rechazado 
//Fullfield : Ya se cumplio
//rejected : Se ha rechazado o no se pudo cumplir















