var express = require('express');
var app = express();
var Trello = require("node-trello");

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});

//Get permission to access my Trello account
var readToken = 'd142d27de0242d5245532fd416c07f84843ce3de64fe75d8d245776fbaa40508';

var t = new Trello("d121cf6f29cf938fd16890234a8d03fa", readToken);

app.get('/trelloList', function(req, res) {

	var tilgjengeligList = '56a27fb6a5d9d612e1c88341';

   	t.get("/1/lists/" + tilgjengeligList, function(err, data) {
		if (err) throw err;
		res.json (data);
	});

});

app.get('/trelloCards', function(req, res) {

	var cards = '/1/lists/56a27fb6a5d9d612e1c88341/cards';

   	t.get(cards, function(err, data) {
		if (err) throw err;
		res.json (data);
	});

});
