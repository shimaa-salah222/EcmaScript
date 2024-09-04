class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
    calculateArea() {
      return this.width * this.height;
    }
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  
    toString() {
      return `Width: ${this.width}, Height: ${this.height}, Area: ${this.calculateArea()}, Perimeter: ${this.calculatePerimeter()}`;
    }
  }
  Rectangle.prototype.count = 0;
  
  Rectangle.prototype.getCount = function() {
    return this.count;
  };
  
  const rect = new Rectangle(5, 10);
  
  Rectangle.prototype.count++;

  console.log(rect.toString());
  
  console.log(`Number of created objects: ${Rectangle.prototype.count}`);
  
  const rect2 = new Rectangle(3, 7);
  
  Rectangle.prototype.count++;
  
  console.log(rect2.toString());
  
  console.log(`Number of created objects: ${Rectangle.prototype.count}`);

  const rect3 = new Rectangle(10, 3);
  
  Rectangle.prototype.count++;
  
  console.log(rect3.toString());
  
  console.log(`Number of created objects: ${Rectangle.prototype.count}`);