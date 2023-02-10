/****************************IMPORT INSTALLED MODULES****************************/
const mongoose = require('mongoose');
const bcrypt   = require("bcryptjs");

/****************************IMPORT CREATED MODULES****************************/
const config   = require("../config/index.js");


/****************************USER SCHEMA****************************/
const UserSchema = mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

/****************************MODEL NAME AND EXPORT****************************/
const User = module.exports = mongoose.model('User', UserSchema);


/****************************CREATE AND EXPORT FUNCTIONS****************************/
module.exports.getUserById = function(id, callback) {
    User.findById(id, callback)
};

module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username}
    User.findOne(query, callback)
};

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
        if(err) {console.log(err)};
        newUser.password = hash;
        newUser.save(callback);
       });
    });
};