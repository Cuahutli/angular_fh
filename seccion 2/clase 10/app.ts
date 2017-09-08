// en todo lugar donde se usa var ahora se usa let
// para definir una constante es const, y se escriben por convencion en mayúsculas
// las constantes deben ser definidas en el momento que son creadas;

let mensaje = "hola";
const OPCIONES = "toda";
if (true){
    let mensaje = "adios";
    const OPCIONES = "todas dentro";
}

console.log(mensaje);