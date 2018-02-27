
const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./utils/config')
const mongoose = require('mongoose')
const middleware = require('./utils/middleware')
const locationsRouter = require('./controllers/locations')
const observationsRouter = require('./controllers/observations')

mongoose.connect(config.mongoUrl)
mongoose.Promise = global.Promise

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))
app.use(middleware.logger)

app.use('/api/locations', locationsRouter)
app.use('/api/observations', observationsRouter)


const server = http.createServer(app)

server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

app.use(middleware.error)

server.on('close', () => {
  mongoose.connection.close()
})

module.exports = {
  app, server
}