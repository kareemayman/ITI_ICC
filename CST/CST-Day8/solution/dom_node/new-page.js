const headerImg = document.getElementById('header')
const newImg = headerImg.cloneNode(true)
document.body.appendChild(newImg)
headerImg.style.cssText = 'margin-left: auto; width: fit-content'

const list = document.getElementById('nav')
list.style.listStyleType = "circle"