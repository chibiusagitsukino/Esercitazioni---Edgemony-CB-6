const express = require('express')
const hbs = require('hbs') //inserisco motore di template
const app = express()
const PORT = 4000
app.set('view engine', 'hbs') //lo richiamo e lo setto
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static('public'))

const myPreferences = {
  pet: 'Highland cow',
  color: 'turquoise',
  season: 'autumn',
}

//la response lavora in render
app.get('/', (req, res) => {
  const homeTitle = 'My Favourite Things'
  res.render('home', {
    homeTitle,
    myPreferences,
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    titolo: 'Get to know Me',
  })
})

//inizio form

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/mi-presento', (req, res) => {
  res.render('mi-presento')
})

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    res.render('login', { message: `Benvenut* ${name}` })
  } else {
    res.status(400).send('Per favore, aggiungi il dato.')
  }
})

//fine form

app.listen(PORT, () => {
  console.log(`Server attivo su ${PORT}`)
})
