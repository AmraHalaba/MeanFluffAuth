/****************************IMPORT INSTALLED MODULES****************************/
const express  = require('express');
const passport = require('passport');
const jwt      = require('jsonwebtoken');

/****************************IMPORT CREATED MODULES****************************/
const user     = require('../models/users.js')


/****************************ROUTER VARIABLE****************************/
const router   = express.Router();


/****************************REGISTER ROUTE****************************/
router.post('/register', (req, res, next) => {
    let newUser = new user({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    user.addUser(newUser, (err, user) => {
        if(err){
           res.json({success: false, msg: 'Failed to register user.'}); 
        } else{
            res.json({ success: true, msg: "New user successfully registered." }); 
        }
    });
});


/****************************AUTHENTICATE ROUTE****************************/
router.post('/authenticate', (req, res, next) => {
    res.send("AUTHENTICATE");
});


/****************************PROFILE ROUTE****************************/
router.get('/profile', (req, res, next) => {
    res.send("PROFILE");
});


/****************************LOGIN ROUTE****************************/
router.get("/login", (req, res, next) => {
    res.send("LOGIN");
});


/****************************EXPORTS****************************/
module.exports = router;
