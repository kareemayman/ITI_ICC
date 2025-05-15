const http = require("http")
const bookServices = require("./bookServices.js")

const server = http.createServer((req, res) => {
	res.writeHead(200)
	if ((req.url === "/books" || req.url === "/") && req.method === "GET") {
		console.log("books request")
		bookServices.getAllBooks();
	} else if (/^\/books\/([0-9])+$/.test(req.url) && req.method === "GET") {
		const id = req.url.split("/")[2]
		bookServices.getBook(+id)
	} else if (/^\/books\/([0-9])+$/.test(req.url) && req.method === "DELETE") {
		const id = req.url.split("/")[2]
		bookServices.deleteBook(+id);
	} else if (/^\/books\/([0-9])+\/([a-zA-Z0-9])+$/.test(req.url) && req.method === "PUT") {
		const id = req.url.split("/")[2]
		const name = req.url.split("/")[3]
		bookServices.updateBook(+id, name);
	} else if (/^\/books\/([0-9])+\/([a-zA-Z0-9])+$/.test(req.url) && req.method === "POST") {
		const id = req.url.split("/")[2]
		const name = req.url.split("/")[3]
		bookServices.addBook({"id": +id, "title": name});
	}
	res.end()
})

server.listen(3000, () => {
	console.log("Server has started on port: ", 3000)
})