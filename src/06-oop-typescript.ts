//Clases en TypeScript
class Person {
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
let person1 = new Person("John", 30, "New York");
console.log(person1.getInformation()); //Name: John, Age: 30, Address: New York

//clase usando solo parametros en el constructor
class Person2 {
    //Constructor
    constructor(private name: string, private age: number, private address: string) {
    }
    //Métodos
    public getInformation(): string {
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
    //Propiedades
    public name: string;
    private age: number;
    protected address: string;
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
let person3 = new Person3("John", 30, "New York");
console.log(person3.name); //John
//console.log(person3.age); //Error
//console.log(person3.address); //Error

// getter y setter
class Person4 {
    //Propiedades
    private _name: string;
    private _age: number;
    private _address: string;
    //Constructor
    constructor(name: string, age: number, address: string) {
        this._name = name;
        this._age = age;
        this._address = address;
    }
    //Métodos
    public get name(): string {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }
    public get age(): number {
        return this._age;
    }
    public set age(age: number) {
        this._age = age;
    }
    public get address(): string {
        return this._address;
    }
    public set address(address: string) {
        this._address = address;
    }
    public getInformation(): string {
        return `Name: ${this._name}, Age: ${this._age}, Address: ${this._address}`;
    }
}

//static

class Person5 {
    //Propiedades
    private static _counter: number = 0;
    //Constructor
    constructor() {
        Person5._counter++;
    }
    //Métodos
    public static getCounter(): number {
        return Person5._counter;
    }
}

//Instanciar la clase
let person5 = new Person5();
let person6 = new Person5();
let person7 = new Person5();
console.log(Person5.getCounter()); //3

//Herencia
class Employee extends Person {
    //Propiedades
    private salary: number;
    //Constructor
    constructor(name: string, age: number, address: string, salary: number) {
        super(name, age, address);
        this.salary = salary;
    }
    //Métodos
    public getInformation(): string {
        return `${super.getInformation()}, Salary: ${this.salary}`;
    }
}

//Instanciar la clase
let employee1 = new Employee("John", 30, "New York", 1000);
console.log(employee1.getInformation()); //Name: John, Age: 30, Address: New York, Salary: 1000

// clases abstractas

abstract class Figure {
    //Métodos
    abstract getArea(): number;
}


class Square extends Figure {
    //Propiedades
    private side: number;
    //Constructor
    constructor(side: number) {
        super();
        this.side = side;
    }
    //Métodos
    public getArea(): number {
        return this.side * this.side;
    }
}

//Instanciar la clase
let square1 = new Square(5);
console.log(square1.getArea()); //25

//Interfaces
interface PersonInterface {
    name: string;
    age: number;
    address: string;
    getInformation(): string;
}

class Person6 implements PersonInterface {
    //Propiedades
    name: string;
    age: number;
    address: string;
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
let person8 = new Person6("John", 30, "New York");
console.log(person8.getInformation()); //Name: John, Age: 30, Address: New York
