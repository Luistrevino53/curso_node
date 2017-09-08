'use strict'
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar rutas
var userRoutes = require('./routes/userRoutes');
var carRoutes = require('./routes/carRoutes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Rutas base
app.use('/api/user', userRoutes);
app.use('/api/car', carRoutes);


module.exports = app;