const http = require('http')
const fs = require('fs')
const books = require('./books') //collegamento alla risorsa json
const port = 3000

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    let homepage = fs.readFileSync(`homepage.html`)
    res.end(homepage)
  } else if (req.url === '/aboutme.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    let aboutme = fs.readFileSync(`aboutme.html`)
    res.end(aboutme)
  } else if (req.url === '/books.json') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(books))
  } else {
    res.writeHead(404)
    res.end('Not found')
  }
})
server.listen(port)
