const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(bodyParser.json())

app.get('/', (request,response,next) => {
    response.send('Hell has frozen over')
})

app.use((error, request, response, next) => {
    console.error(error.stack)
    response.status(400).send('Go back!')
})

module.exports = app