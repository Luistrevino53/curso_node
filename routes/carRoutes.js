'use strict'

var express = require('express');
var carController = require('../controllers/carController');
var md_auth = require('../middleware/authenticated');


var api = express.Router();

api.post('/', carController.addCar);
api.get('/cars', md_auth.ensureAuth, carController.getCars);


module.exports = api;