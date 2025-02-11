class Employee {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    calculateSalary() {

    }
}

class FullTimeEmployee extends Employee{
    constructor(name, baseSalary, bonus) {
        super(name);
        this.baseSalary = baseSalary;
        this.bonus = bonus;
    }

    calculateSalary() {
        return this.baseSalary + this.bonus;
    }
}

class PartTimeEmployee extends Employee {
    constructor(name, hourlyWage, hoursWorked) {
        super(name);
        this.hourlyWage = hourlyWage;
        this.hoursWorked = hoursWorked;
    }

    calculateSalary() {
        return this.hourlyWage * this.hoursWorked;
    }
}

const fullTime = new FullTimeEmployee('Alice', 5000, 1000);
const partTime = new PartTimeEmployee('Bob', 20, 80);

console.log(`${fullTime.getName()}: ${fullTime.calculateSalary()}`); // Output: 6000
console.log(partTime.calculateSalary()); // Output: 1600