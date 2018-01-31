var path = require("path");
var bodyParser = require('body-parser')
var friends = require("../data/friends")


module.exports = function (app) { 
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
};

  app.post("/api/friends", function(req, res){
    // var newFriend = req.body;
    var newFriend = { name: "James Garfield", email: "jgarfield@presidents.com", scores: ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"] }; 
    function compareFriends (newFriend) {
      for (let index = 0; index < friends.length; index++) {
        var totalDiff = 0;
        const friendScore = friends[index].scores;
        for (let index = 0; index < friendScore.length; index++) {
          totalDiff += Math.abs(parseInt(friendScore[index]) - parseInt(newFriend.scores[index]));
        }
        console.log(totalDiff);
      }
    }
  });
};

compareFriends(newFriend);
