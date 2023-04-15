function Figure() {}

Figure.prototype.getArea = function() {
  return 0;
};
function Square(side) {
  this.side = side;
}

Square.prototype = Object.create(Figure.prototype);

Square.prototype.getArea = function() {
  return this.side * this.side;
};
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Figure.prototype);

Rectangle.prototype.getArea = function() {
  return this.width * this.height;
};
const square = new Square(5);
console.log('Площа квадрата: ', square.getArea()); 

const rectangle = new Rectangle(5, 10);
console.log('Площа прямокутника: ', rectangle.getArea()); 
