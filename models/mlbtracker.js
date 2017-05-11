//Importing the ORM to create functions to interact with the database
var orm = require("../config/orm.js");

var book = {
    all: function(cb) {
    orm.all("books", function(res) {
      cb(res);
    });
};

//Exporting the database function for the controller
module.exports = book;