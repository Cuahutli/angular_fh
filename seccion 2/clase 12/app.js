function getNombre() {
    return "Fernando";
}
var nombre = "Juan";
var apellido = "Perez";
var edad = 32;
// let texto = "Hola Mundo " + nombre + " " + apellido +  " (" + edad + ")";
//template literal
//let texto = `Hola, ${ nombre } ${ apellido } (${ edad })`;
// string multilinea fácil con template literal
var texto = "Hola,\n" + nombre + " \n" + apellido + " \n(" + edad + ")";
// lo que está entre {} es código javascript y se evalua
var texto2 = "" + (1 + 2);
var texto3 = "" + getNombre();
console.log(texto);
console.log(texto2);
console.log(texto3);
