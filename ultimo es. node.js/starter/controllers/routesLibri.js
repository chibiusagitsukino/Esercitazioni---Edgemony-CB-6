const express = require('express')
let routerLibri = express.Router()

//const mongoose = require('mongoose');

//const Libro = mongoose.model('libroModel');

routerLibri.get('/', (req, res) => {
  res.render('addupbook', {
    viewTitle: 'Inserisci un libro',
  })
})

routerLibri.get('/bookList', (req, res) => {
  res.render('listBook', {
    viewTitle: 'vedi i libri',
  })
})

//inizio esercizio: aggiungo le restanti crud

router.post('/', (req, res) => {
  if (req.body._id == '') insertRecord(req, res)
  else updateRecord(req, res)
})

function insertRecord(req, res) {
  //creo un collegamento con lo schema di mongoose
  let libro = new Libro()
  libro.title = req.body.title
  console.log(req.body.name)
  libro.author = req.body.author
  libro.pages = req.body.pages
  libro.price = req.body.price
  //salvo i dati dall'oggetto libro
  libro.save((err, doc) => {
    if (!err) res.redirect('listBook')
    else console.log(`Errore nell' inserimento: ${err}`)
  })
}

function updateRecord(req, res) {
  Libro.updateOne(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect('listBook')
      } else {
        console.log("Errore durante l' update : " + err)
      }
    }
  )
}

router.get('/listBook', (req, res) => {
  Libro.find((err, docs) => {
    if (!err) {
      res.render('listBook', {
        notalist: docs, //cosa è notalist??
      })
    } else {
      console.log(`Errore ${err}`)
    }
  })
})

router.get('/:id', (req, res) => {
  Libro.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render('addupdate', {
        viewTitle: 'Aggiornamento',
        libro: doc,
      })
    }
  })
})

router.get('/delete/:id', (req, res) => {
  Libro.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect('/listBook')
    } else {
      console.log(`Errore ${err}`)
    }
  })
})

module.exports = routerLibri
