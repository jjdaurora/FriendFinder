var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var apiRoutes = require("/app/routing/apiRoutes")(app);
var apiRoutes = require("/app/routing/htmlRoutes")(app);

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function (newFriend) { 

}


app.listen(port, function() {
  console.log("App listening on PORT " + PORT);
});