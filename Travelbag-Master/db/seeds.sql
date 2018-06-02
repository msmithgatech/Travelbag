USE travelbag_db;


INSERT INTO kustom (id, traveler, journey, reason, vehicle)
VALUES
     (0617, "Niecy Nash aka Desna on Claws", "GIRLS TRIP to Belize", "International Personal", "Flying"),
     (2017, "Tom Hardy aka the Devil James Keziah Delaney on Taboo", "Home to England",
     "International Personal", "Flying"),
     (1999, "Prince", "US Party 1999", "Domestic Personal", "Flying"),
     (0009, "Samuel L. Jackson", "Driving Miss Daisy", "Domestic Personal", "Driving"),
     (0621, "Carrie Preston aka Polly on Claws", "China with My Girls", "International Personal", "Flying"),
     (0741, "Jack Kesy aka Roller on Claws", "Australia", "International Personal", "Flying"),
     (3180, "Donald Fagen", "Soa Paolo Music Festival", "International Personal", "Flying"),
     (1940, "Louis Armstrong", "Find Mack the Knife", "Domestic Personal", "Flying"),
     (1960, "Merlina Mercouri", "Day trip to Piraeus", "Domestic Personal", "Driving"),
     (0977, "Leroy Roosevelt SUGARFOOT Bonner", "Home for Christmas", "Domestic Personal", "Driving")
;


INSERT INTO checklist
    (id, kustID, journey, reason, vehicle, leaveFrom, goingTo, tickets, seating, mileage,
     awayTransport, directions, gascard, expenses, sleepRoom, sleepDisc, meals, childCare, petCare,
     plantCare, anypackgs, anyComments)
VALUES
    (0205, 1960, "Greece", "Domestic Personal", "Driving", "Athens, Greece", "Port of Piraeus, Greece",
     " ", " ", " ", "Taxi", "Local Map", "No Gas Card", "Cash", "Have sleep accommodations made",
     "No Discount Points", "Eating in the Room and Any Restaurant", "No Kids", "No Pet Care", "No Plant Care",
     "No deliveries", "No companions...Never on Sunday"),
    (0615, 0977, "Home for Christmas", "Domestic Personal", "Driving", "Cincinnati, OH", "Trotwood, Ohio", " ", " ",
     " ", "Personal Vehicle", "Use  Smart-phone App and GPS", "Personal Gas Card", "Personal Credit Card and Cash",
     "Have sleep accommodations made", "No Discount Points", "Personal Arrangements", "No Kids", "No Pet Care",
     "No Plant Care", "No deliveries", "Get opinions on new song I want to be Free"),
    (2028, 0617, "GIRLS TRIP to Belize", "International Personal", "Flying", "Miami, Florida", "Belmopan, Belize",
     "Buy Round-trip", "First Class", "Using Mileage Points and Earning Mileage Points", "Shuttle and Taxi",
     "Use Smart-phone App and GPS", "No Gas Card", "Business Credit Card", "Need sleep accommodations",
     "Using Discount Points", "Any Restaurant", "No Kids", "No Pet Care", "No Plant Care", "No deliveries",
     "Use nail salon business card.  The day we leave, we all tell Roller our tickets are to Australia."),
    (0526, 3180, "Sao Paolo Music Festival", "International Personal", "Flying", "Manhattan, NY", "Sao Paolo, Brazil",
     "Buy One-way", "First Class", "Using Mileage Points and Earning Mileage Points", "Company Car Pool",
     "Use Smart-phone App and GPS", " ", " ", " ", " ", " ", "No Kids", " ", " ", " ",
     "Leaving 2 weeks early. Limo to airport with David Palmer, Joe Sample, Michael McDonald and Wilton Felder"),
    (2093, 2017, "Home to England", "International Personal", "Flying", "Benin City, Nigeria",
     "London, England", "Buy One-way", "First Class", "Earning Mileage Points", "Company Chauffeur",
     "Use Smart-phone App and GPS", "No Gas Card", "Cash", "Have sleep accommodations made",
     "No Discount Points", "Eating in room", "No Kids", "No Pet Care", "No Plant Care", "No deliveries", " "),
    (0010, 1940, "Find Mack the Knife", "Domestic Personal", "Flying", "New Orleans, Louisiana",
     "Chicago, IL", "Buy Round-trip", "Business Class", "No Mileage Membership", "Taxi", "Local Map",
     "No Gas Card", "Cash", "Have sleep accommodations made", "No Discount Points",
     "Eating in the room and Any Restaurant", "No Kids", "No Pet Care", "No Plant Care",
     "No deliveries", "Got to get to Mack before Big Boss does. Hide out from The Canary"),
    (0177, 0009, "Driving Miss Daisy", "Domestic Personal", "Driving", "Atlanta, GA", "Savannah, GA", " ", " ",
     " ", "Personal Vehicle", "Local Map", "No Gas Card", "Cash", "Have sleep accommodations made",
     "No Discount Points", "Eating in the room", "No Kids", "No Pet Care", "No Plant Care", "No deliveries",
     "Miss Daisy has final directions to the party location.  Miss Daisy packed her basket for the trip."),
    (0002, 0741, "Australia", "International Personal", "Flying", "Miami, Florida", "Melbourne, Australia",
     "Buy Round-trip", "Business Class", "No Mileage Points", "Shuttle and Taxi",
     "Use Smart-phone App and GPS and Local Map", "Business Gas Card", "Travelers Cheques and Cash",
     "Make sleep accommodations", "No Discount Points", "Any Restaurant", "No Kids", "No Pet Care",
     "No Plant Care", "No deliveries", "Uncle Daddy says find those lying, two-timing girls and bring them back."),
    (0693, 1999, "US Party 1999", "Domestic Personal", "Driving", "Minneapolis, MN", " ", " ", " ",
     " ", "Company Vehicle", "Use Smart-phone and GPS", "Business Gas Card", "Business Credit Card",
     "Need sleep accommodations"," ", " ", "No Kids", "No Pet Care", "No Plant Care", " ",
     "Hitting all major US cities. Alternating work and rest -- Tour 3 months, off 1 month"),
    (0084, 0621, "China with the Girls", "International Personal", "Flying", " ", "Bejing, China",
     "Buy Round-trip", " ", "Using Mileage Points and Earning Mileage Points", "Shuttle and Taxi",
     "Use Smart-phone App and GPS and Local Map", "No Gas Card", "Business Credit Card",
     "Need sleep accommodations", " ", " ", "No Kids", "No Pet Care", "No Plant Care", "No deliveries",
     "Get Dr. Ken business card?  The day we leave, we all tell Roller our tickets are to Australia.");