// funciones de typescript
function suma(a: number, b: number): number {
    return a + b;
}

let resultado: number = suma(1, 2);

console.log(resultado);

function saludar(nombre: string): string {
    return `Hola ${nombre}`;
}

let saludo: string = saludar('Isabel');

console.log(saludo);

function imprimir(): void {
    console.log('Imprimir');
}

imprimir();

// funcion usando never
function error(mensaje: string): never {
    throw new Error(mensaje);
}

// error('Error critico...');

// Parametros en typescript

// Parametros opcionales
function activar(quien: string, momento?: string): string {
    let mensaje: string;
    if (momento) {
        mensaje = `${quien}
        activo en la ${momento}`;
    }
    else {
        mensaje = `${quien} activo`;
    }
    return mensaje;
}

let mensaje1: string = activar('Nicolas');

console.log(mensaje1);

let mensaje2: string = activar('Nicolas', 'tarde');

console.log(mensaje2);

// Parametros por defecto
function activar2(quien: string, momento: string = 'mañana'): string {
    let mensaje: string;
    mensaje = `${quien} activo en la ${momento}`;
    return mensaje;
}

let mensaje3: string = activar2('Raul');

console.log(mensaje3);

let mensaje4: string = activar2('Raul', 'tarde');

console.log(mensaje4);

// tipo funcion
let grupo: (a: number, b: number) => number;

grupo = (a: number, b: number) => {
    return a + b;
}

console.log(grupo(5, 4));

// tipo literal
type especial = 1 | 2 | 3 | 4 | 5;

function manejarEspecial(valor: especial) {
    console.log(valor);
}

manejarEspecial(5);

console.log('Fin del archivo');








