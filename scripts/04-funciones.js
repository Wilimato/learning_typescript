"use strict";
// funciones de typescript
function suma(a, b) {
    return a + b;
}
let resultado = suma(1, 2);
console.log(resultado);
function saludar(nombre) {
    return `Hola ${nombre}`;
}
let saludo = saludar('Isabel');
console.log(saludo);
function imprimir() {
    console.log('Imprimir');
}
imprimir();
// funcion usando never
function error(mensaje) {
    throw new Error(mensaje);
}
// error('Error critico...');
// Parametros en typescript
// Parametros opcionales
function activar(quien, momento) {
    let mensaje;
    if (momento) {
        mensaje = `${quien}
        activo en la ${momento}`;
    }
    else {
        mensaje = `${quien} activo`;
    }
    return mensaje;
}
let mensaje1 = activar('Nicolas');
console.log(mensaje1);
let mensaje2 = activar('Nicolas', 'tarde');
console.log(mensaje2);
// Parametros por defecto
function activar2(quien, momento = 'mañana') {
    let mensaje;
    mensaje = `${quien} activo en la ${momento}`;
    return mensaje;
}
let mensaje3 = activar2('Raul');
console.log(mensaje3);
let mensaje4 = activar2('Raul', 'tarde');
console.log(mensaje4);
// tipo funcion
let grupo;
grupo = (a, b) => {
    return a + b;
};
console.log(grupo(5, 4));
function manejarEspecial(valor) {
    console.log(valor);
}
manejarEspecial(5);
console.log('Fin del archivo');
