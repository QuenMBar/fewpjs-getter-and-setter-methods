// Add your Circle class here

class Circle {
    constructor(rad) {
        this.radius = rad;
    }

    set diameter(di) {
        this.radius = di / 2;
    }

    set circumference(cir) {
        this.diameter = cir / Math.PI;
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI);
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return Math.PI * this.diameter;
    }

    get area() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
