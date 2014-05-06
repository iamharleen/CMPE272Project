
/*
 * GET users listing.
 */

/**
 * New node file
 */
var mongodb = require('mongodb');
url='mongodb://admin:admin@oceanic.mongohq.com:10021/Database-272'
 

var db;
var results = [];
function createGraph(callback, value)
{ 
//The 10056 is the port!
db = new mongodb.Db('Database-272', new mongodb.Server('oceanic.mongohq.com', 10021, {auto_reconnect:true}), {});
 
db.open(function(err, p_client) {
  //Notice the USERNAME and PASSWORD!
  db.authenticate('admin', 'admin', function(err) {
   //Change error handler when going into production 
   if (err) console.log(err);
   else
	   {
    var collection1 = new mongodb.Collection(db, 'total_funds_2007');
    var collection2 = new mongodb.Collection(db, 'total_funds_2008');
    var collection3 = new mongodb.Collection(db, 'total_funds_2009');
    var collection4 = new mongodb.Collection(db, 'total_funds_2010');
    var collection5 = new mongodb.Collection(db, 'total_funds_2011');
    var collection6 = new mongodb.Collection(db, 'total_funds_2012');
    var collection7 = new mongodb.Collection(db, 'total_funds_2013');
    
    
    
    var univ = "SAN JOSE STATE UNIVERSITY RESEARCH FOUNDATION";
    var i,j  
    collection1.findOne({"_id": univ}, function (err, user) {
        var value = user.value;
        results.push([2007, value]);        
        callback(err,results);
    });
    collection2.findOne({"_id": univ}, function (err, user) {
    	var value = user.value;
        results.push([2008, value]);        
        callback(err,results);
    });
    collection3.findOne({"_id": univ}, function (err, user) {
    	var value = user.value;
        results.push([2009, value]);        
        callback(err,results);
    });
    collection4.findOne({"_id": univ}, function (err, user) {
    	if(user)
    	{}
    	else
    		{   		
            results.push([2010, 0]);                  
    		}   
    callback(err,results);
    });
    collection5.findOne({"_id": univ}, function (err, user) {
    	var value = user.value;
        results.push([2011, value]);        
        callback(err,results);
    });
    collection6.findOne({"_id": univ}, function (err, user) {
    	var value = user.value;
        results.push([2012, value]);        
        callback(err,results);
    });
    collection7.findOne({"_id": univ}, function (err, user) {
    	var value = user.value;
        results.push([2013, value]);        
        callback(err,results);
    });
	   }   
callback(err,results);
  });
  callback(err,results);
});

}


exports.createGraph = createGraph;