'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarSchema = Schema({
    name : String,
    model: String,
    color: String
});
module.exports = mongoose.model('Car', CarSchema);