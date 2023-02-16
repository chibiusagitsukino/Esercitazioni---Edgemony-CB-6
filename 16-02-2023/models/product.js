const mongoose = require('mongoose')

//creo un nuovo schema di dati
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    enum: ['Electronics', 'Clothing', 'Books', 'Home', 'Sport'],
  },
  imageUrl: {
    type: String,
    required: true,
  },
})

mongoose.model('Product', productSchema)
