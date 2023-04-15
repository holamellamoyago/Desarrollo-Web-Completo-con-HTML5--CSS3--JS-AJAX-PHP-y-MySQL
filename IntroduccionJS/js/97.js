

class Conductores{
    constructor(nombre,equipo,numero){
        this.nombre = nombre;
        this.equipo = equipo;
        this.numero = numero; 
    }
    formatarPiloto(){
        return `El piloto ${this.nombre} con el numero ${this.numero} es del equipo ${this.equipo}`
    }
}

class Figuritas extends Conductores{
    constructor(figurita, nombre, equipo, numero, precio){
        super(nombre, equipo, numero)
        this.figurita = figurita
        this.precio = precio
    }

    formatarFigurita(){
        return `La figurita ${this.figurita} del piloto ${this.nombre} del equipo ${this.equipo} con el numero ${this.numero} cuesta ${this.precio}`
    }

}








const conductores = new Conductores();
const conductores1 = new Conductores('Fernando Alonso' , 'Aston Martin', 33)

const  figuritas = new Figuritas()
const figuritas1 = new Figuritas('Cochecito' , 'Fernando Alonso' , 'Aston Martin', 33, 60 )





console.log(conductores1.formatarPiloto())
console.log(figuritas1.formatarFigurita())









