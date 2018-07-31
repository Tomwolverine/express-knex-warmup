const app = require('./app')
const port = process.env.Port || 3000;

app.listen(port,() => {
    console.log(`I am listening on ${port}`)
})