// require packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var cookieSession = require("cookie-session");


//configure app
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cookieSession({
  secret: "makers-makers-makers"
}));

//define routes
app.get("/", function (req, res) {
  res.render("homepage");
});

app.post("/user/new", function (req, res) {
  req.session.name = req.body.name;
  req.session.property = req.body.property;

  res.redirect("/users");
});

app.get("/users", function(req, res, next) {
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