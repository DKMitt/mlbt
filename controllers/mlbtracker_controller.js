//----------------dependency--------------
var express = require("express");

var router = express.Router();

//Importing the model to use database function
var mlbt = require("../models/mlbtracker.js");
var user = mlbt.user;
var admin = mlbt.admin;
//Creating routes for index 

//=================
//====USER=========
//=================
router.get("/", function(req, res) {
   admin.all(function(data) {
    console.log(data);
    var booksObject = {
      books: data
    };
    console.log(booksObject);
    res.render("index", booksObject);
  }); 
});

// router.post("/", function(req, res) {
//    console.log(req.body);
//   //  admin.createNewBook([req.body.books], function() {
//   //     res.redirect("/");
//   // }); 
//   res.end()
// });


//=================
//====ADMIN======== 
//=================

router.get("/admin", function(req, res) {
   admin.all(function(data) {
    var booksObject = {
      books: data
    };
    console.log(booksObject);
    res.render("checkout", booksObject);
  }); 
});

router.post("/admin", function(req, res) {
  console.log(req.body.books);
  mlbt.create([
    req.body.books
  ], function() {
    res.redirect("/checkout");
  });
});

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


//=================
//====ADMIN======== 
//=================
//  Book Checkout 

router.get("/checkout", function(req, res) {
   admin.all(function(data) {
    console.log(data);
    var booksObject = {
      books: data
    };
    console.log(booksObject);
    res.render("bookcheckout", booksObject);
  }); 
});


//  Book CRUD 

router.get("/crud", function(req, res) {
   admin.all(function(data) {
    console.log(data);
    var booksObject = {
      books: data
    };
    console.log(booksObject);
    res.render("bookcrud", booksObject);
  }); 
});


//  Book Checkout 

router.get("/checkout", function(req, res) {
   admin.all(function(data) {
    console.log(data);
    var booksObject = {
      books: data
    };
    console.log(booksObject);
    res.render("bookcheckout", booksObject);
  }); 
});


//Export routes for server.js
module.exports = router;