const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex')
const cors = require('cors');
const app = express();
const port = process.env.Port || 9000;

app.use(cors())
app.use(bodyParser.json())
app.use(knex())

app.get('/', (request,response,next) => {
    response.send('Hi')
})

app.listen(port,() => {
    console.log(`I am listening on ${port}`)
})
module.exports = app