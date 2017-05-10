//----------------dependency--------------
var express = require("express");

var router = express.Router();

//Importing the model to use database function
var mlbt = require("../models/mlbtracker.js");

//Creating routes 
router.get("/", function(req, res) {
    
  
});

router.post("/", function(req, res) {
   
});

router.put("/:id", function(req, res) {
   
});

//Export routes for server.js
module.exports = router;