// app/models/user.js
// load the things we need
var mongoose = require('mongoose');


// define the schema for our user model
var dataSchema = mongoose.Schema({
    local            : {
        
        name:String
       

    }

});



// create the model for users and expose it to our app
module.exports = mongoose.model('Data', dataSchema);









