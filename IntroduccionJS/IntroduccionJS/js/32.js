
//Async / Await

function descagarNuevosClientes(){
    return new Promise ( resolve => {
        console.log('Descargando clientes , espere. ');

        setTimeout( ()=> {
            resolve ('Los clientes fueron descargados')
        },3000 )

    });
}
function descagarUltimosPedidos(){
    return new Promise ( resolve => {
        console.log('Descargando pedidos , espere. ');

        setTimeout( ()=> {
            resolve ('Los pedidos fueron descargados')
        },3000 )

    });
}

async function app(){
    try {
        // const clientes = await descagarNuevosClientes();
        // const pedidos = await descagarUltimosPedidos();

        // console.log(clientes)
        // console.log(pedidos)
        // pagado = true
        
        // if (pagado==true){
        //     console.log('Continuamios con el pago en dicho sitio web')
        // } else{
        //     console.log('No se pudo completar el pago')
        // }


        const resultado = await Promise.all([descagarNuevosClientes(), descagarUltimosPedidos()]);
        console.log(resultado[0])
        console.log(resultado[1])


    } catch (error) {
        pagado = false
        console.log('No se pudo completar el pago')        
    }
}




app();








