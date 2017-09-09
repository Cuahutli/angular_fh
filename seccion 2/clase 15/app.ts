// funciones de flecha

let miFunction = function (a){
    return a;
}

// lo que recibe (parametros) => lo que returna
let miFuncionF = a => a;

console.log(miFunction("Normal"));
console.log(miFuncionF("Flecha"));

let miFuncion2 = function(a:number, b:number){
    return a+b;
}

console.log(miFuncion2(2,3));

let miFuncionF2 = ( a:number, b:number)  =>  a+b;

console.log(miFuncionF2(2,4));

let miFuncion3 = function(nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncionF3 = (nombre:string) => {
    nombre= nombre.toUpperCase();
    return nombre;
}

console.log(miFuncion3("cuahutli"));
console.log(miFuncionF3("Cuahutli"));

let nombre = "Pedro";
let hulk = {
    nombre: "Hulk",
    smash(){
        setTimeout( () =>console.log(this.nombre + " Smash!!"), 1500);
    }
}

hulk.smash();