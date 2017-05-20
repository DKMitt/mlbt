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

  createNewBook: function(val1, val2, val3, val4, val5, callback) {
    console.log(val1, val2, val3, val4, val5);
    orm.create("books", "title", "author", "edition", "ISBN", "publisher", val1, val2, val3, val4, val5, function(res) {
      callback(res);
    });
  },
  //Updating the book status --- available / checkout 
  //should have two button click for available and unavailable 
  updateBook: function(val1, val2, val3, val4, val5, callback) {
    console.log(val1, val2, val3, val4, val5);
    orm.update("books", "title", "author", "edition", "ISBN", "publisher", val1, val2, val3, val4, val5, function(res) {
      callback(res);
    });
  },
  
  delete: function(data, callback) {
    orm.delete("books", data, function(res) {
      callback(res);
    });
  },
  //============USER CHECKING OUT BOOK ===========
  allUser: function(callback) {
    orm.allUser("users", function(res) {
      callback(res);
    });
  },
  createCheckout: function(val1, val2, val3, val4, val5, callback) {
    orm.userCheckout("users", "name", "email", "netID", "checkout_date", "due_date", val1, val2, val3, val4, val5, function(res) {
      callback(res);
    });
  },
  booksTableUpdate: function(val1, val2, callback) {
    console.log("getting the value for the book" + val1 + val2);
    orm.updateBooksTable("books", "books.loanerNetID", val1, "books.id", val2, function(res) {
      callback(res);
    });
  },
  //tableInput, loanerNetID, netID, bookID, userBookChoice
  //=========== Joining user checkout to books=============
  // joiningTables: function(val1, val2, val3, val4, val5, callback) {
  //   console.log();
  //   orm.joinTables("books.title", "users.name", "users.netID", "users.checkout_date", "users.due_date", "books", "users", val1, val2, val3, val4, val5, function(res) {
  //     callback(res);
  //   });
  // }

};
//SELECT books.title, users.name, users.netID, users.checkout_date, users.due_date FROM books INNER JOIN users ON books.id = users.id;

//Exporting the database function for the controller
module.exports = admin;
// module.exports = {
//   admin: admin,
//   user: user
// }

