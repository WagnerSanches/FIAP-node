const http = require('http')
const filmes = require('./filmes').filmes;

http.createServer((req, res) => {
    if(req.url === "/filmes") {
        res.writeHead(200, { "Content-Type": "application/json"})
        res.write(JSON.stringify(filmes))
        res.end()
    }
}).listen(8000, () => {
    console.log('Rodando...')
})