let avenger = {
    nombre: "Steve",
    clave: "Capitan América",
    poder: "Droga"
}

// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;

// es lo mismo que lo de arriba;
// si pongo nombre:string en ts normal es el tipo de dato, en una destructuracion es un alias
let { nombre, clave, poder } = avenger;
console.log( nombre, clave, poder);


let avengers:string[] = ["Thor", "Steve", "Tony"];

// en los arreglos la destructuración es secuancial
let [ thor, capi, ironman] = avengers;

console.log(thor, capi, ironman);