const express = require('express')
let router = express.Router()
const mongoose = require('mongoose')
const Product = mongoose.model('Product')

router.get('/addProduct', (req, res) => {
  res.render('addProduct', {
    viewTitle: 'Inserisci un prodotto',
  })
})

/*
// Prendo tutti i prodotti
router.get('/products', (req, res) => {
    const products = Product.find()
    res.render('products', { products: products })
})
*/

router.post('/addProduct', (req, res) => {
  if (req.body._id == '') insertRecord(req, res)
  else updateRecord(req, res)
})

function insertRecord(req, res) {
  //creo un collegamento con lo schema di mongoose
  let product = new Product()
  product.name = req.body.name
  product.description = req.body.description
  product.price = req.body.price
  product.stock = req.body.stock
  product.category = req.body.category
  product.imageUrl = req.body.text
  //salvo i dati dall'oggetto
  product.save((err, doc) => {
    if (!err) res.redirect('/addProduct')
    else console.log(`Errore nell' inserimento: ${err}`)
  })
}

function updateRecord(req, res) {
  Product.updateOne(
    { _id: req.body._id },
    req.body,
    { new: true },
    (err, doc) => {
      if (!err) {
        res.redirect('/addProduct')
      } else {
        console.log("Errore durante l' update : " + err)
      }
    }
  )
}

router.get('/product-list', (req, res) => {
  Product.find((err, docs) => {
    if (!err) {
      res.render('product-list', {
        productlist: docs,
      })
    } else {
      console.log(`Errore ${err}`)
    }
  })
})

router.get('/:id', (req, res) => {
  Product.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.render('addProduct', {
        viewTitle: 'Aggiornamento',
        product: doc,
      })
    }
  })
})

router.get('/delete/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.redirect('/product-list')
    } else {
      console.log(`Errore ${err}`)
    }
  })
})

module.exports = router
