'use strict'

var bcrypt = require('bcrypt-nodejs');
var User = require('../models/user');
var jwt = require('../services/jwt');

function prueba(req, res){
    res.status(200).send({
        message: 'Probando el controlador de usuarios'
    });
};

function saveUser(req, res){
    var user = new User();
    var params = req.body;

    user.name = params.name;
    user.email = params.email;

    if(params.password){
        bcrypt.hash(params.password, null, null, (err, hash)=> {
            user.password = hash;
            if(user.name != null && user.email != null){
                user.save((err, userStored) =>{
                    if(err){
                        res.status(500).send({message: 'Error al guardar el usuario'});
                    }else{
                        if(!userStored){
                            res.status(404).send({message: 'No se registró el usuario'});
                        }else{
                            res.status(200).send({message: 'Usuario Guardado', user: userStored});
                        }
                    }
                });
            }
        });
    }else{
        res.status(500).send({message: 'Introduce la contraseña'});
    }
}

function getUsers(req, res){
    if(req.params.page){
      var page = req.params.page;
    }else{
      var page = 1;
    }
  
    var itemsPerPage = 5;
    User.find().sort('name').paginate(page, itemsPerPage,(err,artists,total)=>{
        if(err){
            res.status(500).send({message: 'Error al conseguir el artista'});
        }else{
          if(!artists){
            res.status(404).send({message: 'No se encuentra los artistas'});
          }else{
            return res.status(200).send({
              message: 'ok',
              total: total,
              artists: artists
            });
          }
        }
    });
  }
module.exports = {
    prueba,
    saveUser,
    getUsers
};
3312543044 // david