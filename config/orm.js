//Importing MySQL connection
var connection = require("../config/connection.js");


//ORM Object for SQL Statement functions
var orm = {
    //Selecting all for SQL Statement
    all: function(tableInput, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    // limited: function(tableInput, colName, vals, callback) {
    //     var queryString = "SELECT * FROM ??";
    //     connection.query(queryString, [tableInput, colName, vals], function(err, result) {
    //         if (err) {
    //             throw err;
    //         }
    //         callback(result);
    //     });
    // },

    //Inserting a new item for SQL Statement
    create: function(tableInput, colName, vals, callback) {
        var queryString = "INSERT INTO ?? ( ?? ) VALUES (?)";
        connection.query(queryString, [tableInput, colName, vals], function(err, result) {
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
};

//Exporting ORM object for model
module.exports = orm;
console.log(orm);



