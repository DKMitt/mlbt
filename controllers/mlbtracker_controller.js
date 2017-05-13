//----------------dependency--------------
var express = require("express");

var router = express.Router();

//Importing the model to use database function
var mlbt = require("../models/mlbtracker.js");

//Creating routes 
router.get("/", function(req, res) {
  mlbt.all(function(data) {
    var booksObject = {
      books: data
    };
    console.log(booksObject);
    res.render("index", booksObject);
  }); 
});

// router.post("/", function(req, res) {
//   console.log(req.body.books);
//   mlbt.create([
//     req.body.books
//   ], function() {
//     res.redirect("/");
//   });
// });

// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   mlbt.update({
//     books: req.body.books
//   }, condition, function() {
//     res.redirect("/");
//   });
// });


// router.delete("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   mlbt.delete(condition, function() {
//     res.redirect("/");
//   });
// });


//Export routes for server.js
module.exports = router;