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

// get http://localhost:3000/middle --> /middle para obtener el libro en la mitad (número 50 en el array)
app.get('/middle', (req, res) => {
    res.send(books[49])
})

//author/dante-alighieri para obtener SÓLO EL TÍTULO del libro de Dante Alighieri
app.get('/author/dante-alighieri', (req, res) => {
    const dante = books.find(book => book.author === "Dante Alighieri")
    res.send({title: dante.title})
})   

//country/charles-dickens para obtener SÓLO EL PAÍS del libro de Charles Dickens
app.get('/country/charles-dickens', (req, res) => {
    const dickens = books.find(book => book.author === "Charles Dickens")
    return res.send(dickens.country)
}) 

//year&pages/cervantes para obtener LAS PÁGINAS Y EL AÑO del libro de Miguel de Cervantes, Ejemplo de respuesta: { pages: ..., year: ... }
app.get('/year&pages/cervantes', (req, res) => {
    const miguelCervantes = books.find(book => book.author === "Miguel de Cervantes")
    return res.send({ pages: miguelCervantes.pages, year: miguelCervantes.year })
}) 

//country/count/spain para obtener EL NÚMERO DE LIBROS de España
app.get('/country/count/spain', (req, res) => {
    const spain = books.filter(book => book.country === "Spain")
    if (spain) {
        return res.send(spain)
    }
})

//country/at-least/germany para obtener VERDADERO O FALSO dependiendo de si hay o no un libro de Alemania
app.get('/country/at-least/germany', (req, res) => {
    const germany = books.some(book => book.country === "Germany");
    res.send(germany)
})

//pages/all-greater/200 para obtener VERDADERO O FALSO dependiendo de si todos los libros tienen más de 200 páginas
app.get('/pages/all-greater/200', (req, res) => {
    const pages = books.every(book => book.pages > 200);
    res.send(pages)
})