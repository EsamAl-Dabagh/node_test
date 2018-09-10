var express = require('express');
var app = express();

app.get("/", function (req, res) {
  res.send("Hello, World!");
});

app.get("/users/:name/:property", function (req, res) {
  res.send(req.params);
});

app.listen(3000, function () {
  console.log('Server started!');
});