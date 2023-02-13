const express = require('express')
const session = require('cookie-session')
const bodyParser = require('body-parser')
const hbs = require('hbs')
const app = express()
const PORT = 4040
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({ secret: 'La mia sessione' }))

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page',
  })
})

app.get('/signup', (req, res) => {
  res.render('signup', {
    title: 'Login',
  })
})

app.post('/signup', (req, res) => {
  console.log(`${req.body.name} / ${req.body.password}`)

  if (!req.body.name || !req.body.password) {
    res.status(400)
    res.render('/signup', { message: 'per favore aggiungi il dato richiesto' })
  } else {
    let name = 'Adriana'
    let password = '2345'
    let userAuth = { name: name, password: password }

    if (name == req.body.name && password == req.body.password) {
      req.session.user = userAuth
      res.redirect('/private')
    } else {
      res.redirect('/warning')
    }
  }
  // res.render('signup')
})

function checkPage(req, res, next) {
  if (req.session.user) {
    next()
  } else {
    res.redirect('/warning')
  }
}

app.get('/private', checkPage, (req, res) => {
  res.render('private')
})

app.get('/warning', (req, res) => {
  res.render('warning')
})
//per il logout è necessario svuotare/annullare la sessione
app.get('/logout', (req, res) => {
  console.log('logout')
  req.session = null
  res.redirect('/signup')
})

app.get('/contatti', (req, res) => {
  res.render('contatti', {
    title: 'Contatti',
  })
})

app.get('/formazione', (req, res) => {
  res.render('formazione', {
    title: 'Formazione',
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Chi Sono',
  })
})

app.get('/web-design', (req, res) => {
  res.render('web-design', {
    title: 'Web Design',
  })
})

app.get('/*', (req, res) => {
  res.render('404', { titolo: 'Not Found' })
})

app.listen(PORT, () => {
  console.log(`Porta del server attiva ${PORT}`)
})
