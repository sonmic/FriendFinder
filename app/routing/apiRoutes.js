const friends = require('../data/friends');

function difference(scores1, scores2) {
    let totalDifference = 0;
    for (let i = 0; i < scores1.length; ++i) {
        let diff = scores1[i] - scores2[i];
        if (diff < 0) {
            diff = -diff;
        }

        totalDifference += diff;
    }
    return totalDifference;
}

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post('/api/friends', function(req, res) {
        console.log(req.body);
        const response = req.body;
        const results = [];
        for (let i = 1; i <= 10; ++i) {
            results.push(parseInt(response['q' + i]));
        }
        console.log(results);
        let minimumDiff;
        let bestFriend;
        friends.forEach(function(friend) {
            const currentDiff = difference(results, friend.scores);
            if (minimumDiff === undefined || currentDiff < minimumDiff) {
                minimumDiff = currentDiff;
                bestFriend = friend;
            }
        });
        console.log(bestFriend.name, minimumDiff);

        res.json({
            name: bestFriend.name,
            photo: bestFriend.photo
        });
    });
};
