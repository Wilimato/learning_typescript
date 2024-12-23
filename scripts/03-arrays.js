"use strict";
// Arrays en typescript
let people = ['Isabel', 'Nicolas', 'Raul'];
let numbers = [1, 2, 3, 4, 5];
let booleans = [true, false, true];
let dates = [new Date(), new Date()];
let anys = ['Hola', 123, true, new Date()];
let unknowns = ['Hola', 123, true, new Date()];
// Tuplas en typescript
let tupla = ['Hola', 123, true];
console.log(tupla);
console.log(tupla[0]);
console.log(tupla[1]);
console.log(tupla[2]);
// enum en typescript
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
let colorFavorito = Color.Verde;
console.log(colorFavorito);
// castear un tipo de dato
let mensaje = 'Hola';
let longitud = mensaje.length;
let numeroUno = 1;
let numeroUnoString = numeroUno;
console.log(longitud);
console.log(typeof numeroUnoString);
