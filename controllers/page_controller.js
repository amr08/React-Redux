const express = require("express");
const dotenv = require("dotenv").config();
const router = express.Router();
const path = require("path");
const Zendesk = require('zendesk-node-api');

const zendesk = new Zendesk({
  url: process.env.ZENDESK_URL, 
  email: process.env.ZENDESK_EMAIL, 
  token: process.env.ZENDESK_API_TOKEN 
});

// // //Landing
router.get("/", function(req, res){
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

router.get("/callback", function(req, res){
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

router.get("/home", function(req, res){
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});

//Post Ticket to Zendesk
router.post("/home/submit", function(req,res) {
  console.log(req.body.subject)

  zendesk.tickets.create({
    subject: req.body.subject, 
    comment: { 
    body: req.body.body 
  }
  }).then(function(result){
    return result == true 
  })  
});

//Display tickets
router.get("/api", function(req,res) {
   zendesk.tickets.list().then(function(tickets){
    res.send(tickets);
  });
})


router.get("*", function(req, res){
  res.sendFile(path.resolve(__dirname, "../public", "index.html"));
});



module.exports = router;
