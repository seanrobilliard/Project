//require mongoose and connect to the database by requiring util.js
require('./util');
var mongoose = require ('mongoose'); 

//require passport for authentication
var passportLocalMongoose = require("passport-local-mongoose");

//define the user schema
var UserSchema =  new mongoose.Schema ({
     username : String , 
     password: String ,
});

UserSchema.plugin(passportLocalMongoose)

//export user model under the name user
module.exports = mongoose.model('User' , UserSchema); 
 