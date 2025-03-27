const form = document.querySelector("form")

form.addEventListener("submit", function (e) {
  e.preventDefault()

  const imgs = document.querySelectorAll('input[type="radio"]')
  let imgSrc = "images/"

  for (let i = 0; i < imgs.length; i++) {
    if (imgs[i].checked) {
      imgSrc += imgs[i].value
      break
    }
  }

  const msg = document.querySelector("textarea").value

  const win = window.open("about:blank", "popup", "width=600,height=800")
  win.focus()
  const newImg = win.document.createElement("img")
  newImg.src = imgSrc
  win.document.body.appendChild(newImg)
  win.document.querySelector("img").style.width = "100%"
  win.document.body.appendChild(document.createElement("br"))
  win.document.body.appendChild(document.createTextNode(msg))
  win.document.querySelector("body").style.cssText =
    "text-align: center; font-size: 2rem; font-family: Arial, sans-serif; margin-top: 20px; color: lightseagreen;"
  win.document.body.appendChild(document.createElement("br"))
  const button = win.document.createElement("button")
  button.textContent = "Close"
  button.style.cssText =
    "margin-top: 30px; padding: 10px 20px; font-size: 1.5rem; background-color: lightseagreen; color: white; border: none; border-radius: 5px; cursor: pointer"
  button.addEventListener("click", function () {
    win.close()
  })
  win.document.body.appendChild(button)
})
