// Arrays en typescript
let people: string[] = ['Isabel', 'Nicolas', 'Raul'];
let numbers: number[] = [1, 2, 3, 4, 5];
let booleans: boolean[] = [true, false, true];
let dates: Date[] = [new Date(), new Date()];
let anys: any[] = ['Hola', 123, true, new Date()];
let unknowns: unknown[] = ['Hola', 123, true, new Date()];
// Tuplas en typescript
let tupla: [string, number, boolean] = ['Hola', 123, true];
console.log(tupla);
console.log(tupla[0]);
console.log(tupla[1]);
console.log(tupla[2]);

// enum en typescript
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}

let colorFavorito: Color = Color.Verde;
console.log(colorFavorito);

// castear un tipo de dato
let mensaje: any = 'Hola';
let longitud: number = (<string>mensaje).length;

let numeroUno: unknown = 1;
let numeroUnoString: string = <string>numeroUno;
console.log(longitud);
console.log(typeof numeroUnoString);
