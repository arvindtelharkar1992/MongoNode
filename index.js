var mongodb = require('mongodb');
var uri='mongodb://localhost:27017/example';

mongodb.MongoClient.connect(uri,function(error,db){

  if(error) {
  	console.log(error);
  	process.exit(1);
  } 
  console.log("Connected to mongodb server");


  var doc={
    title: 'Jaws',
    year: '1978',
    rating: '4'
  };

  var doc2={
    title: 'wolf of wall street',
    year: '2014',
    rating: '5'
  };



 db.collection('movies').insert(doc,function(error,result) {

if(error) {
  	console.log(error);
  	process.exit(1);
  }
  });

 db.collection('movies').insert(doc2,function(error,result) {

if(error) {
    console.log(error);
    process.exit(1);
  }
  });



  db.collection('movies').find({year: '2014'}).toArray(function(error,docs) {
  	if(error) {
  	console.log(error);
  	process.exit(1);
  }

   console.log("Found docs");
   docs.forEach(function(doc) {
    console.log(JSON.stringify(doc));
   });
   process.exit(0);

});

});