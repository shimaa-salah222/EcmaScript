class Shape {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    if (this.constructor === Shape) {
      throw new Error("You cannot create an object directly from Shape. Use Rectangle or Square constructors.");
    }
  }

  calculateArea() {
    throw new Error("Area calculation not implemented");
  }

  calculateParameter() {
    throw new Error("Parameter calculation not implemented");
  }

  toString() {
    return `Shape: ${this.name} (${this.id}), area=${this.calculateArea()}, parameter=${this.calculateParameter()}`;
  }
}

export class Rectangle extends Shape {
  constructor(name, id, width, height) {
    super(name, id);
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculateParameter() {
    return 2 * (this.width + this.height);
  }
}

export class Square extends Shape {
  constructor(name, id, side) {
    super(name, id);
    this.side = side;
  }

  calculateArea() {
    return this.side * this.side;
  }

  calculateParameter() {
    return 4 * this.side;
  }
}

export class Circle extends Shape {
  constructor(name, id, radius) {
    super(name, id);
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  calculateParameter() {
    return 2 * Math.PI * this.radius;
  }
}