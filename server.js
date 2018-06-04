var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

var db = require('models');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static("public"));

//  ROUTES

require("/routes/html-routes.js")(app);
require("/routes/traveler-routes.js")(app);
require("/routes/checklist-routes.js")(app);


// ===========================================================
// SYNC THE DB MODEL, THEN START THE SERVER CONNECTION
//   < force: true > ensures DB updates continue AFTER the initial SYNC

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});

