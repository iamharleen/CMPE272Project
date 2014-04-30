// app/routes.js

var Data = require('../app/models/Data');


app.get('/enter', isLoggedIn, function (req, res) {
    res.render('chartPage.ejs'); // load the index.ejs file
});
