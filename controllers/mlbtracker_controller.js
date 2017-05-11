//----------------dependency--------------
var express = require("express");

var router = express.Router();

//Importing the model to use database function
var mlbt = require("../models/mlbtracker.js");

//Creating routes 
router.get("/", function(req, res) {
  book.all(function(data) {
    var hbsObject = {
      books: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  }); 
});

router.post("/", function(req, res) {
  book.create([
    "name", "book"
  ], [
    req.body.name, req.body.book
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  book.update({
    book: req.body.book
  }, condition, function() {
    res.redirect("/");
  });
});


router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  book.delete(condition, function() {
    res.redirect("/");
  });
});


//Export routes for server.js
module.exports = router;