const leftImg = document.querySelector("img")
const rightImg = document.querySelector("img + img")
const bottomImg = document.querySelector("img:last-child")

const goButton = document.querySelector("button")
const resetButton = document.querySelector("button:last-child")

let direction = "forward"
let myInterval

goButton.addEventListener("click", function () {
  if (goButton.textContent === "Go") {
    goButton.textContent = "Stop"
    myInterval = setInterval(move, 300)
  } else {
    goButton.textContent = "Go"
    clearInterval(myInterval)
  }
})

resetButton.addEventListener("click", function () {
    goButton.textContent = "Go"
    clearInterval(myInterval)
    leftImg.style.left = "0%"
    rightImg.style.right = "0%"
    bottomImg.style.bottom = "0%"
    leftImg.style.transform = "translate(0%, -50%)"
    rightImg.style.transform = "translate(0%, -50%)"
    bottomImg.style.transform = "translateY(0%)"
    direction = "forward"
})

function move() {
  if (direction === "forward") {
    leftImg.style.left = parseInt(leftImg.style.left || 0) + 10 + "%"
    rightImg.style.right = parseInt(rightImg.style.right || 0) + 10 + "%"
    bottomImg.style.bottom = parseInt(bottomImg.style.bottom || 0) + 10 + "%"

    leftImg.style.transform = "translate(-100%, -50%)"
    rightImg.style.transform = "translate(100%, -50%)"
    bottomImg.style.transform = "translateY(100%)"

    if (leftImg.style.left === "100%") {
      direction = "backward"
    }
  } else {
    leftImg.style.left = parseInt(leftImg.style.left) - 10 + "%"
    rightImg.style.right = parseInt(rightImg.style.right) - 10 + "%"
    bottomImg.style.bottom = parseInt(bottomImg.style.bottom) - 10 + "%"

    leftImg.style.transform = "translate(0%, -50%)"
    rightImg.style.transform = "translate(0%, -50%)"
    bottomImg.style.transform = "translateY(0%)"

    if (leftImg.style.left === "0%" || leftImg.style.left === "0") {
      direction = "forward"
    }
  }
}
