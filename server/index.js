const express = require('express')
const getProducts = require('./getProducts')


const app = express()
const SERVER_PORT = 4296


app.get(`/api/products`, (req, res) => {
    res.status(200).send(products)
})

app.listen(SERVER_PORT, () =>console.log(`listening on port ${SERVER_PORT}`))

