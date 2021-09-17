var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();

console.log("Hello World");

app.use(function(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get("/json", function(req, res) {
  var jsonResponse = { "message": "Hello json" };

  if (process.env.MESSAGE_STYLE === "uppercase") {
      jsonResponse.message = jsonResponse.message.toUpperCase()
    }
    res.json(jsonResponse);
});





























 module.exports = app;
