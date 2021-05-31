const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    Firstname: { type: String, required: true },
    Lastname:{type:String},
    age: {type: Number},
    Email:{type:String},

});

module.exports = Person = mongoose.model('user', userShema)
