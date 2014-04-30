// app/models/user.js
// load the things we need
var mongoose = require('mongoose');


// define the schema for our user model
var award_2007schema = mongoose.Schema({
    local            : {
        id       : String,
        awardee     : String,
        Funds     : String,
        Agency   : String,
        Program   : String,
        City    : String,
        Zip     : Number,
       

    }

});



// create the model for users and expose it to our app
module.exports = mongoose.model('Data', award_2007Schema);









