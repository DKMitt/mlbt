//Importing the ORM to create functions to interact with the database
var orm = require("../config/orm.js");

var admin = {
  all: function(cb) {
    orm.all("books", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  createNewBook: function(cols, vals, cb) {
    orm.create("books", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("books", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("books", condition, function(res) {
      cb(res);
    });
  }
};

var user = {
  all: function(cb) {
    orm.all("books", function(res) {
      cb(res);
    });
  },

  //user need to send a request to admin for the books ---notification
};

//Exporting the database function for the controller
module.exports = {
  admin: admin,
  user: user
}
