//Objetos en typescript

let persona = {
    nombre: 'Nicolas',
    apellido: 'Villanueva',
    edad: 23
};

console.log(persona.nombre);

// Especificar el tipo de dato de un objeto
let persona2: {
    nombre: string,
    apellido: string,
    edad: number
} = {
    nombre: 'Nicolas',
    apellido: 'Villanueva',
    edad: 23
};

// Especificar el tipo de dato de un objeto usando type
type PersonaType = {
    nombre: string,
    apellido: string,
    edad: number
};

let persona3: PersonaType = {
    nombre: 'Nicolas',
    apellido: 'Villanueva',
    edad: 23
};