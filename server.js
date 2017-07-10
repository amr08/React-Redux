"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");

let app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

//bring in global css/js/html
app.use(express.static(__dirname + "/public"))


var routes = require('./controllers/page_controller.js');
app.use('/', routes);

//Port Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
