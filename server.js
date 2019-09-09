const express = require('express')
const path = require('path')
const list = require('./api/news')

const ip = 'localhost'
const port = process.env.PORT || 3000

const pathToPublic = path.join(__dirname, 'public')
const pathToScripts = path.join(__dirname, 'scripts')

const app = express()

app.use(express.static(pathToPublic))
app.use(express.static(pathToScripts))

app.get('/', function(req, res){
    res.sendFile('index.html')
})

app.get('/list', list)

app.listen(port, ip, () => {
    console.log(`Сервер запущен на http://${ip}:${port}`)
});