// Task 1
class Counter {
  static instances = 0

  constructor() {
    Counter.instances++
    console.log(`New instance created. Active instances: ${Counter.instances}`)
  }

  static getActiveInstances() {
    return Counter.instances
  }
}

const instance1 = new Counter()
const instance2 = new Counter()

console.log(`Current active instances: ${Counter.getActiveInstances()}`)


// Task 2
class Document {
  constructor(header, footer, pages, text) {
    this.header = header
    this.footer = footer
    this.pages = pages
    this.text = text
  }

  clone() {
    return new Document(this.header, this.footer, this.pages, this.text)
  }

  print() {
    console.log(`Header: ${this.header}`)
    console.log(`Footer: ${this.footer}`)
    console.log(`Pages: ${this.pages}`)
    console.log(`Text: ${this.text}`)
  }
}

const originalDoc = new Document("My Header", "My Footer", 5, "This is the main text.")
const clonedDoc = originalDoc.clone()

console.log("Original Document:")
originalDoc.print()

console.log("\nCloned Document:")
clonedDoc.print()

clonedDoc.text = "Updated main text."
console.log("\nUpdated Cloned Document:")
clonedDoc.print()

// Task 3
class Pizza {
  constructor() {
    this.size = null
    this.crust = null
    this.toppings = []
    this.cheese = null
    this.sauce = null
  }

  describe() {
    console.log(`Pizza Details:`)
    console.log(`Size: ${this.size}`)
    console.log(`Crust: ${this.crust}`)
    console.log(`Cheese: ${this.cheese}`)
    console.log(`Sauce: ${this.sauce}`)
    console.log(`Toppings: ${this.toppings.join(", ")}`)
  }
}

class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza()
  }

  setSize(size) {
    this.pizza.size = size
    return this
  }

  setCrust(crust) {
    this.pizza.crust = crust
    return this
  }

  addTopping(topping) {
    this.pizza.toppings.push(topping)
    return this
  }

  setCheese(cheese) {
    this.pizza.cheese = cheese
    return this
  }

  setSauce(sauce) {
    this.pizza.sauce = sauce
    return this
  }

  build() {
    return this.pizza
  }
}

const myPizza = new PizzaBuilder()
  .setSize("Large")
  .setCrust("Thin")
  .setCheese("Mozzarella")
  .setSauce("Tomato")
  .addTopping("Pepperoni")
  .addTopping("Mushrooms")
  .build()

myPizza.describe()
