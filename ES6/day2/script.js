const task1 = () => {

    const mySet = new Set([1, 2, 3, 4, 5, 3, 2])

    console.log(mySet.has(3) ? 'Set has 3' : 'Set does not have 3')

    mySet.delete(2)

    console.log([...mySet])

    mySet.forEach((value) => {
        console.log(value)
    })

    for (const value of mySet) {
        console.log(value)
    }
}
task1()

const task2 = () => {

    const scores = new Map([
        ['Alice', 85],
        ['Bob', 92],
        ['Charlie', 78]
    ])

    console.log(scores.get('Bob'))

    scores.set('Charlie', 88)
    
    console.log(scores.has('David'))

    scores.forEach((val, key) => {
        console.log(key, val)
    })

    for (const [key, value] of scores) {
        console.log(`${key}: ${value}`)
    }
}
task2()

const task3 = () => {

    let countries = new Map([
        ['USA', '331 million'],
        ['India', '1380 million'],
        ['China', '1441 million']
    ])

    countries = Object.fromEntries(countries)
    console.log(countries)

    countries = new Map(Object.entries(countries))
    console.log(countries)

    let mySet = new Set(countries.keys())
    console.log(mySet)

    mySet = [...mySet]
    console.log(mySet)
}
task3()

const task4 = () => {

    class Employee {

        constructor(id, salary, dept) {
            this.id = id
            this.salary = salary
            this.dept = dept
        }

        getDetails() {
            return `ID: ${this.id}, Salary: ${this.salary}, Department: ${this.dept}`
        }
    }

    class Manager extends Employee {

        constructor(id, salary, dept, teamSize) {
            super(id, salary, dept)
            this.teamSize = teamSize
        }

        getDetails() {
            return `${super.getDetails()}, Team Size: ${this.teamSize}`
        }
    }

    let mngr = new Manager(1, 5000, 'Engineering', 10)
    console.log(mngr.getDetails())

    mngr.id = 2
    console.log(mngr.getDetails())
}
task4()

const task5 = () => {

    class Temperature {
        
        #celsius
        constructor(celsius) {
            this.#celsius = celsius
        }

        get celsius() {
            return this.#celsius
        }

        set celsius(value) {
            if (value < -273.15) {
                throw new Error('Temperature cannot be below absolute zero')
            }

            this.#celsius = value
        }
    }

    const temp = new Temperature(25)
    console.log(temp.celsius)

    temp.celsius = 30
    console.log(temp.celsius)

    temp.celsius = -300
}
// task5()

const task6 = () => {

    class MathUtils {

        static PI = 3.14

        static calculateCircumference(radius) {
            return 2 * MathUtils.PI * radius
        }
    }

    console.log(MathUtils.calculateCircumference(15))
}
task6()

const task7 = () => {
    const str = 'abacbd'

    let good = []
    let dup = []

    for (let i=0; i<str.length; i++) {
        
        if (!good.includes(str[i]) && !dup.includes(str[i])) {
            good.push(str[i])
        } else if (good.includes(str[i])) {
            good.splice(good.indexOf(str[i]), 1)
            dup.push(str[i])
        }
    }

    console.log(good[0])
}
task7()