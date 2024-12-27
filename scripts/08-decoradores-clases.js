"use strict";
// Decorador para inspeccionar la clase
function InspeccionarClase(constructor) {
    console.log("Nombre de la clase:", constructor.name);
    console.log("Propiedades estáticas:", Object.getOwnPropertyNames(constructor));
    console.log("Métodos del prototipo:", Object.getOwnPropertyNames(constructor.prototype));
}
//Decorador para extender la clase con tipos genéricos
function ExtenderClase(BaseClase) {
    return class extends BaseClase {
        // Modificamos el constructor para recibir los parámetros correctamente
        constructor(...args) {
            console.log("ExtenderClase constructor args:", args);
            const [name, age, address, color] = args; // Desestructuramos los 4 parámetros, pero solo pasamos 3 a la clase base
            // Llamamos al constructor de la clase base con los 3 primeros parámetros
            super(name, age, address);
            // Asignamos el color, si no se pasa, usamos "red" como valor predeterminado
            this.color = color || "red";
        }
        saludar() {
            console.log(`Hola, soy una instancia de ${BaseClase.name}`);
        }
    };
}
// Clase extendida
const ExtendedCar = ExtenderClase(class Car {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getInformation() {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
});
// Instanciar la clase extendida
const car1 = new ExtendedCar("John", 30, "New York", "red"); // Color "red" es el cuarto argumento
console.log(car1.getInformation()); // "Name: John, Age: 30, Address: New York"
console.log(car1.color); // "red"
car1.saludar(); // "Hola, soy una instancia de Car"
// Decorador para extender una clase abstracta
// Decorador que agrega un nuevo método a la clase abstracta
function AgregarMetodoAClaseAbstracta(BaseClase) {
    return class extends BaseClase {
        // Agregamos un nuevo método 'saludar' a la clase extendida
        saludar() {
            console.log(`Hola desde el método saludar de ${BaseClase.name}`);
        }
    };
}
// Clase abstracta
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
// Decorador aplicado a la clase abstracta
const AnimalConMetodoExtendido = AgregarMetodoAClaseAbstracta(Animal);
// Subclase concreta que extiende la clase abstracta
class Perro extends AnimalConMetodoExtendido {
    hablar() {
        console.log(`${this.nombre} dice guau!`);
    }
}
// Instanciamos la subclase y usamos los métodos
const perro = new Perro("Rex");
perro.hablar(); // Rex dice guau!
perro.saludar(); // Hola desde el método saludar de Animal
