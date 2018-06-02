
DROP DATABASE IF EXISTS travelbag_db;

//  CREATE THE TRAVELBAG DATABASE --
CREATE DATABASE travelbag_db;

//  CREATE 2 TABLES IN THE DATABASE
USE travelbag_db;


// ID:  UNIQUE AUTO-INCREMENTED INTEGER to LOCATE INFORMATION
// TRAVELER: NAME OF PERSON TRAVELING
// JOURNEY:  NAME FOR THIS TRIP
// REASON:  DOMESTIC PERSONAL, INTERNATIONAL PERSONAL   (Next Release: DOMESTIC BUSINESS, INTERNATIONAL BUSINESS)
// VEHICLE:  FLYING   ---  PLANE, TRAIN  ---  modes that need tickets and a reservation
//           DRIVING  ---  COMPANY AUTOMOBILE, PERSONAL AUTOMOBILE


CREATE TABLE kustom (
    id integer(16) AUTO_INCREMENT NOT NULL,
    traveler varchar(50) NOT NULL,
    journey VARCHAR(50) NOT NULL,
    reason varchar(30) NOT NULL,
    vehicle VARCHAR(15) NOT NULL,
    primary key(kBag-id)
);


// ID:  UNIQUE VALUE for this table  ---  CHECKLIST
// KBAG-ID:  SAME VALUE as ID from the kustomBag table;  associates kustomBag X with travel mode
// JOURNEY:  NAME FOR THIS TRIP
// INTENT:  DOMESTIC BUSINESS, DOMESTIC PERSONAL, INTERNATIONAL BUSINESS, INTERNATIONAL PERSONAL
// TRAVEL MODE:  FLYING   ---  PLANE, TRAIN  ---  modes that need tickets and a reservation
//               DRIVING  ---  COMPANY AUTOMOBILE, PERSONAL AUTOMOBILE
//


CREATE TABLE checklist (
    id integer(32) AUTO_INCREMENT NOT NULL,
    kBag_id(16) NOT NULL,
    journey VARCHAR(50) NOT NULL,
    reason varchar(30) NOT NULL,
    vehicle VARCHAR(15) NOT NULL,

    leaveFrom varchar(50) NOT NULL,
    // leaveState varchar(2),
    goingTo varchar(50) NOT NULL,
    // arriveState varchar(2),
    tickets varchar(35) NOT NULL,
    seating varchar(35) NOT NULL,
    mileage varchar(35) NOT NULL,
    // waitArea varchar(30),
    transport varchar(35) NOT NULL,
    directions varchar(35) NOT NULL,
    gascard varchar(35) NOT NULL,
    expenses varchar(35) NOT NULL,
    // receipts varchar(30),
    sleepQtrs varchar(35) NOT NULL,
    sleepDisc varchar(35) NOT NULL,
    arriveDining varchar(35) NOT NULL,
    // returnTrans varchar(30),
    AddComments varchar(35) NOT NULL,
    childCare varchar(35) NOT NULL,
    petCare varchar(35) NOT NULL,
    plantCare varchar(35) NOT NULL,
    anydeliveries varchar(35) NOT NULL
// homeSafety varchar(30),
primary key(id),
    foreign key(kustom.id)
);


// ***** SHORTER TABLE TO REFLECT PERSONAL TRAVEL ONLY
// CREATE TABLE checklist (
    id integer(32) AUTO_INCREMENT NOT NULL,
    kustom_id INT(16),
    INDEX (kustom_id),
    FOREIGN KEY (kustom_id)
        REFERENCES kustom(id)
        ON DELETE CASCADE,
    journey VARCHAR(50) NOT NULL,
    reason varchar(30) NOT NULL,
    vehicle VARCHAR(15) NOT NULL,
    leaveFrom varchar(50) NOT NULL,
    goingTo varchar(50),
    tickets varchar(35),
    seating varchar(35),
    mileage varchar(35),
    transport varchar(35),
    directions varchar(35),
    gascard varchar(35) not	null,
    expenses varchar(35) NOT NULL,
    sleepQtrs varchar(35) NOT NULL,
    sleepDisc varchar(35) NOT NULL,
    arriveDining varchar(35) NOT NULL,
    AddComments varchar(240) NOT NULL,
    childCare varchar(35) NOT NULL,
    petCare varchar(35) NOT NULL,
    plantCare varchar(35) NOT NULL,
    anydeliveries varchar(35) NOT NULL,
    primary key(id)
);



//  ******  05-31-2018  REVAMPED INTO A JAVASCRIPT OBJECT.
//  ******  05-31-2018  MYSQL DOESNT HAVE AN OBJECTS VARIABLE

//  THiS IS A ONE-OF-A-KIND TABLE.  THERE WILL ONLY BE 1 ENTRY,
//  BUT THIS ENTRY WILL BE VIEWED OR PRINTED WITH EVERY CHECKLIST

// CREATE TABLE travelBasics (
//     id integer(20) NOT NULL,
//     toiletries["toothpaste and toothbrush", "deodorant", "makeup", "lotion", "shaving items", "hair products"],
//     clothes["casual clothes", "dress clothes", "underwear", "nightwear", "socks", "shoes"],
//     electronics["smartphone and charger", "laptop and charger", "tablet and charger", "kindle and charger"
// "bluetooth and charger"],
// outerwear["coat", "jacket", "sweater", "scarf", "hat", "gloves"],
//     entertainment["ebook", "eZine", "music"]
// other["eye products", ]
// primary key(id)
// );

//  ******  05-31-2018  REVAMPED INTO A JAVASCRIPT OBJECT.
//  ******  05-31-2018  MYSQL DOESNT HAVE AN OBJECTS VARIABLE
