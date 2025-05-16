const fileUtils = require("./util/filesUtil.js")
const FILE_PATH = "./data/books.json"

function getAllBooks() {
    const books = fileUtils.readFile(FILE_PATH)
    return books
}

function getBook(id) {
    const books = fileUtils.readFile(FILE_PATH)
    const book = books.find(book => book.id === id)
    if (book) {
        return book
    } else {
        return false
    }
}

function addBook(obj) {
    const books = fileUtils.readFile(FILE_PATH)
    const newBook = {
        id: books[books.length-1]["id"]+1 || 1,
        name: obj["name"],
        image: obj["image"],
    }
    books.push(newBook)
    fileUtils.saveFile(FILE_PATH, books)
}

function deleteBook(id) {
    const books = fileUtils.readFile(FILE_PATH)
    const newBooks = books.filter(book => book.id !== id)
    if (books.length === newBooks.length) {
        return false
    }
    fileUtils.saveFile(FILE_PATH, newBooks)
    return true
}

function updateBook(id, name, image) {
    const books = fileUtils.readFile(FILE_PATH)
    const bookIndex = books.findIndex(book => book.id === id)
    if (bookIndex !== -1) {
        books[bookIndex].name = name
        books[bookIndex].image = image
        fileUtils.saveFile(FILE_PATH, books)
        return books
    } else {
        return false
    }
}

module.exports = {
    getAllBooks,
    getBook,
    addBook,
    deleteBook,
    updateBook
}