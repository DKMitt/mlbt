//----------------Dependencies--------------
var express = require("express");
var router = express.Router();
//Importing the model to use database function
var mlbt = require("../models/mlbtracker.js");


//=======================
//====USER/Index=========
//=======================
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
//===========================Admin page==========================
router.get("/admin", function(req, res) {
   mlbt.all(function(data) {
    var booksObject = {
      books: data
    };
    res.render("checkout", booksObject);
  }); 

});
router.put("/:id", function(req, res) {
	var data = {id: req.params.id};
	console.log(req.params.id);
	mlbt.getbook(data, function(bookdata) {
	res.render("bookedit", bookdata[0]);
	});
});
router.post("/edit", function(req, res) {
	var data = {id: req.body.id};
	console.log("--------------------------")
	console.log(req.body.id);
	console.log(req.body.bTitle);
	console.log(req.body.bAuthor);
	console.log(req.body.bISBN);
	mlbt.updateBook(data,
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
router.delete("/:id", function(req, res) {
  var data = {id: req.params.id};
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
res.render("bookcheckout");
});
router.post("/checkout", function(req, res) {
	console.log(Object.keys(req.body))
	mlbt.createCheckout(
		req.body.name,
		req.body.email,
		req.body.netID,
		req.body.bookID,
		req.body.checkout_date,
		req.body.due_date,
		function() {
		res.redirect("/usercrud");
		}
	);
});

//UPDATE users and books tables  
router.put("/:id", function(req, res) {
  var data = {id: req.params.id};
   console.log(req.params.id);
    mlbt.booksTableUpdate(data,
    function() {
      res.redirect("/usercrud")
    })
});

//  User CRUD 

router.get("/usercrud", function(req, res) {
	mlbt.allUser(function(data) {
		console.log(data)
		var checkoutUserObject = {
		checkout: data
		};
		// console.log(userObject);
	res.render("usercrud", checkoutUserObject);
	});
});



//=================
//Export routes for server.js
module.exports = router;