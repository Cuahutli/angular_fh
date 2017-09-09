var avenger = {
    nombre: "Steve",
    clave: "Capitan América",
    poder: "Droga"
};
// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;
// es lo mismo que lo de arriba;
// si pongo nombre:string en ts normal es el tipo de dato, en una destructuracion es un alias
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(nombre, clave, poder);
var avengers = ["Thor", "Steve", "Tony"];
// en los arreglos la destructuración es secuancial
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(thor, capi, ironman);
