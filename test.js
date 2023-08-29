const express = require('express')

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
  res.send("Hello! I'm Esmail")
})

app.listen(PORT, () => {
  console.log(`App is listening on PORT: ${PORT}`)
})