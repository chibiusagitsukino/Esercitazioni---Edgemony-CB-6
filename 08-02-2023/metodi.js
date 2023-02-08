const express = require('express')
const { people } = require('./data')
// const articoli = require('./articoli')
const app = express()
const port = 3000

//middleware per risorse statiche
app.use(express.static('./public'))
//middleware middleware estendono l'uso degli url a tutti gli oggetti compresi sorgenti di dati da oggetti innestati e da form
//middleware json estende la gestione del formato per tutti i metodi a livello globale dell'applicazione
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Routing applicazione
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
  // res.status(200).json({ success: true, data: articoli })
})

//metodo post
//Inviamo i dati alla nostra applicazione
app.post('/api/people', (req, res) => {
  const { id, name } = req.body //contenuto della richiesta post
  /*...post finisce qui*/

  if (!id || !name) {
    return res
      .status(400)
      .json({ success: false, msg: 'non trovo un dato necessario' })
  }
  return res.status(200).json({ success: true, person: { id: id, name: name } })
})

//metodo post
//creo un nuovo dato ed espongo tutta la lista
app.post('/api/people/new', (req, res) => {
  //dichiarazione api, versione, risorsa da gestire, dato nuovo
  const { id, name } = req.body
  if (!id || !name) {
    return res
      .status(400)
      .json({ success: false, msg: 'non trovo un dato necessario' })
  }
  return res
    .status(201)
    .json({ success: true, data: [...people, { id: id, name: name }] }) //201 --> richiesta di inserimento di un dato nuovo
})

//metodo post con dato ricevuto da form
app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Benvenut* ${name}`)
  }
  if (!name) {
    return res.status(400).json({ success: false, msg: 'undefined' })
  }
})

//metodo http put --> agisce sul dato ID, es.: api/people/3
app.put('/api/people/:id', (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find((person) => person.id === Number(id))

  //person = utente secondo il suo id (la ricerca è impostata sul parametro id)

  //messaggio nel caso l'id non sia esistente
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `non c'è nessuno con id: ${id}` })
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

//metodo delete --> criterio di esclusione del dato --> non abbiamo bisogno del body perchè il delete non necessita un contenuto
app.delete('/api/people/:id', (req, res) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `non c'è nessuno con id: ${req.params.id}` })
  }

  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(port, () => {
  console.log(`Server ascolta su porta ${port}`)
})
