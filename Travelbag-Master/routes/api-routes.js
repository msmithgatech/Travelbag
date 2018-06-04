// API ROUTES
// ROUTES FOR DISPLAYING AND SAVING DATA TO THE DATABASE

// NEED MODEL OF THE TRAVELBAG DB (middleware)
var Travelbag = require("../models/travelbag.js");

// Routes
// =============================================================
module.exports = function(app) {
        // FOR THIS TRAVELER:
        // SEARCH FOR All TravelBags or a SPECIFIC Travelbag THEN SUPPLY THE JSON

    app.get("/api/:Travelbag?", function(req, res) {

        // LOGIC TO DISPLAY A SPECIFIC TRAVELBAG
    if (req.params.journey) {
      Travelbag.findOne({
        where: {
            req.params.user: kustom.traveler,
            req.params.journey:  kustom.journey;
        }
      }).then(function(result) {
        return res.json(result);
      });
    }
    else {
      // Otherwise...
      //  OTHERWISE DISPLAY ALL TRAVELBAGS FOR THIS USER
      Travelbag.findAll({}).then(function(result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new Travelbag...
  app.post("/api/new", function(req, res) {
    // Take the request...
    var Travelbag = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from Travelbag.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = Travelbag.name.replace(/\s+/g, "").toLowerCase();

    // Then add the Travelbag to the database using sequelize
    Travelbag.create({
      routeName: routeName,
      name: Travelbag.name,
      role: Travelbag.role,
      age: Travelbag.age,
      forcePoints: Travelbag.forcePoints
    });
  });
};
