const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World TURMA!')
})

app.get('/turma', (req, res) => {
  res.send('Me acompanhe nesse teste TURMA!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})