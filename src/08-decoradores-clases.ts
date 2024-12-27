// Decorador para inspeccionar la clase
function InspeccionarClase(constructor: Function) {
    console.log("Nombre de la clase:", constructor.name);
    console.log("Propiedades estáticas:", Object.getOwnPropertyNames(constructor));
    console.log("Métodos del prototipo:", Object.getOwnPropertyNames(constructor.prototype));
}

//Decorador para extender la clase con tipos genéricos
function ExtenderClase<Teta extends { new (...args: any[]): object }>(BaseClase: Teta) {
    return class extends BaseClase {
        public color: string;

        // Modificamos el constructor para recibir los parámetros correctamente
        constructor(...args: any[]) {
            console.log("ExtenderClase constructor args:", args);
            const [name, age, address, color] = args;  // Desestructuramos los 4 parámetros, pero solo pasamos 3 a la clase base

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
const ExtendedCar = ExtenderClase(
    class Car {
        public name: string;
        public age: number;
        public address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        public getInformation(): string {
            return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
        }
    }
);

// Instanciar la clase extendida
const car1 = new ExtendedCar("John", 30, "New York", "red");  // Color "red" es el cuarto argumento
console.log(car1.getInformation());  // "Name: John, Age: 30, Address: New York"
console.log(car1.color);  // "red"
car1.saludar();  // "Hola, soy una instancia de Car"


// Decorador para extender una clase abstracta

// Decorador que agrega un nuevo método a la clase abstracta
function AgregarMetodoAClaseAbstracta<T extends { new (...args: any[]): {} }>(BaseClase: T) {
    return class extends BaseClase {
        // Agregamos un nuevo método 'saludar' a la clase extendida
        saludar() {
            console.log(`Hola desde el método saludar de ${BaseClase.name}`);
        }
    };
}

// Clase abstracta
abstract class Animal {
    constructor(public nombre: string) {}

    // Método abstracto que debe ser implementado en las subclases
    abstract hablar(): void;
}

// Decorador aplicado a la clase abstracta
const AnimalConMetodoExtendido = AgregarMetodoAClaseAbstracta(Animal as { new (...args: any[]): Animal });

// Subclase concreta que extiende la clase abstracta
class Perro extends AnimalConMetodoExtendido {
    hablar() {
        console.log(`${this.nombre} dice guau!`);
    }
}

// Instanciamos la subclase y usamos los métodos
const perro = new Perro("Rex");
perro.hablar();   // Rex dice guau!
perro.saludar();  // Hola desde el método saludar de Animal

