const express = require('express');

const app = express();
const cors = require('cors');
const bookServices = require('./bookServices.js');

app.use(express.json());
app.use(cors());
app.use('/static', express.static('public'));


app.get('/', (req, res) => {
    const books = bookServices.getAllBooks();
    res.send(books);
})

app.get('/books', (req, res) => {
    const books = bookServices.getAllBooks();
    res.send(books);
})

app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = bookServices.getBook(id);
    if (book) {
        res.send(book);
    } else {
        res.status(404).send('Book not found');
    }
})

app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const result = bookServices.deleteBook(id)
    if (result) {
        res.send('Book deleted successfully');
    } else {
        res.status(404).send('Book not found');
    }
})

app.post('/', (req, res) => {
    const bookName = req.body;
    bookServices.addBook(bookName);
    res.send(true);
})

app.put('/', (req, res) => {
    const bookName = req.body;
    if(!bookServices.updateBook(bookName["id"], bookName["name"], bookName["image"])) {
        res.status(404).send('Book not found')
    }
    res.send(bookServices.getAllBooks());
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})