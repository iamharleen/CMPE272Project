// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
//var passport = require('passport');
var flash = require('connect-flash');




// routes ======================================================================
//use mongodb only
require('./app/routes.js')(app, passport);
var configDB = require('./config/database.js');
mongoose.connect(configDB.url); // connect to our database
var db = mongoose.connection;



// launch ======================================================================
app.listen(port);
console.log('Listening to: ' + port);
