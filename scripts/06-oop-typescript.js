"use strict";
//Clases en TypeScript
class Person {
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
//Instanciar la clase
let person1 = new Person("John", 30, "New York");
console.log(person1.getInformation()); //Name: John, Age: 30, Address: New York
//clase usando solo parametros en el constructor
class Person2 {
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
//Instanciar la clase
let person2 = new Person2("John", 30, "New York");
console.log(person2.getInformation()); //Name: John, Age: 30, Address: New York
//visibilidad de los atributos
//public, private, protected
//public: se puede acceder desde cualquier parte
//private: solo se puede acceder desde la misma clase
//protected: se puede acceder desde la misma clase y las clases hijas
class Person3 {
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
//Instanciar la clase
let person3 = new Person3("John", 30, "New York");
console.log(person3.name); //John
//console.log(person3.age); //Error
//console.log(person3.address); //Error
// getter y setter
class Person4 {
    //Constructor
    constructor(name, age, address) {
        this._name = name;
        this._age = age;
        this._address = address;
    }
    //Métodos
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get address() {
        return this._address;
    }
    set address(address) {
        this._address = address;
    }
    getInformation() {
        return `Name: ${this._name}, Age: ${this._age}, Address: ${this._address}`;
    }
}
//static
class Person5 {
    //Constructor
    constructor() {
        Person5._counter++;
    }
    //Métodos
    static getCounter() {
        return Person5._counter;
    }
}
//Propiedades
Person5._counter = 0;
//Instanciar la clase
let person5 = new Person5();
let person6 = new Person5();
let person7 = new Person5();
console.log(Person5.getCounter()); //3
//Herencia
class Employee extends Person {
    //Constructor
    constructor(name, age, address, salary) {
        super(name, age, address);
        this.salary = salary;
    }
    //Métodos
    getInformation() {
        return `${super.getInformation()}, Salary: ${this.salary}`;
    }
}
//Instanciar la clase
let employee1 = new Employee("John", 30, "New York", 1000);
console.log(employee1.getInformation()); //Name: John, Age: 30, Address: New York, Salary: 1000
// clases abstractas
class Figure {
}
class Square extends Figure {
    //Constructor
    constructor(side) {
        super();
        this.side = side;
    }
    //Métodos
    getArea() {
        return this.side * this.side;
    }
}
//Instanciar la clase
let square1 = new Square(5);
console.log(square1.getArea()); //25
class Person6 {
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
//Instanciar la clase
let person8 = new Person6("John", 30, "New York");
console.log(person8.getInformation()); //Name: John, Age: 30, Address: New York
