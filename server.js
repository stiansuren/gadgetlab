var express = require('express');
var app = express();
var request = require('superagent');
var bodyParser = require('body-parser');

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
var trelloBaseURL = 'http://api.trello.com';

//Get permission to access my Trello account
var trelloHeader = {'key':'d121cf6f29cf938fd16890234a8d03fa', 'token':'d142d27de0242d5245532fd416c07f84843ce3de64fe75d8d245776fbaa40508'}

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

// Post an element to a checklist on a card in Trello
app.post('/postName', function(req, res) {

	var checkList = trelloBaseURL + '/1/checklists/56def8fa103d4644bb226f4e/checkItems';

	console.log(req.body);

	request
	   .post(checkList)
	   // .set('Content-Type', 'application/json')
	   .query(trelloHeader)
	   .send(req.body)
	   .end(function(_err, _res){
	   		console.log(_res.body);
			res.json(_res.body);
   		});
   	
});







