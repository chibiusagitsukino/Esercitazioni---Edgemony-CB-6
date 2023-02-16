require('./models/DBconfig')
const express = require('express')
const hbs = require('hbs')
const bodyparser = require('body-parser')
const routes = require('./controllers/routes')
const routesProduct = require('./controllers/routesProduct') // Importo il nuovo router
let app = express()
const PORT = 3000

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static('./public'))

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
)
app.use('/', routes)
app.use('/products', routesProduct) // Aggiungo il nuovo router per la gestione dei prodotti

app.listen(PORT, () => {
  console.log(`Server  ascolta sulla porta ${3000}`)
})
