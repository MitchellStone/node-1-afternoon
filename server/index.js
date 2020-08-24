const express = require('express')
const products = require('../products.json')


const app = express()
const SERVER_PORT = 4296

app.listen(SERVER_PORT, () =>console.log(`listening on port ${SERVER_PORT}`))

