var express = require('express');
var app = express();
var request = require('superagent');
var bodyParser = require('body-parser');

// Only for local development
if (process.env.TRELLO_KEY == null){
	var trello = require('./trelloKeys');
};

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// use body-parser to populate json request bodies
app.use(bodyParser.json());

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(port, function() {
    console.log('Gadgetlab is running on http://localhost:' + port);
});

// Trello api

// Base URL to be added to every HTTP-request
var trelloBaseURL = 'https://api.trello.com';

//Get permission to access my Trello account
var trelloHeader = {'oauth_consumer_key': process.env.TRELLO_KEY || trello.keys.trelloKey, 'oauth_token': process.env.TRELLO_TOKEN  || trello.keys.trelloToken, 'secret': process.env.TRELLO_SECRET  || trello.keys.trelloSecret};

// Get all cards the Tilgjengelig list from Trello
app.get('/trelloCards', function(req, res) {

	var cards = trelloBaseURL + '/1/lists/56a27fb6a5d9d612e1c88341/cards';

	request
	   .get(cards)
	   .set('Content-Type', 'application/json')
	   .query(trelloHeader)
	   .end(function(_err, _res){
			res.json(_res.body);
   		});

});

app.get('/currentLoaner/:id', function(req, res) {

	var cards = trelloBaseURL + '/1/checklists/' + req.params.id;

	request
	   .get(cards)
	   .set('Content-Type', 'application/json')
	   .query(trelloHeader)
	   .end(function(_err, _res){
			res.json(_res.body);
   		});
});

// Post an element to a checklist on a card in Trello
app.post('/postName/:id', function(req, res) {

	// var checkList = trelloBaseURL + '/1/checklists/' + req.params.id + '/checkItems';
	var checkList = trelloBaseURL + '/1/checklists/' + 	'554893f3ec75cd43c2bab97c' + '/checkItems';

	var person = [];
	person.name = 'Stini';

	console.log(checkList);
	console.log(person);

	var personJSON = JSON.stringify(person);
	console.log(personJSON);


	request
	   .post(checkList)
	   .send({'name': 'Stian'})
	   .query(trelloHeader)
	   .end(function(_err, _res){
			res.json(_res.body);
			console.log('Response is ' + _res.body);
   		});

});

app.get('/getRetningslinjer', function(req,res){

	var card = trelloBaseURL + '/1/card/' + '576bf891e161d28f4efd7d1a';

	request
		.get(card)
		.set('Content-Type', 'application/json')
		.query(trelloHeader)
		.end(function(_err, _res){
			res.json(_res.body);
			console.log('Response is ' + _res.body);
		});
});

app.get('/getEmail', function(req,res){

	var checkList = trelloBaseURL + '/1/checklists/' + 	'58970926b504e80b5d4201f6' + '/checkItems';

	request
		.get(checkList)
		.set('Content-Type', 'application/json')
		.query(trelloHeader)
		.end(function(_err, _res){
			res.json(_res.body);
			console.log('Response is ' + _res.body);
		});
});
