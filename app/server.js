// ============Required NPM packages====================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// =====================================================
// ============Set up the Express App===================
const app = express();
var PORT = process.env.PORT || 6969;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// =====================================================
// ============Routes===================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// =====================================================
// ============Start server to begin listening==========
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT)
})
// =====================================================