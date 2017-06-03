// Setup mysql connection
var mysql = require("mysql");

// mySQL Connectionz
var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "password",
	database: "msebooks"
});
// Makes connection and outputs to CLI
connection.connect(function(err) {
if (err) {
console.error("error connecting: " + err.stack);
return;
}
console.log("connected as id: " + connection.threadId);
console.log(" ");
console.log("----------------------------- ");
});
// Export connection for our ORM to use.
module.exports = connection;


