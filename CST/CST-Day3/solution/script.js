function firstProblem() {
  let msg = prompt("Please enter your message:", "Hello, World!")

  for (let i = 1; i < 7; i++) {
    document.write("<h" + i + ">" + msg + "</h" + i + ">")
  }
}

function secondProblem() {
  let sum = 0
  let n = Number(prompt("Please enter a number:"))
  do {
    if (isNaN(n)) {
      n = Number(prompt("Please enter a number:"))
    } else if (n) {
      sum += n
      if (sum <= 100) n = Number(prompt("Please enter a number:"))
    }
  } while (sum <= 100 && n !== 0)

  console.log("Sum: ", sum)
}

function thirdProblem(a, b) {
  if (isNaN(a) || isNaN(b)) console.log("Please enter 2 valid numbers")
  else console.log(a >= b ? a : b)
}

function fourthProblem() {
  let x, y, z
  do {
    x = parseFloat(prompt("Please enter first number:"))
  } while (isNaN(x))
  do {
    y = parseFloat(prompt("Please enter second number:"))
    while (y === 0) {
      y = parseFloat(prompt("Cannot divide by 0, please enter a valid number:"))
    }
  } while (isNaN(y))
  do {
    z = parseFloat(prompt("Please enter third number:"))
    while (z === 0) {
      z = parseFloat(prompt("Cannot divide by 0, please enter a valid number:"))
    }
  } while (isNaN(z))

  if (x % y === 0 && x % z === 0)
    console.log(x + " is divisible by both " + y + " and " + z)
  else if (x % y === 0) console.log(x + " is divisible by " + y)
  else if (x % z === 0) console.log(x + " is divisible by " + z)
  else console.log(x + " is not divisible by either " + y + " or " + z)
}

function fifthProblem(a, b) {
  if (isNaN(a) || isNaN(b)) console.log("Please enter 2 valid numbers")
  else {
    let multiplesOfFive = "Number Multiples of 5: "
    let multiplesOfThree = "Number Multiples of 3: "
    let sum = 0
    let min = a <= b ? a : b
    let max = a > b ? a : b
    for (; min <= max; min++) {
      if (min % 3 === 0 || min % 5 === 0) sum += min
      if (min % 3 === 0) multiplesOfThree += min + ", "
      if (min % 5 === 0) multiplesOfFive += min + ", "
    }
    console.log(multiplesOfThree.slice(0, -2))
    console.log(multiplesOfFive.slice(0, -2))
    console.log("total sum is: ", sum)
  }
}

function sixthProblem(n) {
  if (isNaN(n)) console.log("Please enter a valid number")
  else {
    for (let i = 1; i <= n; i++) console.log("*".repeat(i))
  }
}

sixthProblem(5)