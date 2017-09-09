// funciones de flecha
var miFunction = function (a) {
    return a;
};
// lo que recibe (parametros) => lo que returna
var miFuncionF = function (a) { return a; };
console.log(miFunction("Normal"));
console.log(miFuncionF("Flecha"));
var miFuncion2 = function (a, b) {
    return a + b;
};
console.log(miFuncion2(2, 3));
var miFuncionF2 = function (a, b) { return a + b; };
console.log(miFuncionF2(2, 4));
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncionF3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFuncion3("cuahutli"));
console.log(miFuncionF3("Cuahutli"));
var nombre = "Pedro";
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " Smash!!"); }, 1500);
    }
};
hulk.smash();
