// Express
var express = require('express');
var app = express();


// Import Api files
var ContentAPI = require('./ContentAPI.js');




app.get('/', function(req, res){
	res.send("lol");	  
});



// Blog
app.get('/how/', function(req, res){
	console.log("how");
		ContentAPI.get('how', function(response) {
			response = JSON.stringify(response);
			res.send(response);
		});
});




app.listen(3001);
console.log('Listening on port 3001');
