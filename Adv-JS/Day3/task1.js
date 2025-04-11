function Shape(w, h) {

    if (this.constructor === Shape) {
        throw new Error("Cannot instantiate abstract class Shape directly.");
    }

    Object.defineProperties(this, {
      "width": {
        value: w,
      },
      "height": {
        value: h,
      },
      "area": {
        value: function () {
          return this.width * this.height
        },
      },
      "perimeter": {
        value: function () {
          return 2 * (this.width + this.height)
        },
      },
    })
}

Object.defineProperties(Shape.prototype, {
    "toString": {
      value: function () {
        return `${this.constructor.name}, width: ${this.width}, height: ${
          this.height
        }, area: ${this.area()}, perimeter: ${this.perimeter()}`
      },
    },
    "valueOf": {
      value: function () {
        return this.area()
      },
    },
})

// let shape1 = new Shape(2, 5)


function Rectangle(w, h) {
    Shape.call(this, w, h)

    if (this.constructor === Rectangle) {
      Rectangle.count = (Rectangle.count || 0) + 1
      console.log("Rectangle count:", Rectangle.count)
      if (Rectangle.count > 1) {
        throw new Error("Cannot create more than one instance of Rectangle.")
      }
    }
}

Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

let rect1 = new Rectangle(5, 10)
console.log(rect1)
console.log(rect1.toString())

function Square(w) {
    Rectangle.call(this, w, w)

    if (this.constructor === Square) {
      Square.count = (Square.count || 0) + 1
      if (Square.count > 1) {
        throw new Error("Cannot create more than one instance of Square.")
      }
    }
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

let square1 = new Square(5)
console.log(square1)
console.log(square1.toString())
let square2 = new Square(1)
console.log("Number of squares created:", Square.count)
console.log(square1 + square2)