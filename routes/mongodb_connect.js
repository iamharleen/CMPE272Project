/**
 * New node file
 */
var mongodb = require('mongodb');
url='mongodb://anshul2117@gmail.com:anshul21@oceanic.mongohq.com:10055/data272'
 

var db;
function temp(callback)
{ 
//The 10056 is the port!
db = new mongodb.Db('data272', new mongodb.Server('oceanic.mongohq.com', 10055, {auto_reconnect:true}), {});
 
db.open(function(err, p_client) {
  //Notice the USERNAME and PASSWORD!
  db.authenticate('test', 'test', function(err) {
   //Change error handler when going into production 
   if (err) console.log(err);
    
    var collection = new mongodb.Collection(db, 'data');
    var total_funds;
    var total_sample_data;
    
    var mapFunction = function() {
        emit(this.name, this.pay);
    };
    var reduceFunction = function(key, value) {
        return Array.sum(value);
    };
    
    collection.mapReduce(
            mapFunction,
            reduceFunction,
            { out: "total_sample_data" }, function(err, docs) {
                //In an array, this will log all your documents you added before we tested this
            	if (err) console.log(err);
            	console.log("funds  " + total_funds);
            	
            });
    
/*
    collection.find({"Awardee": "SAN JOSE STATE UNIVERSITY RESEARCH FOUNDATION"}).toArray(function(err, docs) {
      //In an array, this will log all your documents you added before we tested this
    	if (err) console.log(err);
    	var name = docs[0].Agency;
    	var funds_totals;
      console.dir(docs);*/
      
    });
  });
//});
}

/*
var map = function() {  emit( this.t12_group , 1) ; };
var reduce = function(key, vals) {
     var sum = 0; 
     for(var i in vals ) sum += parseFloat(vals[i]); 
     return sum;
};
var options = {query:where};
var execute = function(err, collection) {// callback
    if (collection){
    	collection.find({"Agency": "NASA"} , function(err, cursor) {
            cursor.toArray(function(err, items) {
                callback(items);
                collection.drop();
            })
        });
    }
};
this.collection.mapReduce(map , reduce , options , execute);

*/


exports.temp = temp;