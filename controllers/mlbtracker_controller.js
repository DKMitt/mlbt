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


router.put("/:id", function(req, res) {
  var data = {id: req.params.id}
  mlbt.updateBook(data, function() {
    res.redirect("/admin");
  });
});


router.delete("/:id", function(req, res) {
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


// ======================== Book Checkout page===================================

//render the book titles for the drop down
router.get("/checkout", function(req, res) {
   mlbt.all(function(data) {
    var booksObject = {
      books: data
    };
    res.render("bookcheckout", booksObject);
  }); 

});

//render the page and posting user data to mySQL
router.get("/checkout", function(req, res) {

   mlbt.allUser(function(data) {
    var userObject = {
      users: data
    };
    res.render("bookcheckout", userObject);
  }); 

});


router.post("/checkout", function(req, res) {
        console.log("getting the book id of the titles " + req.body.bookTitle);
  mlbt.createCheckout(
      req.body.name,
      req.body.email,
      req.body.netID,
      req.body.checkout_date,
      req.body.due_date,
      function() {
        res.redirect("/usercrud");
      }
  );
});



// UPDATE users and books tables  
router.put("/checkout", function(req, res) {
  console.log(req.body.loanerNetID);
    mlbt.booksTableUpdate(
    req.body.loanerNetID, 
    function() {
      res.redirect("/usercrud")
    })
});

//  User CRUD 

router.get("/usercrud", function(req, res) {
   mlbt.allUser(function(data) {
    var userObject = {
      users: data
    };
    res.render("usercrud", userObject);
  }); 

});

//=================

//Export routes for server.js
module.exports = router;
