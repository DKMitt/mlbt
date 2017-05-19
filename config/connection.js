// Loads mySql Module
var mysql = require("mysql");

// mySQL Connection
var connection = mysql.createConnection({
	//destination port number
	port: 3306,
	host: "localhost",
	user: "root",
	password: "",
	database: "msebooks"
});

// Makes connection and outputs to CLI
connection.connect(function(err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("Connected as ID: " + connection.threadId);
	console.log(" ");
	console.log("----------------------------- ");
});

// Export connection for our ORM to use.
module.exports = connection;