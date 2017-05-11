//Importing MySQL connection
var connection = require("../config/connection.js");


//ORM Object for SQL Statement functions
var orm = {
    //Selecting all for SQL Statement
    selectAll: function(tableInput, callback) {
        var query = "SELECT * FROM ??";
        connection.query(query, [tableInput], function(err, result) {
            if (err) {
                throw err;
            }
            callback(result);
            console.log("Select All Completed");
        });
    }
    


    
};

//Exporting ORM object for model
module.exports = orm;


