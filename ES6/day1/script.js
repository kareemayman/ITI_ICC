let task1 = () => {
    let arr = [10, -1, 35, 12, 55, 12, 11, 66]
    let arrAsc = arr.sort((a, b) => a - b)
    console.log(arrAsc)
    let arrDesc = arr.sort((a, b) => b - a)
    console.log(arrDesc)

    let filteredArr = arr.filter(n => n > 50)
    console.log(filteredArr)

    let max = Math.max(...arr)
    let min = Math.min(...arr)

    console.log(max)
    console.log(min)
}
// task1()

let task2 = (oper, ...nums) => {

    let add = () => {
        let sum = 0
        nums.forEach(num => {
            sum += num
        })
        let obj = {
            operation: "Addition",
            inputNumbers: [...nums],
            result: sum,
        }
        console.log(`Result of ${obj.operation} of ${obj.inputNumbers} is ${obj.result}`)
    }

    let sub = () => {
        let diff = nums[0]
        for (let i = 1; i < nums.length; i++) {
            diff -= nums[i]
        }
        let obj = {
            operation: "Subtraction",
            inputNumbers: [...nums],
            result: diff,
        }
        console.log(`Result of ${obj.operation} of ${obj.inputNumbers} is ${obj.result}`)
        return obj
    }

    let mul = () => {
        let prod = 1
        nums.forEach(num => {
            prod *= num
        })
        let obj = {
            operation: "Multiplication",
            inputNumbers: [...nums],
            result: prod,
        }
        console.log(`Result of ${obj.operation} of ${obj.inputNumbers} is ${obj.result}`)
    }

    let div = () => {
        let div = nums[0]
        for (let i = 1; i < nums.length; i++) {
            div /= nums[i]
        }
        let obj = {
            operation: "Division",
            inputNumbers: [...nums],
            result: div,
        }
        console.log(`Result of ${obj.operation} of ${obj.inputNumbers} is ${obj.result}`)
    }

    switch(oper) {
        case "+":
            add()
            break
        case "-":
            sub()
            break
        case "*":
            mul()
            break
        case "/":
            div()
            break
        default:
            console.log("Invalid operator")
    }

    
}
// task2("+", 1, 2, 3, 4, 5)
// task2("-", 10, 2, 3, 4, 5)
// task2("*", 1, 2, 3, 4, 5)
// task2("/", 100, 2, 5, 10, 2)

let task3 = () => {
  let projID = prompt("Enter project ID")
  let projName = prompt("Enter project name")
  let duration = prompt("Enter project duration")

  return {
    projID,
    projName,
    duration,
    printData: () => {
      console.log(
        `Project ID: ${this.projID}, Project Name: ${this.projName}, Duration: ${this.duration}`
      )
    },
  }
}
// let obj = task3()
// console.log(obj)

let task4 = () => {
    let arr1 = [1, 2, 3]
    let arr2 = [3, 2, 1, 4, 6, 5]
    
    let mergedArr = [...arr1, ...arr2]
    let uniqueArr = [...new Set(mergedArr)]
    console.log(uniqueArr)
}
// task4()

let task5 = () => {
    let obj = {
        name: 'Kareem',
        age: '24',
        address: {
            city: 'Cairo',
            country: 'Egypt'
        },
        hobbies: ['coding', 'music', 'training']
    }

    let { name, age, address: { city, country }, hobbies } = obj
    console.log(`My name is ${name}, I am ${age} years old, I live in ${city}, ${country}. My hobbies are ${hobbies.join(', ')}`)
}
// task5()
