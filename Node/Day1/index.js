const http = require("http")

const server = http.createServer((req, res) => {
	res.writeHead(200)
	console.log("request recieved")
	res.end()
})

server.listen(3000, () => {
	console.log("Server has started on port: ", 3000)
})