// =================================================================================
// Loading Data
var friends = require("../data/friends")

// =================================================================================
// =================================================================================
// Routing

module.exports = function(app) {
	app.get("/api/friends", (req, res) => {
		res.sendFile(path.join(__dirname, "../data/friends.js"));
	});

	app.post("/api/friends", (req, res) => {
		const newFriend = req.body;

		newFriend.routename = rewFriend.name.replace(/\s+/g, "").toLowerCase();

		console.log(newFriend);

		friends.push(newFriend);

		res.json(newFriend);
	});
};