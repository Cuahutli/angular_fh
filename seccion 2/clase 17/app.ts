// promesas
// nos da la posibilidad de ejecutar una tarea, una fucion o un código cuando una tarea asincrona es terminada

// resolve la función que se hará si en la promesa sale todo funciona bien
// reject  la funcion que se hará si la promesa regresa algun error
let prom1 = new Promise( function( resolve, reject ){
    setTimeout( () => {
        console.log("Promesa Terminada");

        // termina bien
        //resolve();
        
        // da error
        reject();
    }, 1500);
});

console.log("Paso 1");
// then recibe 2 parametros, la funcion resolve y la funcion reject
prom1.then( function(){
    console.log("Ejecutarme si todo sale bien");
}, function(){
    console.error("Ejecutarme si algo sale mal");
});

console.log("paso 2");