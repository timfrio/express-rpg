const express = require('express')
const app = express()

app.get('/test', function (req, res) {
    res.send('Hello World12313321414')
})

app.listen(3000)