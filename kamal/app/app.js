var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongodb');

//navigate to html page
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');	
});

app.post('/update', function(req, res)  {
  console.log(req)
})

app.listen(3000, function(){
	console.log('Server listening on http://localhost:3000/');	
});
