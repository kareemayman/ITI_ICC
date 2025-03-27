let modal = document.querySelector(".win-modal")

let prevImg = {
  id: null,
  index: null,
}

let matched = 0

function displayImg(img) {
  img.src = "images/" + img.dataset.index + ".gif"
  validate(img)
}

function validate(img) {
  if (img.classList.contains("matched")) return
  if (prevImg.id === img.id) return
  if (prevImg.index === null) {
    prevImg.index = img.dataset.index
    prevImg.id = img.id
  } else if (prevImg.index !== img.dataset.index) {
    setTimeout(() => {
      img.src = "images/Moon.gif"
      let otherImg = document.getElementById(prevImg.id)
      if (otherImg) otherImg.src = "images/Moon.gif"
      resetPrevImg()
    }, 1000)
  } else {
    let otherImg = document.getElementById(prevImg.id)
    otherImg.classList.add("matched")
    img.classList.add("matched")
    matched += 2
    resetPrevImg()
    gameWon()
  }
}

function resetPrevImg() {
  prevImg.id = null
  prevImg.index = null
}

function gameWon() {
  if (matched === 12) {
    modal.classList.add("show-modal")
  }
}

function closeModal() {
  modal.classList.remove("show-modal")
  resetGame()
}

function resetGame() {
  matched = 0
  let imgs = document.images
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].src = "images/Moon.gif"
    imgs[i].classList.remove("matched")
  }
}
