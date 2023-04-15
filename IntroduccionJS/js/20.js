//Metodos de propiedad
const reproductor = {
    reproducir : function(id){
        console.log(`Reproducion cancion con el ID: ${id}`)
    },
    pausar : function(){
        console.log(`Pausando...`)
    },
    crearPlayList: function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlayList: function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Elimainando la cancion: ${id}`)
}


reproductor.reproducir(3840)
reproductor.pausar()
reproductor.borrarCancion(20)
reproductor.crearPlayList("Reguetoon")
reproductor.reproducirPlayList('nombre')





































