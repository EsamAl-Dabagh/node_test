// require packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-sessions');

//configure app
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({secret: "makers makers makers"}));

//define routes
app.get("/", function (req, res) {
  res.render("homepage");
});

app.post("/user/new", function (req, res) {
  var params = req.session;
  params.name = req.params.name;
  params.property = req.params.property;

  res.redirect("/users");
});

app.get("/users", function(req, res) {
  var name = req.session.name;
  var property = req.session.property;
  res.render("users", {
    name: name,
    property: property
  });
});

app.listen(3000, function () {
  console.log('Server started!');
});