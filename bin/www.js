const http = require('http')
//const bodyParser = require('body-parser')

const PORT = 8000
const serverHandle = require('../app.js')

const server = http.createServer(serverHandle)
//server.use(bodyParser.urlencoded())
server.listen(PORT)
console.log('starting')