//----------------Dependencies--------------
var express = require("express");

var router = express.Router();

//Importing the model to use database function
var mlbt = require("../models/mlbtracker.js");
// var user = mlbt.user;  // only redering full catalog from admin
// var admin = mlbt.admin;


//=================
//====USER=========
//=================
//Creating routes for index 
router.get("/", function(req, res) {
   mlbt.all(function(data) {
    var booksObject = {
      books: data
    };
    console.log(booksObject);
    res.render("index", booksObject);
  }); 
});

//=================
//====ADMIN======== 
//=================

router.get("/admin", function(req, res) {
   mlbt.all(function(data) {
    var booksObject = {
      books: data
    };
    res.render("checkout", booksObject);
  }); 

});


// router.update("/admin:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   mlbt.update({
//     books: req.body.books
//   }, condition, function() {
//     res.redirect("/");
//   });
// });


router.delete("/:id", function(req, res) {
  console.log("got here");
  var condition = "id = " + req.params.id; //1; DROP ALL TABLES; 
  var data = {id: req.params.id}
  console.log(req.params.id);
  mlbt.delete(data, function() {
    res.redirect("/admin");
  });
});


//  Book CRUD --- adding book

router.get("/crud", function(req, res) {
    res.render("bookcrud");
}); 


router.post("/crud", function(req, res) {

  mlbt.createNewBook(
    req.body.bTitle,
    req.body.bAuthor,
    req.body.bEdition,
    req.body.bISBN,
    req.body.bpublisher,
    function() {
      res.redirect("/admin");
    }
  );
});


//  Book Checkout --- checking out the book 

router.get("/checkout", function(req, res) {
   mlbt.allUser(function(data) {
    var userObject = {
      users: data
    };
    res.render("bookcheckout", userObject);
  }); 

});


router.post("/checkout", function(req, res) {

  
  res.redirect("/admin");
});

//  User CRUD 

router.get("/usercrud", function(req, res) {

    res.render("usercrud");
});



//=================

//Export routes for server.js
module.exports = router;
