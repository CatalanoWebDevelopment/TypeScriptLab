//# sourceMappingURL=4-classes.js.map

// Class
class Person {
    firstName: string;
    lastName: string;

    sayHello() {
        console.log("Hello", this.firstName)
    }
}

let parker : Person = new Person()
parker.firstName = "Parker"
parker.lastName = "Catalano"
parker.sayHello()

// Constructor
class Game {
    constructor(name: string, maker: string) {
        this.gameName = name;
        this.gameMaker = maker;
    }

    gameName: string
    gameMaker: string
}

let battleship = new Game('Battleship', 'Hasbro');

// Inheritance
class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: boolean;
    runs: boolean;
    topSpeed: number;
}

class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let Malibu: Automobile = new Automobile()
Malibu.isSelfDriving = false;
Malibu.topSpeed = 160;
Malibu.make = "Chevrolet";

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let MT10: Motorcycle = new Motorcycle()
MT10.easyToDoWheelie = true;
MT10.topSpeed = 220;
MT10.make = "Yamaha"

// Parameter Properties
class Store {
    constructor(public name: string, public city: string) {}
}

let ikea = new Store('Ikea', 'Fishers');

// Accessors
class Employee extends Person {
    private _salary: number;

    getSalary() : string {
        return this._salary.toString()
    }

    setSalary(newSalary: number) {
        this._salary = newSalary
    }
}

let parkerCatalano: Employee = new Employee()
parkerCatalano.setSalary(50000);
let salaryResult: string = parkerCatalano.getSalary()
console.log("The salary is:", salaryResult);