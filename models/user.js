'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    email: {type: String, unique: true, required: true},
    password: String,
    cars : [{type: Schema.ObjectId, ref: 'Car'}]
});



module.exports = mongoose.model('User', UserSchema);