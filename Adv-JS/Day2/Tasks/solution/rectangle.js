function Rectangle(w, h) {
  this.width = w
  this.height = h
  this.area = function () {
    return this.width * this.height
  }
  this.perimeter = function () {
    return 2 * (this.width + this.height)
  }
  this.displayInfo = function () {
    console.log("width:", this.width)
    console.log("height:", this.height)
    console.log("area:", this.area())
    console.log("perimeter:", this.perimeter())
  }
}

let rect1 = new Rectangle(5, 10)
let rect2 = new Rectangle(3, 4)
rect1.displayInfo()
rect2.displayInfo()
