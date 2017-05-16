//----------------Dependencies--------------
var express = require("express");

var router = express.Router();

//Importing the model to use database function
var mlbt = require("../models/mlbtracker.js");
// var user = mlbt.user;  // only redering full catalog from admin
var admin = mlbt.admin;


//=================
//====USER=========
//=================
//Creating routes for index 
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
    res.render("checkout", booksObject);
  }); 
});


//  Book CRUD --- adding book

router.get("/crud", function(req, res) {
    res.render("bookcrud");
}); 


router.post("/crud", function(req, res) {
  console.log("/crud post: " + req.body.books);
  admin.createNewBook([
    req.body.bTitle,
    req.body.bAuthor,
    req.body.bEdition,
    req.body.bISBN,
    req.body.bpublisher
  ], function() {
    res.redirect("/admin");
  });
});

//  Book Checkout --- checking out the book 

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



//  User CRUD 

router.get("/usercrud", function(req, res) {
   admin.all(function(data) {
    console.log(data);
    var usersObject = {
      users: data
    };
    console.log(usersObject);
    res.render("usercrud", usersObject);
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

//Export routes for server.js
module.exports = router;
