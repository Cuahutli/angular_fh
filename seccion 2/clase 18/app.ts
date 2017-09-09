interface Xmen{
    nombre:string,
    // nombreXmen:string,
    poder:string,
}

function enviarMision( xmen:Xmen ){
    console.log("Enviando a " + xmen.nombre);
};

function enviarCuartel( xmen:Xmen ){
    console.log("Enviando a " + xmen.nombre);
};


let wolverine:Xmen = {
    nombre: "Wolverine",
    poder: "Regeneración"
};

enviarMision(wolverine);
enviarCuartel(wolverine);