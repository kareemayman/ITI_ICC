const outputGrid = document.querySelector(".output .grid")

const showAllBooksButton = document.querySelector(".show-all-books")
const getBookById = document.querySelector(".get-by-id form")
const deleteBookById = document.querySelector(".delete-by-id form")
const addBook = document.querySelector(".add-book form")
const updateBook = document.querySelector(".update-book form")

showAllBooksButton.addEventListener("click", (e) => {
  fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((data) => renderBooks(data))
})

getBookById.addEventListener("submit", (e) => {
  e.preventDefault()
  const idInput = document.querySelector("input[type=number]")
  if (idInput.value !== "" && !isNaN(idInput.value)) {
    fetch(`http://localhost:3000/books/${idInput.value}`)
      .then((res) => res.json())
      .then((data) => renderBook(data))
      .catch(() => {
        outputGrid.innerHTML = `<h3>Book Not Found</h3>`
      })
    idInput.value = ""
  }
})

deleteBookById.addEventListener("submit", (e) => {
  e.preventDefault()
  const idInput = document.querySelector("input#deleteId")
  if (idInput.value !== "" && !isNaN(idInput.value)) {
    fetch(`http://localhost:3000/books/${idInput.value}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete the book")
        }
        outputGrid.innerHTML = `<h3>Book deleted Successfuly</h3>`
      })
      .catch((error) => {
        console.error("Error:", error)
        outputGrid.innerHTML = `<h3>${error}</h3>`
      })
    idInput.value = ""
  }
})

addBook.addEventListener("submit", (e) => {
  e.preventDefault()
  const bookName = document.querySelector("#addName")
  const selectedImg = document.querySelector("#selectImage")
  if (bookName.value !== "" && selectedImg.value != "") {
    fetch("http://localhost:3000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: bookName.value, image: selectedImg.value }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add the book")
        }
        outputGrid.innerHTML = `<h3>Book added Successfuly</h3>`
      })
      .catch((error) => {
        outputGrid.innerHTML = `<h3>${error}</h3>`
      })
    bookName.value = ""
  }
})

updateBook.addEventListener("submit", (e) => {
  e.preventDefault()
  const idInput = document.querySelector("#updatedBookId")
  const bookName = document.querySelector("#updatedName")
  const selectedImg = document.querySelector("#updatedImage")
  console.log(idInput.value, bookName.value, selectedImg.value)
  if (idInput.value !== "" && !isNaN(idInput.value) && bookName.value !== "" && selectedImg != "") {
    fetch("http://localhost:3000/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: +idInput.value, name: bookName.value, image: selectedImg.value }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update the book")
        }
        outputGrid.innerHTML = `<h3>Book updated Successfuly</h3>`
        return res.json()
      })
      .then((data) => renderBooks(data))
      .catch((error) => {
        outputGrid.innerHTML = `<h3>${error}</h3>`
      })
    bookName.value = ""
    idInput.value = ""
  }
})

function renderBooks(data) {
  outputGrid.innerHTML = ""
  data.forEach((item) => {
    const book = document.createElement("div")
    book.className = "book-item"
    book.innerHTML = `<h3>${item.id}. ${item.name}</h3> <img src="http://localhost:3000/static/images/${item.image}" alt="image"/>`
    outputGrid.appendChild(book)
  })
}

function renderBook(data) {
  outputGrid.innerHTML = ""
  const book = document.createElement("div")
  book.className = "book-item"
  book.innerHTML = `<h3>${data.id}. ${data.name}</h3> <img src="http://localhost:3000/static/images/${data.image}" alt="image"/>`
  outputGrid.appendChild(book)
}
