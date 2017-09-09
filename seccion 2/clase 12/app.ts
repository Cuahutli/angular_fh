function getNombre(){
    return "Fernando";
}

let nombre:string = "Juan";
let apellido:string = "Perez";

let edad:number = 32;

// let texto = "Hola Mundo " + nombre + " " + apellido +  " (" + edad + ")";
//template literal
//let texto = `Hola, ${ nombre } ${ apellido } (${ edad })`;

// string multilinea fácil con template literal
let texto = `Hola,
${ nombre } 
${ apellido } 
(${ edad })`;

// lo que está entre {} es código javascript y se evalua
let texto2:string = `${1+2}`

let texto3:string = `${getNombre()}`
console.log(texto);
console.log(texto2);
console.log(texto3);