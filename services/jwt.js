'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'Getinsoft1234'; //Cualquier cadena funciona

exports.createToken = (user)=>{
    var payload = {
        sub: user._id,
        name: user.name,
        email: user.email,
        iat: moment().unix(),
        exp: moment().add(10,'days').unix()
    };

    return jwt.encode(payload, secret);
};