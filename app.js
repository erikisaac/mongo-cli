var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  
// ALL CHOICE PROMPT  
  // var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  // if(allChoice == "all"){
  //   collection.find().toArray(function(err, doc){
  //     console.log(doc);
  //   });
  // } else {
  //   console.log("Aw, you don't want to see the restaurants?");
  // }

// ONE CHOICE PROMPT
//   var oneChoice = prompt("Type a restaurant name and press enter to display that restaurant: ");
//   collection.find({name: oneChoice}).forEach( function(myDoc) { console.log(myDoc); } );


// INSERT PROMPT
var newName = prompt("Enter a new restaurant name: ");
collection.insertOne({name: newName}, function(){console.log(newName);});

var newStreet = prompt("Enter " + newName + "'s street address: ");
collection.insertOne({name: newStreet}, function(){console.log(newStreet);});

var newZipcode = prompt("Enter " + newName + "'s zipcode: ");
collection.insertOne({name: newZipcode}, function(){console.log(newZipcode);});

var newYelp = prompt("Enter " + newName + "'s Yelp URL: ");
collection.insertOne({name: newYelp}, function(){console.log(newYelp);});


});