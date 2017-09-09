class Avenger {
    nombre:string;
    equipo:string;
    nombreReal:string;

    puedePelear:boolean = false;
    peleasGanadas:number = 0;

    constructor(nombre:string,
                equipo:string,
                nombreReal:string){
        console.log("Se ejecutó el constructor");
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

}


let antman:Avenger = new Avenger("Antman", "Cap", "Scoot Lang");

console.log(antman);