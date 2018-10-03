import bodyParser = require('body-parser')
import express = require('express')
import http = require('http')
import { Router } from 'express'
import { routes } from './api/routes'


const app = express()
const server = http.createServer(app)


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes(Router()))

server.listen(3000, () => {
	console.log(('  App is running at http://localhost:%d in %s mode'), 3000, app.get('env'))
	console.log('   Press CTRL-C to stop\n')
})
