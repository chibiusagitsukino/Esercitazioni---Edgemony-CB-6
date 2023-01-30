// metodo require() => richiamo il modulo built-in

//creo il server
const http = require('http');

const server = http.createServer((req, res) => {
    // imposto i percorsi
    if(req.url === '/pagina-iniziale') //percorso; uno slash singolo ('/') corrisponde alla homepage raggiungibile con localhost:3000
    // ad ogni modifica: spegni con ctrl + c e riavvia il server con node file.js + invia
    //output richiesto (a scelta)
res.end('Edgemony - Coding Bootcamp #6') // contenuto
else if (req.url === '/studenti') // percorso
res.end('27 allievi') // contenuto
else if(req.url === '/corsi') //percorso
res.end('In corso: Node.js') // contenuto
else{
    res.writeHead(404) // risorsa non trovata
    res.end('Pagina non trovata')
}
});
// il server risponde alla porta 3000
server.listen(3000);