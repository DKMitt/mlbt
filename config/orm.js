//Importing MySQL connection
var connection = require("../config/connection.js");


//ORM Object for SQL Statement functions
var orm = {
    //Selecting all for SQL Statement
    all: function(tableInput, callback) {
        var queryString = "SELECT * FROM ?? ORDER BY title ASC";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },

    //Inserting a new item for SQL Statement
    create: function(tableInput, colname1, colname2, colname3, colname4, colname5, val1, val2, val3, val4, val5, callback) {
        var queryString = "INSERT INTO ?? ( ?? ?? ?? ?? ?? ) VALUES (? ? ? ? ?)";
        connection.query(queryString, [tableInput, colname1, colname2, colname3, colname4, colname5, val1, val2, val3, val4, val5], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    // update: function(tableInput, colName, update, colID, callback) {
    //     var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
    //     connection.query(queryString, [tableInput, colName, update, colID], function(err, result) {
    //         if (err) {
    //             throw err;
    //         }
    //         callback(result);
    //     });
    // }  


      //DELETE
      delete: function (bookID, callback) {
        var query = "DELETE FROM ?? WHERE id=?";

        connection.query(query, function (err, results) {
          if(err) throw err;

          console.log(results); 
          callback(results);
      
      
    });
  }
};

//Exporting ORM object for model
module.exports = orm;
console.log(orm);



