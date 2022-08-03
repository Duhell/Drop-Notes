const express = require('express')
const route = express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')

//get
route.get('/', services.home)
route.get('/add', services.add_note)
route.get('/update', services.update_note)


//api
route.post('/api/note',controller.create)
route.get('/api/note',controller.find)
route.put('/api/note/:id',controller.update)
route.delete('/api/note/:id',controller.delete)

module.exports = route