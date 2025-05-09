const fileUtils = require("./util/filesUtil.js")
const FILE_PATH = "./data/books.json"

function getAllBooks() {
    const books = fileUtils.readFile(FILE_PATH)
    console.log(JSON.parse(books))
}

function getBook(id) {
    const books = JSON.parse(fileUtils.readFile(FILE_PATH))
    const book = books.find(book => book.id === id)
    if (book) {
        console.log(book)
    } else {
        console.log("Book not found")
    }
}

function addBook(book) {
    const books = JSON.parse(fileUtils.readFile(FILE_PATH))
    books.push(book)
    fileUtils.saveFile(FILE_PATH, books)
}

function deleteBook(id) {
    const books = JSON.parse(fileUtils.readFile(FILE_PATH))
    const newBooks = books.filter(book => book.id !== id)
    fileUtils.saveFile(FILE_PATH, newBooks)
}

function updateBook(id, name) {
    const books = JSON.parse(fileUtils.readFile(FILE_PATH))
    const bookIndex = books.findIndex(book => book.id === id)
    if (bookIndex !== -1) {
        books[bookIndex].name = name
        fileUtils.saveFile(FILE_PATH, books)
    } else {
        console.log("Book not found")
    }
}

// getAllBooks()
// addBook({"id": 4, "title": "Book 4"})
// getAllBooks()
// updateBook(4, "Updated Book 4")
// getAllBooks()
// deleteBook(4)
// getAllBooks()

module.exports = {
    getAllBooks,
    getBook,
    addBook,
    deleteBook,
    updateBook
}