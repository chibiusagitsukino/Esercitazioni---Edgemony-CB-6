const http = require('http')
const os = require('os')
const fs = require('fs') /* modulo - file system */
const prodotti = fs.readFileSync('prodotti.html')
const clienti = fs.readFileSync('cliente.html')
let piattaforma = os.platform();
let data = new DataTransfer();
let cliente = os.userInfo();

let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
l'utente <b>${cliente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma}
</body>
</html>`;
const server = http.createServer((req, res) => {
    if(req.url === '/')
        res.end(messaggio)
        else if(req.url === '/prodotti')
    res.end(prodotti)
    else if(req.url === '/clienti')
    res.end(clienti)
    //creo l'output della pagina
    else if(req.url === '/') //percorso di root
    res.end()

    else{
        res.writeHead(404)
        res.end('Sorry, not found')
    }
})
server.listen(3001)
console.log(messaggio)