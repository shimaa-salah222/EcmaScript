function Shape(width, height) {
  this.width = width;
  this.height = height;
  if (this.constructor === Shape) {
    throw new Error("You cannot create an object directly from Shape. Use Rectangle or Square constructors.");
  }
}
Shape.prototype = Object.create(null);
Shape.prototype.constructor = Shape;

 let shapeCount=0;

function Rectangle(width,height) {
  Shape.call(this);
  this.width = width;
  this.height = height;
  shapeCount ++;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.calculateArea = function() {
  return this.width * this.height;
};

Rectangle.prototype.calculatePerimeter = function() {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.toString = function() {
  return `Rectangle: Width: ${this.width}, Height: ${this.height}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`;
};


// Square constructor
function Square(side) {
  Rectangle.call(this, side, side);
  shapeCount ++;
}

Square.prototype = Object.create(Rectangle.prototype);
Square.prototype.constructor = Square;

Square.prototype.calculateArea = function() {
  return this.width * this.width;
};

Square.prototype.calculatePerimeter = function() {
  return 4 * this.width;
};


Square.prototype.toString = function() {
  return `Square: Side: ${this.width}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`;
};

const rect = new Rectangle(5, 10);

const square = new Square(5);

const rect2 = new Rectangle(3, 4);

const square2 = new Square(6);

const rect3 = new Rectangle(3, 4);

const square3 = new Square(6);


//const shape =new Shape();

console.log(rect.toString());
console.log(square.toString());
console.log(rect2.toString());
console.log(square2.toString());
console.log(rect3.toString());
console.log(square3.toString());

console.log(`Total shape count: ${shapeCount}`);