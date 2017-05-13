// setup mysql connection
var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
<<<<<<< HEAD
	password: "",
=======
	password: "DKMitt!#!#1313",
>>>>>>> f1ebe5a49af6e60acf8b25100e6528c3390c2d4a
	database: "msebooks"
});

// makes connection 
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log(" ");
	console.log("connected as id: " + connection.threadId);
	console.log(" ");
});

// Export connection for our ORM to use.
module.exports = connection;