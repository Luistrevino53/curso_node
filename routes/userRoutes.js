'use strict'

var express = require('express');
var userController = require('../controllers/userController');
var md_auth = require('../middleware/authenticated');


var api = express.Router();

//rutas del controlador
api.get('/prueba', userController.prueba);
api.post('/', userController.saveUser);
api.get('/Users',userController.getUsers);

module.exports = api;