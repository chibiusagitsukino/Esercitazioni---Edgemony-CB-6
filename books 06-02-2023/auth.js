const authorize = (req, res, next) => {
  const { user } = req.query

  if (user === 'Adriana') {
    req.user = { name: 'Adriana' } //utente autorizzato ad entrare
    next()
  } else {
    console.log(user)
    res.status(401).send(`Utente ${user} non è autorizzato`) //non entri nel percorso
  }
}

module.exports = authorize
