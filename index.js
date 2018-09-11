// require packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

//configure app
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: "makers makers makers",
  resave: false,
  saveUninitialized: true
}));

//define routes
app.get("/", function (req, res) {
  res.render("homepage");
});

app.post("/user/new", function (req, res) {
  var params = req.body;

  res.redirect("/users");
});

app.get("/users", function(req, res) {
  res.render("users");
});

app.listen(3000, function () {
  console.log('Server started!');
});