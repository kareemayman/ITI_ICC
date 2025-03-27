const ans = document.getElementById("Answer")

let lastClicked = null

function EnterNumber(elementValue) {
  ans.value += elementValue
  lastClicked = "num"
}

function EnterClear() {
  ans.value = ""
  lastClicked = null
}

function EnterOperator(elementValue) {
  if (lastClicked === null && (elementValue === '*' || elementValue === '/')) {return}
  if (lastClicked === "op" && elementValue !== "-") {
    return
  }
  if (ans.value[ans.value.length - 1] === "+" ) {
    ans.value = ans.value.slice(0, -1) + '-'
  } else if (ans.value[ans.value.length - 1] === "-" ) {
    ans.value = ans.value.slice(0, -1) + '+'
  } else {
    ans.value += elementValue
  }
  lastClicked = "op"
}

function EnterEqual() {
  const str = ans.value
  const nums = []
  const ops = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "+" || str[i] === "-" || str[i] === "*" || str[i] === "/") {
      ops.push(str[i])
    } else {
      let num = ""
      while (i < str.length && ((str[i] >= "0" && str[i] <= "9") || str[i] === ".")) {
        num += str[i]
        i++
      }
      i--
      nums.push(parseFloat(num))
    }
  }
  console.log(nums)
  console.log(ops)
  let result = nums[0]
  if (ops.length === nums.length) {
  if (ops[0] === "-") {
    result *= -1
  }
    for (let i = 1; i < nums.length; i++) {
      if (ops[i] === "+") {
        result += nums[i]
      } else if (ops[i] === "-") {
        result -= nums[i]
      } else if (ops[i] === "*") {
        result *= nums[i]
      } else if (ops[i] === "/") {
        result /= nums[i]
      }
    }
  } else {
    for (let i = 1; i < nums.length; i++) {
      if (ops[i - 1] === "+") {
        result += nums[i]
      } else if (ops[i - 1] === "-") {
        result -= nums[i]
      } else if (ops[i - 1] === "*") {
        result *= nums[i]
      } else if (ops[i - 1] === "/") {
        result /= nums[i]
      }
    }
  }
  ans.value = result
}
