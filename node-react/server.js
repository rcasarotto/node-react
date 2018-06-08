var express = require('express');
var server = express();
const request = require('request');

server.listen(8081);

server.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 next();
});

server.get('/',function(req,res){

	var url = "https://api.mercadolibre.com/classified_locations/countries/BR";
	var string;
	request(url,function(error, response, body){
		 if (!error && response.statusCode == 200) {
   		 string = JSON.parse(body);
   		 console.log(string); 
   		 res.send(string);
  		}else{
  			res.send(error);
  		}
});

})

server.get("/state/:id", function(req,res){

	console.log(req.params.id);
	var states = "https://api.mercadolibre.com/classified_locations/states/"+req.params.id;
	var json;
	request(states,function(error, response, body){
		 if (!error && response.statusCode == 200) {
   		 json = JSON.parse(body);
   		 console.log(response.body); 
   		 res.send(json);
  		}else{
  			res.send(error);
  		}
});

})

server.get("/state/cities/:id", function(req,res){

	console.log(req.params.id);
	var states = "https://api.mercadolibre.com/classified_locations/cities/"+req.params.id;
	var json;
	request(states,function(error, response, body){
		 if (!error && response.statusCode == 200) {
   		 json = JSON.parse(body);
   		 console.log(response.body); 
   		 res.send(json);
  		}else{
  			res.send(error);
  		}
});

})

server.get("/state/cities/neighborhoods/:id", function(req,res){

	console.log(req.params.id);
	var states = "https://api.mercadolibre.com/classified_locations/neighborhoods/"+req.params.id;
	var json;
	request(states,function(error, response, body){
		 if (!error && response.statusCode == 200) {
   		 json = JSON.parse(body);
   		 console.log(response.body); 
   		 res.send(json);
  		}else{
  			res.send(error);
  		}
});

})