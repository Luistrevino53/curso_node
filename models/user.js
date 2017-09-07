'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,
    email: {type: String, unique: true, required: true},
    password: String
});

module.exports = mongoose.model('User', UserSchema);