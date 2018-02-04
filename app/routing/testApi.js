var path = require("path");
var bodyParser = require('body-parser')
var friends = require("../data/friends")


module.exports = function (app) { 
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    var newBestFriend = {
        name: "",
        email: "",
        difference: 1000
    }
    app.post("/api/friends", function(req, res){
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
        };

        friends.push(userData);
        res.JSON(newBestFriend);
    };
};
            
compareFriends(newFriend);