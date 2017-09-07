'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'Getinsoft1234';

exports.ensureAuth = (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(403).send({message: 'No tienen autorizacion para consultar de la base de datos'});
    }

    var token = req.headers.authorization.replace(/['"]+/g, '');

    try{
        var payload = jwt.decode(token,secret);
        if(payload.exp <= moment().unix()){
            return res.status(401).send({message: 'El Tocken ha expirado'});
        }
    }catch(ex){
        console.log(ex);
        return res.status(403).send({message: 'El tocken no es valido'});
    }

    req.user = payload;
    next();
}