'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/ejemplo_crud', (err, res)=>{
    if(err){
        throw err;
    }else{
        console.log("La base de datos esta corriendo correctamente");

        app.listen(port, ()=>{
            console.log("El servidor de express esta escuchando en http://localhost:"+port);
        });
    }
});