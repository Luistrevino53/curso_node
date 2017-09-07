'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar rutas
var userRoutes = require('./routes/userRoutes');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Rutas base
app.use('/api/user', userRoutes);



module.exports = app;