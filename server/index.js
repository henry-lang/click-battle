require('dotenv').config()
const express = require('express')
const http = require('http')
const path = require('path')
const {Server} = require('socket.io')

const {SERVER_PORT} = process.env

const app = express()
const server = http.createServer(app)
server.listen(3000, () => {console.log(`Server listening on port ${SERVER_PORT}!`)})

app.use('/assets', express.static(path.join(__dirname, '../assets')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../views', 'index.html'))
})

const io = new Server()