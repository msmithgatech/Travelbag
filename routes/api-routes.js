// API ROUTES
// ROUTES FOR DISPLAYING AND SAVING DATA TO THE DATABASE

// NEED MODEL OF THE TRAVELBAG DB (middleware)
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
        // FOR THIS TRAVELER:
        // SEARCH FOR All TravelBags or a SPECIFIC Travelbag THEN SUPPLY THE JSON

    db.Traveler.findOne({
        where: {
            name: req.params.user,
            checklist: req.params.checklist;
        },
        include: [db.checklist]
    }).then(function(dbAuthor) {
        res.json(dbAuthor);
    });
});


  // If a user sends data to add a new Travelbag...
  app.post("/api/new", function(req, res) {
    // Take the request...
    var Travelbag = req.body;

    // CREATE NEW TRAVELBAG route

    // Using a RegEx Pattern to remove spaces from Travelbag.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routename = Travelbag.name.replace(/\s+/g, "").toLowerCase();

           // ADD the 2 Travelbag TABLES using SEQUELIZE
    Travelbag.create({
      traveler: Travelbag.traveler,
      journey: Travelbag.kustom.journey,

<!-----------------------
   KUSTOM:
        traveler:
        journey:
        reason:
        vehicle:

   CHECKLIST:
        kustID:
        journey:
        reason:
        vehicle:
        leaveFrom:
        goingTo:
        tickets:
        seating:
        mileage:
        awayTransport:
        directions:
        gascard:
        expenses:
        sleepRoom:
        sleepDisc:
        meals:
        childCare:
        petCare:
        plantCare:
        anypackgs:
        anyComments:
----------------------->
    });
  });
};
