// Task 1
interface User {
    name: string,
    age: number,
}
let obj1: Omit<User, "age"> = {name: "Kareem"}
console.log(obj1)



// Task 2
interface Profile {
    username?: string,
    email?: string,
}
let obj2: Required<Profile> = {
    username: "Kareem",
    email: "kareem.mohamed.ayman@gmail.com"
}
console.log(obj2)



// Task 3
type Colors = 'red' | 'green' | 'blue'
type ColorValue = "FF0000" | "00FF00" | "0000FF"
let myColors: Record<Colors, ColorValue> = {
    red: 'FF0000',
    green: '00FF00',
    blue: "0000FF",
}
console.log(myColors.red)



// Task 4
interface Person {
    name: string,
    age: number,
    email: string,
}
type NewPerson = Pick<Person, "name" | "email">
let myPerson: NewPerson = {name: "Kareem", email: "kareem@gmail"}



// Task 5
type Person2 = Omit<Person, "age">
let myPerson2: Person2 = {name: "Kareem", email: "kareem@gmail.com"}



// Task 6
type MyColors = "red" | "green" | "blue" | "yellow"
type NewColors = Exclude<MyColors, "yellow">
let c: NewColors = "yellow"
let c2: NewColors = "blue"



// Task 7
type RedBlue = Extract<MyColors, "red" | "blue">
let c3: RedBlue = 'green'
let c4: RedBlue = 'red'



// Task 8
type MaybeString = string | null | undefined
type MyString = Exclude<MaybeString, null | undefined>
let s: MyString = null
let s2: MyString = 'Kareem'