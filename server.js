const express = require('express');
const app = express()
const port = 3000

const books = [
    {id: 1, title: 'Harry Potter', author: 'J.K Rowling'},
    {id: 2, title: 'Harry Potter e a camara secreta', author: 'J.K Rowling'}
]

app.get('/', (req, res) => {
  res.send('API-BOOL está funcionando!')
})

app.get('/books', (req, res) => {
  res.json(books)
})

app.get('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id)
    const book = books.find(b => b.id === bookId)
    res.json(book)
    
} )

app.listen(port, ()=> {
    console.log(`TA funcionando`)
})