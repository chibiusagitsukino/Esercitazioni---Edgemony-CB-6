// Creo un server che risponde alla porta 3001
const http = require('http');
const port = 3001;
// Uso una costante per il numero di porta
const server = http.createServer((req, res) => {
  // Creo un output a console che indichi il server attivo sulla porta
  console.log(`Server attivo sulla porta: ${port}`);
  // Uso 3 variabili per passare all'output i titoli delle 3 pagine
  const articlesTitle = 'Articoli';
  const commentsTitle = 'Commenti';
  const usersTitle = 'Utenti';
  // Uso text/plain per i contenuti di 3 diverse pagine
  if (req.url === '/articoli') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`${articlesTitle}\n\nPagina dedicata agli articoli`);
    res.end();
  } else if (req.url === '/commenti') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`${commentsTitle}\n\nPagina dedicata ai commenti`);
    res.end();
  } else if (req.url === '/utenti') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`${usersTitle}\n\nPagina dedicata agli utenti`);
    res.end();
  } else {
    // Gestisco lo status code 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('Errore 404: Pagina non trovata');
    res.end();
  }
});
// Formatto usando la modalità literal template
server.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});

