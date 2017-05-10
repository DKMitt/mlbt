// setup mysql connection
var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "",
	database: ""
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
	console.log("Listening on port: " + 3000);
	console.log(" ");
	console.log("----------------------------- ");
});