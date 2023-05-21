const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
    res.senFile(path.resolve('index.html'))
})

app.listen(3005, () => {
    console.log('app en el puerto 3005')
})