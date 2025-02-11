class MathUtils {
    static PI = 3.14159;

    static add(n1, n2) {
        return n1 + n2;
    }
}

class Shape {
    getArea() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getArea() {
        return MathUtils.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

function printArea(shape) {
    console.log(shape.getArea())
}

const rectangle = new Rectangle(10, 5);
const circle = new Circle(7);

printArea(rectangle); // Output: 50
printArea(circle);    // Output: ~153.94
