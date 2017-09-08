'use strict'

var express = require('express');
var userController = require('../controllers/userController');
var md_auth = require('../middleware/authenticated');


var api = express.Router();

//rutas del controlador
api.get('/prueba', userController.prueba);
api.get('/users/:page?', md_auth.ensureAuth, userController.getUsers);
api.get('/cars/:id', md_auth.ensureAuth, userController.getCars);

api.post('/', userController.saveUser);
api.post('/login', userController.login);

api.put('/update/:id', md_auth.ensureAuth, userController.updateUser);
api.delete('/delete/:id', md_auth.ensureAuth, userController.deleteUser);
module.exports = api;