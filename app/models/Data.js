// app/models/user.js
// load the things we need
var mongoose = require('mongoose');


// define the schema for our user model
var data272chema = mongoose.Schema({
    local            : {
        email        : String,
        userType     : String,
        password     : String,
        expireDate   : Date,
        createDate   : Date,
        firstName    : String,
        lastName     : String,
        phone        : String,
        zipcode      : String,
        city         : String,
        state        : String,
        checkedOutCopy  : Number,
        availableCopy   : Number,
        balance      :  Number,
        address      : String

    }

});



// create the model for users and expose it to our app
module.exports = mongoose.model('Data', data272Schema);









