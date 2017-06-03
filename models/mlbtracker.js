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
  //pulling up all the books
  getbook: function(data, callback) {
    orm.find("books", data, function(res) {
      console.log(res);
      callback(res);
    });
  },
    // The variables cols and vals are arrays.

  createNewBook: function(val1, val2, val3, val4, val5, callback) {
    console.log(val1, val2, val3, val4, val5);
    orm.create("books", "title", "author", "edition", "ISBN", "publisher", val1, val2, val3, val4, val5, function(res) {
      callback(res);
    });
  },
  //Updating the book status --- available / checkout 
  //should have two button click for available and unavailable 
  updateBook: function(bookid, val1, val2, val3, val4, val5, callback) {
    console.log(bookid, val1, val2, val3, val4, val5);
    var bookinfo = {
      title: val1,
      author: val2,
      edition: val3,
      ISBN: val4,
      publisher: val5
    };
    orm.update("books", bookid, bookinfo, function(res) {
  // updateBook: function(val1, val2, val3, val4, val5, callback) {
  //   console.log(val1, val2, val3, val4, val5);
  //   orm.update("books", "title", val1, "author", val2, "edition", val3, "ISBN", val4, "publisher", val5, "id", function(res) {
      callback(res);
    });
  },
  
  delete: function(data, callback) {
    orm.delete("books", data, function(res) {
      callback(res);
    });
  },
  //============Admin checking out books for users ===========
  allUser: function(callback) {
    orm.allUser("checkout", function(res) {
      callback(res);
    });
  },

  createCheckout: function(val1, val2, val3, val4, val5, val6, callback) {
    orm.userCheckout("checkout", "name", "email", "netID", "book_id", "checkout_date", "due_date", val1, val2, val3, val4, val5, val6, function(res) {
      callback(res);
    });
  }
};
//Exporting the database function for the controller

module.exports = admin;

