const express = require('express')
const { people } = require('./data')
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
})

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

app.listen(port, () => {
  console.log(`Server ascolta su porta ${port}`)
})
