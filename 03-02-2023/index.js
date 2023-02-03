const express = require('express')

const app = express()
const port = 8080

//uso il metodo static che è il middleware per la gestione delle risorse statiche
//use introduce l'uso dei middlewares
app.use(express.static('public'))

app.get('/', (req, res) => {
  //res.send('home page')
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/drawing', (req, res) => {
  res.sendFile(__dirname + '/public/drawing.html')
})

app.get('/reading', (req, res) => {
  res.sendFile(__dirname + '/public/reading.html')
})

app.get('/music', (req, res) => {
  res.sendFile(__dirname + '/public/music.html')
})

app.get('*', (req, res) => {
  res.send('404 | pagina non trovata')
  console.log(res)
})

app.listen(port, () => {
  console.log(`Server attivo su ${port}`)
})

/* le risorse statiche all'interno di un progetto vengono incluse all'interno di una sottocartella chiamata public, 
all'interno della quale andremo a creare tutti i nostri file html*/
