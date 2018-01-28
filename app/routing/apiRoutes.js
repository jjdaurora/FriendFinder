var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.get("/api/friends", function(req, res) {
  res.json(friends)
});

app.post("/api/friends", function(req, res){
  var newFriend = req.body;
  console.log(newFriend);
  friends.push(newFriend);
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
