var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var connection = require("./config/connection.js");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controllers.js");

app.use("/", routes);

app.listen(PORT, function() {
  	console.log("App listening on port " + PORT);
});