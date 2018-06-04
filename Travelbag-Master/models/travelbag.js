//  NPM Standard Library (capital S)
var Sequelize = require("sequelize");

//  DATABASE CONNECTION  (lowercase s)
var sequelize = require("../config/connection.js");

//  DATABASE MODEL -- the app's interface with TRAVELBAG database

var Travelbag = sequelize.define("travelbag_db" {
    id integer(16) AUTO_INCREMENT NOT NULL,
        traveler varchar(75) NOT NULL,
        journey VARCHAR(100) NOT NULL,
        reason varchar(75) NOT NULL,
        vehicle VARCHAR(15) NOT NULL,
        primary key (id)
);


    CREATE TABLE checklist (
        id integer(32) AUTO_INCREMENT NOT NULL,
        kustID INT(16),
        journey VARCHAR(100) NOT NULL,
        reason varchar(75) NOT NULL,
        vehicle VARCHAR(15) NOT NULL,
        leaveFrom varchar(100) NOT NULL,
        goingTo varchar(100) NOT NULL,
        tickets varchar(50),
        seating varchar(100),
        mileage varchar(60),
        awayTransport varchar(100) NOT NULL,
        directions varchar(100) NOT NULL,
        gascard varchar(100) NOT NULL,
        expenses varchar(100) NOT NULL,
        sleepRoom varchar(100) NOT NULL,
        sleepDisc varchar(60) NOT NULL,
        meals varchar(100) NOT NULL,
        childCare varchar(60) NOT NULL,
        petCare varchar(60) NOT NULL,
        plantCare varchar(60) NOT NULL,
        anypackgs varchar(60) NOT NULL,
        anyComments varchar(240) NOT NULL,
        primary key(id)




}, {
    timestamps: false
});

// Syncs with DB
Travelbag.sync();

// MAKE THE DB AVAILABLE TO OTHER PARTS OF THE APP
module.exports = Travelbag;