'use strict'

var Car = require('../models/car');
var mongoosePaginate = require('mongoose-pagination');

function addCar(req, res){
    var car = new Car();
    var params = req.body;

    car.name  = params.name;
    car.model = params.model;
    car.color = params.color;
    car.user = params.user;

    car.save((err, carStored)=>{
        if(err){
            res.status(500).send("Error en la base de datos...");
        }else{
            if(!carStored){
                res.status(404).send({message: 'Error al guardar el carro'});
            }else{
                res.status(200).send({message: 'ok', carStored});
            }
        }
    });
}

function getCars(req, res){
    if(req.params.page){
        var page = req.params.page;
    }else{
        var page = 1;
    }

    var itemsPerPage = 5;

    Car.find().populate({path: 'user'}).paginate(page, itemsPerPage, (err, cars, total)=>{
        if(err){
            res.status(500).send({message: 'Error en la base de datos'});
        }else{
            if(!cars){
                res.status(404).send({message: 'No se encontro ningun carro...'});
            }else{
                res.status(200).send({
                    message: 'ok',
                    total,
                    cars
                });
            }
        }
    });
}

function getCar(req, res){

}

function updateCar(req, res){

}

function deleteCar(req, res){

}



module.exports = {
    addCar,
    getCars,
    getCar,
    updateCar,
    deleteCar
};