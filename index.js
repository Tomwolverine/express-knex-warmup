const app = require('./app')
const port = parseInt(process.env.PORT || 5000);

app.listen(port,() => {
    console.log(`I am listening on ${port}`)
})