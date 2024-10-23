const books = require('./data/books.json'); // Para importar data.json,
const express = require('express') // Importamos el paquete express
const app = express() // Inicializamos servidor con express
const port = 3000 // Puerto a usar por el servidor

app.use(express.json()); //para que sepa que tipo de peticiones atiende el servidor

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

// get http://localhost:3000/ --> ruta / La principal
app.get('/all', (req, res) => {  // req = request / res=response
    res.send(books)
})

// get http://localhost:3000/first --> ruta
app.get('/first', (req, res) => {
    res.send(books[0])
})

// get http://localhost:3000/last --> ruta
app.get('/last', (req, res) => {
    res.send(books[books.length - 1])
})