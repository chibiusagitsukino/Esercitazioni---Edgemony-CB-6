const express = require('express')
const app = express()
const books = require('./books.json')
const authorize = require('./auth')

const port = 5000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html')
})

app.get('/books', (req, res) => {
  res.json(books)
})

app.get('/reserved', authorize, (req, res) => {
  const reservedBooks = books.filter((book) => book.riservato)
  res.json(reservedBooks)
})

// http://localhost:5000/reserved?user=Adriana

app.listen(port, () => {
  console.log(`Server ascolta sulla porta ${port}`)
})
