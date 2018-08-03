const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const queries = require('./queries.js')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (request,response,next) => {
    queries.allStudents()
    .then(getAllStudents => {
        response.json(getAllStudents)
    })
        .catch(next)
})

app.get('/:id', (request,response,next) => {
    queries.studentsById(parseInt(request.params.id))
    .then((studentId) => {
        response.json({studentId})
    })
        .catch(next)
})

app.post('/', (request, response, next) => {
    queries.addStudent(request.body)
    .then((newStudent) => {
        response.status(201).json({newStudent})
    })
        .catch(next)
})

app.delete('/:id', (request, response,next) => {
    queries.dropStudent(parseInt(request.params.id))
    .then(() =>  response.status(200))
        .catch(next)
})

app.put('/:id', (request, response, next) => {
    queries.upDateStudent(request.params.id, request.body)
    .then(student => response.json({student})
        .catch(next))
})

app.use((error, request, response, next) => {
    console.error(error.stack)
    response.status(400).send('Go back!')
})

module.exports = app