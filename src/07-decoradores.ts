//Decoradores en TypeScript
//Un decorador es una función que se ejecuta cuando se define una clase

//decorador
function Logger(target: Function) {
    console.log("Logger: " + target);
}

//decorador
function Logger2(target: Function) {
    console.log("Logger2: " + target);
}

// uso de decoradores
@Logger
@Logger2
class Personas {
    //Propiedades
    private name: string;
    private age: number;
    private address: string;
    //Constructor
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    //Métodos
    public getInformation(): string {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
}

//Instanciar la clase
let personas = new Personas("John", 30, "New York");
console.log(personas.getInformation());

//Decoradores de métodos
//Un decorador de método se ejecuta cuando se define un método
function MethodLogger(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("MethodLogger: " + propertyKey);
    console.log("target: " + target);
    console.log("descriptor: " + descriptor);
}

class Personas2 {
    //Propiedades
    private name: string;
    private age: number;
    private address: string;
    //Constructor
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    //Métodos
    //No se puede resolver la signatura de elemento Decorator de un método cuando se llama como expresión.
    //   El runtime invocará el decorador con argumentos 2, pero el decorador espera 3.ts(1241)
    //   07-decoradores.ts(40, 57): No se proporcionó ningún argumento para "descriptor".
    @MethodLogger 
    public getInformation(): string {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
}
//Instanciar la clase
let personas2 = new Personas2("John", 30, "New York");
console.log(personas2.getInformation());

//Decoradores de propiedades
//Un decorador de propiedad se ejecuta cuando se define una propiedad
function PropertyLogger(target: any, propertyKey: string) {
    console.log("PropertyLogger: " + propertyKey);
    console.log("target: " + target);
}

function PropertyLogger2() {
    return PropertyLogger;
}

class Personas3 {
    //Propiedades
    @PropertyLogger2()
    private name: string;
    private age: number;
    private address: string;
    //Constructor
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    //Métodos
    public getInformation(): string {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
}
//Instanciar la clase
let personas3 = new Personas3("John", 30, "New York");
console.log(personas3.getInformation());
