const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userSchema = new Schema({
    email : String,
    password : String
});

module.exports = mongoose.model('user',userSchema,'users');//   (name of model,schema,collection in the database)
