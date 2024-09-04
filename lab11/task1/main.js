import { Rectangle } from "./shapes.js";
import { Square } from "./shapes.js";
import { Circle } from "./shapes.js";

const rect = new Rectangle("Rectangle", "R1", 3, 4);
const square = new Square("Square", "S1", 7);
const circle = new Circle("Circle", "C1", 10);

console.log(rect.toString());
console.log(square.toString());
console.log(circle.toString());

const rect2 = new Rectangle("Rectangle", "R2", 3, 4);
const square2 = new Square("Square", "S2", 7);
const circle2 = new Circle("Circle", "C2", 10);

console.log(rect2.toString());
console.log(square2.toString());
console.log(circle2.toString());

//const shape = new Shape("shape", "s1");