// Task 1
class Teacher {
  constructor(name) {
    this.name = name
  }
}
function addSalary(teacher, salary) {
  teacher.salary = salary
  return teacher
}
function addNationality(teacher, nationality) {
  teacher.nationality = nationality
  return teacher
}
function addStreet(teacher, street) {
  teacher.street = street
  return teacher
}
let t1 = new Teacher("Ali")
addSalary(t1, 5000)
addNationality(t1, "Egyptian")
addStreet(t1, "Main St")
console.log(t1)



// Task 2
class CountryService {
  getCountries() {
    return ["Egypt", "USA", "Germany"]
  }
}
class CountryProxy {
  constructor() {
    this.service = new CountryService()
    this.cache = null
  }
  getCountries() {
    if (this.cache) {
      return this.cache
    }
    this.cache = this.service.getCountries()
    return this.cache
  }
}
let proxy = new CountryProxy()
console.log(proxy.getCountries())
console.log(proxy.getCountries()) // second time from cache



// Task 3
class VolumeControl {
  increaseVolume() {}
  decreaseVolume() {}
  mute() {}
}
class TV extends VolumeControl {
  constructor() {
    super()
    this.volume = 10
  }
  increaseVolume() {
    this.volume++
  }
  decreaseVolume() {
    this.volume--
  }
  mute() {
    this.volume = 0
  }
}
class Speaker extends VolumeControl {
  constructor() {
    super()
    this.volume = 5
  }
  increaseVolume() {
    this.volume++
  }
  decreaseVolume() {
    this.volume--
  }
}
let tv = new TV()
console.log(tv)
tv.increaseVolume()
console.log(tv)
tv.mute()
console.log(tv)
let speaker = new Speaker()
console.log(speaker)
speaker.increaseVolume()
console.log(speaker)



// Task 4
class BookComponent {
  getPages() {}
  show(indent = 0) {}
}
class Book extends BookComponent {
  constructor(title, pages) {
    super()
    this.title = title
    this.pages = pages
  }
  getPages() {
    return this.pages
  }
  show(indent = 0) {
    console.log(" ".repeat(indent) + this.title + " (" + this.pages + " pages)")
  }
}
class Box extends BookComponent {
  constructor(name) {
    super()
    this.name = name
    this.children = []
  }
  add(item) {
    this.children.push(item)
  }
  getPages() {
    return this.children.reduce((sum, child) => sum + child.getPages(), 0)
  }
  show(indent = 0) {
    console.log(" ".repeat(indent) + "Box: " + this.name)
    this.children.forEach((child) => child.show(indent + 2))
  }
}
let box = new Box("Library")
let book1 = new Book("JS Basics", 100)
let book2 = new Book("Design Patterns", 200)
let smallBox = new Box("Small Box")
smallBox.add(new Book("Algorithms", 150))
box.add(book1)
box.add(book2)
box.add(smallBox)
box.show()
console.log("Total pages:", box.getPages())
