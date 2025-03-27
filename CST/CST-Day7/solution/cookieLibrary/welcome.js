const image = document.images[0]
const heading = document.querySelector("h1")

const gender = getCookie("gender")
const userName = getCookie("userName")
const color = getCookie("color")
let welcomeCount = +(getCookie("welcomeCount")) || 0
welcomeCount++
setCookie("welcomeCount", welcomeCount)

if (gender === "m") {
  image.src = "images/1.jpg"
} else if (gender === "f") {
  image.src = "images/2.jpg"
}

heading.innerHTML =
  "Welcome " +
  "<span style=color:" +
  color +
  ";>" +
  userName +
  "</span>" +
  " you have visited this page " +
  "<span style=color:" +
  color +
  ";>" +
  welcomeCount +
  " times :)"
