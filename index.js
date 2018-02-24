
const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./utils/config')

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))

const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

module.exports = {
  app, server
}