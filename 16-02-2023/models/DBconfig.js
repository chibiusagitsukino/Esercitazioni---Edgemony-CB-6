const mongoose = require('mongoose')
mongoose.set('strictQuery', true)

mongoose.connect(
  'mongodb+srv://chibiusagitsukino:b2a1k2a1@cluster0.ks2lpsu.mongodb.net/newdata?retryWrites=true',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log('MongoDB connesso.')
    } else {
      console.log(`Problemi con la connessione:  ${err}`)
    }
  }
)

// require('./nota')
require('./product')
