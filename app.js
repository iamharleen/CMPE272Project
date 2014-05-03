//defining variables
var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  ,	ejs = require("ejs")
  , mongo = require('./routes/mongodb_connect');


var app = express();
app.use(express.cookieParser());

//defining variables which will be used to post values to client
var title = 'Amazong Store';
var data = 'Shop items';
var output1 = '';
var output2 = '';
var output3 = '';



// all environments
app.set('port', process.env.PORT || 4242);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'public/stylesheets')));
app.use(express.static(path.join(__dirname, 'views')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//defining variables which will be used to post values to client
var title = 'University Research Analysis';
var data = 'Analyse Graphs';
var output1 = '';
var output2 = '';
var output3 = '';

/**
 * This get method renders home page to user where user can view different options of website
 * 
 * @param request, response
 *            
 * @return Nothing.
 */
app.get('/', function(req, res, results) {
	ejs.renderFile('./views/index.ejs',
			{title : title, data : data, output1 : output1},
			function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});

});

app.get('/services', function(req, res, results) {
	ejs.renderFile('./views/services.html',
			{title : title, data : data, output1 : output1},
			function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});

});

app.get('/about', function(req, res, results) {
	ejs.renderFile('./views/about.html',
			{title : title, data : data, output1 : output1},
			function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});

});

app.get('/contact', function(req, res, results) {
	ejs.renderFile('./views/contact.html',
			{title : title, data : data, output1 : output1},
			function(err, result) {
		// render on success
		if (!err) {
			res.end(result);
		}
		// render or error
		else {
			res.end('An error occurred');
			console.log(err);
		}
	});

});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
