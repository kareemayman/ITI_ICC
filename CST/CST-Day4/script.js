function firstTask() {
  let s = prompt("Enter a string", "Hello, world!")
  let char = prompt("Enter a character to search for", "o")
  let caseSensitive = confirm("Do you want to make the search case sensitive?")
  caseSensitive = caseSensitive ? "" : "i"
  let exp = new RegExp(char, caseSensitive + "gm")
  let k = s.match(exp)
  console.log(
    "The character",
    char,
    "is found",
    k.length,
    "times in the string"
  )
}

function firstTask2() {
  let s = prompt("Enter a string", "Hello, world!")
  let char = prompt("Enter a character to search for", "o")
  let caseSensitive = confirm("Do you want to make the search case sensitive?")
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (!caseSensitive) {
      if (s[i].toLowerCase() === char.toLowerCase()) {
        count++
      }
    } else {
      if (s[i] === char) {
        count++
      }
    }
  }
  console.log("The character", char, "is found", count, "times in the string")
}

function secondTask() {
  let word = prompt("Enter a word", "Hello")
  let caseSensitive = confirm("Do you want to consider case sensitivity?")
  let palindrome = true
  for (let i = 0; i < word.length; i++) {
    if (caseSensitive) {
      if (word[i] !== word[word.length - i - 1]) {
        palindrome = false
        i = word.length
      }
    } else {
      if (word[i].toLowerCase() !== word[word.length - i - 1].toLowerCase()) {
        palindrome = false
        i = word.length
      }
    }
  }
  palindrome
    ? console.log("The word is a palindrome")
    : console.log("The word is not a palindrome")
}

function thirdTask(s) {
  let exp = /\w+/gm
  let k = s.match(exp)
  let res = ""
  let size = 0
  for (let i = 0; i < k.length; i++) {
    if (k[i].length > size) {
      size = k[i].length
      res = k[i]
    }
  }
  console.log(res)
}

function thirdTask2(s) {
  let length = 0
  let longestString = ""
  let lastIndex = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      let newLength = i - lastIndex
      if (newLength > length) {
        longestString = s.slice(lastIndex, i)
        length = newLength
      }
      lastIndex = i+1
    }
  }
  let newLength = s.length - lastIndex
  if (newLength > length) longestString = s.slice(lastIndex, s.length)
  console.log(longestString)
}

function fourthTask() {
  let name
  let nameReg = /^[a-z]+(\s+[a-z]+)*$/i
  do {
    name = prompt("Enter a name", "hello")
  } while (!nameReg.test(name))

  let telephone
  let telephoneReg = /^\d{8}$/g
  do {
    telephone = prompt("Enter a telephone number", "01234567")
  } while (!telephoneReg.test(telephone))

  let phone
  let phoneReg = /^(010|011|012)\d{8}$/
  do {
    phone = prompt("Enter a phone number", "01123456747")
  } while (!phoneReg.test(phone))

  let email
  let emailReg = /^\w+@\w{2,}(\.\w{2,})*$/i
  do {
    email = prompt("Enter an email", "kareem@example.com")
  } while (!emailReg.test(email))

  let color
  let colorReg = /^(red|green|blue)$/i
  do {
    color = prompt("Enter a color", "red, green or blue")
  } while (!colorReg.test(color))

  console.log(
    "%cName:" +
      name +
      "\nTelephone:" +
      telephone +
      "\nPhone:" +
      phone +
      "\nEmail:" +
      email,
    "color: " + color + ";"
  )
}

function fifthTask(radius, value, angle) {
  const area = Math.PI * radius * radius

  const squareRoot = Math.sqrt(value).toFixed(2)

  const rad = (angle * Math.PI) / 180
  const cos = Math.cos(rad).toFixed(2)

  console.log(
    "Area of a circle with " + radius + " radius is " + area.toFixed(2)
  )
  console.log("Square root of " + value + " is " + squareRoot)
  console.log("Cosine of " + angle + " degrees is " + cos)
}

// fifthTask(5, 25, 45)
fourthTask()