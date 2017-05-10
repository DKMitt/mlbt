//MySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", // need to fill this in
    database: ""  // need to fill this in
});

//Establishing connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//Exporting connection
module.exports = connection;