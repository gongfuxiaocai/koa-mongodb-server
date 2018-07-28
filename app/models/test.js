const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema( {
    name: String,
    age: Number,
    phoneNumber: Number
} );

const Test = mongoose.model( "test", TestSchema );

module.exports = Test;