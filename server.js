"use strict";

const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const Zendesk = require('zendesk-node-api');

let app = express();

const PORT = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

const zendesk = new Zendesk({
  url: process.env.ZENDESK_URL, 
  email: process.env.ZENDESK_EMAIL, 
  token: process.env.ZENDESK_API_TOKEN 
});

// // //Landing
app.get("/", function(req, res){
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

//bring in global css/js/html
app.use(express.static(__dirname + "/public"))


app.get("/callback", function(req, res){
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.get("/home", function(req, res){
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.get("/home/submit", function(req, res){
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.get("/home/display", function(req, res){
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});


//Post Ticket to Zendesk
app.post("/home/submit", function(req,res) {
  console.log(req.body.subject)

  zendesk.tickets.create({
    subject: req.body.subject, 
    comment: { 
    body: req.body.body 
  }
  }).then(function(result){
    console.log(result);
    console.log("Ticket Created");
    result == true 
  })  
});

//Display tickets
app.get("/api", function(req,res) {
   zendesk.tickets.list().then(function(tickets){
    res.send(tickets);
    console.log("Tickets obtained from API");
  });
})

//Port Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
