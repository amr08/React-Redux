"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var logger = require("morgan");

let app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

app.use(express.static(__dirname + "/public"))


//Port Listener
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
