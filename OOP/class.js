class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return `${this.brand} ${this.model} (${this.year})`;
    }
}

const car = new Car('Toyota', 'Corolla', 2020);
console.log(car.getDetails()); // Output: "Toyota Corolla (2020)"