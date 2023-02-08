const express = require('express')
const app = express()
const port = 3000
// i parametri riguardano la request perchè get è deputato alla ricerca di qualcosa
app.get('/', (req, res) => {
  res.send('Home')
})
//Routing dell'applicazione
app.get('/:id', (req, res) => {
  res.send(`Id indicato è:${req.params.id}`)
})

app.get('/users/:name/:id', (req, res) => {
  res.send(`l'utente con id ${req.params.id} si chiama ${req.params.name}`)
})

app.get('/users/:valore', (req, res) => {
  res.send(`valore = ${req.params.valore}`)
})

//Regex => modello di riferimento a cui un dato deve adeguarsi
//quindi il dato variabile che io immetto deve adeguarsi a determinate regole (stabilite dal programmatore)
app.get('/login/:id([0-9]{4})', (req, res) => {
  res.send(`id ${req.params.id} inserito è lungo 4 caratteri`)
})

app.listen(port, () => {
  console.log(`Server attivo sulla porta ${port}`)
})
