"use strict";
//Decoradores en TypeScript
//Un decorador es una función que se ejecuta cuando se define una clase
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//decorador
function Logger(target) {
    console.log("Logger: " + target);
}
//decorador
function Logger2(target) {
    console.log("Logger2: " + target);
}
// uso de decoradores
let Personas = class Personas {
    //Constructor
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    //Métodos
    getInformation() {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
};
Personas = __decorate([
    Logger,
    Logger2,
    __metadata("design:paramtypes", [String, Number, String])
], Personas);
//Instanciar la clase
let personas = new Personas("John", 30, "New York");
console.log(personas.getInformation());
//Decoradores de métodos
//Un decorador de método se ejecuta cuando se define un método
function MethodLogger(target, propertyKey, descriptor) {
    console.log("MethodLogger: " + propertyKey);
    console.log("target: " + target);
    console.log("descriptor: " + descriptor);
}
class Personas2 {
    //Constructor
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    //Métodos
    //No se puede resolver la signatura de elemento Decorator de un método cuando se llama como expresión.
    //   El runtime invocará el decorador con argumentos 2, pero el decorador espera 3.ts(1241)
    //   07-decoradores.ts(40, 57): No se proporcionó ningún argumento para "descriptor".
    getInformation() {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
}
__decorate([
    MethodLogger,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], Personas2.prototype, "getInformation", null);
//Instanciar la clase
let personas2 = new Personas2("John", 30, "New York");
console.log(personas2.getInformation());
//Decoradores de propiedades
//Un decorador de propiedad se ejecuta cuando se define una propiedad
function PropertyLogger(target, propertyKey) {
    console.log("PropertyLogger: " + propertyKey);
    console.log("target: " + target);
}
function PropertyLogger2() {
    return PropertyLogger;
}
class Personas3 {
    //Constructor
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    //Métodos
    getInformation() {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
}
__decorate([
    PropertyLogger2(),
    __metadata("design:type", String)
], Personas3.prototype, "name", void 0);
//Instanciar la clase
let personas3 = new Personas3("John", 30, "New York");
console.log(personas3.getInformation());
