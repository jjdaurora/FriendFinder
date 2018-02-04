var friends = require("../data/friends");
var path = require("path");
var bodyParser = require("body-parser");

module.exports = function(app) { 

    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    app.post("/api/new", function(req, res){
        
      var newBestFriend = { 
          name: "",
          email: "", 
          difference: 5000 
        };

        var userData = req.body;

        function compareFriends (userData) {

        for (var index = 0; index < friends.length; index++) {
            var totalDiff = 0;
            for (var j = 0; j < friends[index].scores[j]; j++) {
            totalDiff += Math.abs(parseInt(friends[index].scores[j]) - parseInt(userData.scores[j]));
                if (totalDiff <= newBestFriend.difference) {
                    newBestFriend.name = friends[index].name;
                    newBestFriend.email = friends[index].email;
                    newBestFriend.difference = totalDiff;
                    };
                };
            };
                friends.push(userData);
                res.JSON(newBestFriend);
        };
    
        compareFriends(userData);

    });

};
