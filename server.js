//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var PORT = process.env.PORT || 3000;

//Serve static content from public directory
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

//override with POST having ?_method=DELETE / =PUT
app.use(methodOverride("_method"));

//Setting up Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Importing routes
var routes = require("./controllers/mlbtracker_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
    console.log("Server Operational");
    console.log(" ");
    console.log("Listening on port: " + 3000);
	console.log(" ");
	console.log("----------------------------- ");
});