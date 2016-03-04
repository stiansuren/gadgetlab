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

t.get("/1/members/me", function(err, data) {
if (err) throw err;
console.log(data);
});

// URL arguments are passed in as an object.
t.get("/1/members/me", { cards: "open" }, function(err, data) {
if (err) throw err;
console.log(data);
});