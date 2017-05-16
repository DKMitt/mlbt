//Importing the ORM to create functions to interact with the database
var orm = require("../config/orm.js");


/* admin have the authority : CRUD command*/
var admin = {
  //pulling up all the books
  all: function(callback) {
    orm.all("books", function(res) {
      callback(res);
    });
  },
  // The variables cols and vals are arrays.
  // createNewBook: function( callback) {
  //   orm.create("books", ["title", "author", "edition", "ISBN", "publisher"], [val1, val2, val3, val4, val5], function(res) {
  //     callback(res);
  //   });
  // },

  createNewBook: function(val1, val2, val3, val4, val5, callback) {
    orm.create("books", "title", "author", "edition", "ISBN", "publisher", val1, val2, val3, val4, val5, function(res) {
      callback(res);
    });
  }
  //Updating the book status --- available / checkout 
  //should have two button click for available and unavailable 
  // NEED TO HAVE DATE
  // updateBookStatus: function(update, colID, cb) {
  //   orm.update("books", "status", update, "id" function(res) {
  //     cb(res);
  //   });
  // },//
  
  // // delete: function(condition, cb) {
  // //   orm.delete("books", condition, function(res) {
  // //     cb(res);
  // //   });
  // // }
};


var user = {
  // limited: function(cb) {
  //   orm.limited("books", ["title", "author", "status"], function(res) {
  //     cb(res);
  //   });
  // },

  //user need to send a request to admin for the books ---notification ///email
};

//Exporting the database function for the controller
module.exports = {
  admin: admin,
  user: user
}

// exports.admin = admin;
// exports.user = user;