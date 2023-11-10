const express = require('express')

const app = express()

const port = 3000


app.listen(port, () => {
    console.log('Server started')
})


app.get('/', (req, res) => {

    res.send('Hello guys!')

})

app.get('/login', (req, res) => {

    res.send('LOGIN PAGE')

})

