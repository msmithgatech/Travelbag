# Travelbag
A checklist to ensure you've bagged everything you need when you travel.


==========================
===  FUNCTIONALITY:

   * The user will be answering a series of common travel questions.
   * A basic checklist will include items normally packed for a trip.
   * A custom checklist is generated based on User response to the Questionnaire.
   * Travelbags can be saved and named for future use.
   * Checklists can be made for:
       DOMESTIC - Business or Personal
       INTERNATIONAL - Business or Personal


**********************
======================
===  PACKAGES:

NODE
EXPRESS
HANDLEBARS
TESTING


**********************
======================
===  ROUTES:

HOME PAGE
**SELECTIONS

  ** Review Historical Domestic or International TravelBags
  ** Compose TravelBag  (CRUD LOGIC)
     *** Name the TravelBag

        *** TravelBag EXISTS, Traveler wants to CONTINUE:
            - DISPLAY partial QUESTIONNAIRE
            - UPDATE and SUBMIT

        # OR #

        *** TravelBag EXISTS, Traveler CANCELLING:
            - DELETE


        *** TravelBag NOT FOUND:
            - What City and State are you departing from
            - CHOOSE from:
              -- DOMESTIC BUSINESS
              -- DOMESTIC PERSONAL
              -- INTERNATIONAL BUSINESS
              -- INTERNATIONAL PERSONAL
            - RETURN to Home Page


------------- QUESTIONNAIRES ---------------------------------------------------
DOMESTIC BUSINESS QUESTIONNAIRE:  ***ALL ITEMS ARE MULTIPLE-CHOICE

   - Flying / Train

     -- TICKET(s)
        --- Buy Round-trip
        --- Buy One-way
        --- Buy Round-trip and One-Way
        --- Have all tickets needed

     -- TRAVEL SEATING and WAITING AREA
        --- First Class / Business Class / Coach
        --- Using Mileage Points / Earning Mileage Points / No Discount Membership
        --- First Class Lounge / Business Class Lounge / Gate-side Waiting Area

     -- AWAY-FROM-HOME TRANSPORTATION
        --- Company Chauffeur / Rental car / Shuttle / Uber or Lyft / Taxi
        --- Travel Itinerary / Use Smartphone App and GPS / Use Printed Directions / Local Map
        --- Business Gas Card / Personal Gas Card / No Gas Card

     -- AWAY-FROM-HOME EXPENSES and RECEIPTS
        --- Business Credit Card / Personal Credit Card / Travelers Cheques / Cash
        --- Need Paper Receipts / Use Charge Card Bill as receipts / No receipts needed

     -- AWAY-FROM-HOME EATING and SLEEPING ACCOMMODATIONS
        --- Make sleep accommodations / Have sleep accommodations
        --- Using Discount Points / Earning Discount Points / No Discount Membership
        --- First Class Dining / Business Class Dining / Eating in the room / Any Restaurant

     -- RETURN TRANSPORTATION
        --- Company Chauffeur / Return rental car / Use Shuttle
        --- Hire Limo to get home / Hire Limo to office / Car in Paid Parking Lot


   - Driving
     -- Company Vehicle / Company Rental / Company Car Pool / Personal Vehicle / Riding with 1 Co-Worker
     -- Use Smartphone App and GPS / Use Printed Directions / Local Map

     -- AWAY-FROM-HOME EXPENSES and RECEIPTS
        --- Business Credit Card / Personal Credit Card / Travelers Cheques / Cash
        --- Business Gas Card / Personal Gas Card / No Gas Card
        --- Need Paper Receipts / Use Charge Card Bill as receipts / No receipts needed

     -- AWAY-FROM-HOME EATING and SLEEPING ACCOMMODATIONS
        --- Need sleep accommodations / Have sleep accommodations made
        --- Using Discount Points / Earning Discount Points / No Discount Membership
        --- First Class Dining / Business Class Dining / Eating in the room / Any Restaurant / Personal Arrangements


   - Other
     -- Arrange for Kid Care / No Kids
     -- Arrange for Pet Care / No Pets
     -- Arrange for Plant Care / No Plants
     -- Arrange for deliveries / No deliveries
     -- Set Home Alarm(s) / House Sitter / Occasional Drop-in / Neighborhood Watch
     -- (245 CHAR TEXTAREA FOR ANYTHING ADDITIONAL)


DOMESTIC PERSONAL QUESTIONNAIRE:   ***ALL ITEMS ARE MULTIPLE-CHOICE
  <div class="form-group row">
            <label for="name">List Name </label>
- Flying / Train / Bus

     -- TICKET(s)      (multiple choice okay)
        --- Buy Round-trip
        --- Buy One-way
        --- Buy Round-trip and One-Way
        --- Have all tickets needed

     -- SEATING and WAITING AREA
        --- First Class Seating / Business Class Seating / Coach Seating
        --- Using Discount Mileage Points / Earning Discount Mileage Points / No Discount Mileage Membership
        --- Using First Class Lounge / Business Class Lounge / Gate-side Waiting Area

     -- TRANSPORTATION at ARRIVAL DESTINATION
        --- Company Chauffeur / Need a rental car / Take a Shuttle / Car Pooling / Uber or Lyft / Taxi
        --- Travel Itinerary / Driving Directions / Local Map / Smartphone App
        --- Use Business Gas Card / Use Personal Gas Card / No Gas Card

     -- EXPENSES and RECEIPTS    (multiple choice okay)
        --- Business Credit Card / Personal Credit Card / Cash / Travelers Cheques / All the above
        --- All expenses covered / Use Charge Card Bill for receipts / No receipts needed

     -- DESTINATION EATING and SLEEPING ACCOMMODATIONS
        --- Need sleeping accommodations / Accommodations made / Other accommodations
        --- Using Provider Discount Points / Earning Provider Discount Points / No Discount Membership
        --- Using First Class Dining Area / Business Class Dining Area / Eating in the room / Any Restaurant

     -- RETURN TRANSPORTATION
        --- Company Chauffeur / Return a Rental / Use Shuttle / Car Pooling / Uber or Lyft
        --- Need Return Transportation to home / Need Return Transportation to office / Car in Paid Parking Lot


   - Driving
     -- Using GPS / Need Printed Driving Directions / Have Printed Driving Directions
     -- EXPENSES and RECEIPTS    (multiple choice okay)
        --- Business Credit Card / Personal Credit Card  / Travelers Cheques / Cash




   - Other
     -- Arrange for Kid Care / No Kids
     -- Arrange for Pet Care / No Pets
     -- Arrange for Plant Care / No Plants
     -- Arrange for deliveries / No deliveries


////////////////////////
    - EATING and SLEEPING ACCOMMODATIONS   (multiple choice okay)
      -- Need to make Sleep accommodations / Sleep accommodations made / Have Other sleep accommodations
      -- Using VIP Discount Points / Earning VIP Discount Points / None
      -- Using VIP Dining / Eating in the room / Eating at Restaurants / Have Other eating arrangements made


    - ACTIVITIES:    (multiple choice okay)
      -- Side-trips before arrival at destination / Side-trips after arrival at destination / None
      -- Need to plan actitivies / Already planned activities / Check on arrival / Other arrangements made


###############
##### INCLUDE  THESE 2 URLs IN EVERY TRAVELBAG:

   13 PACKING HACKS: https://www.dealsplus.com/blog/packing-hacks-that-will-make-traveling-a-breezing/

   CONDE NAST TRAVELER: http://www.cntraveler.com/galleries/2014-11-17/10-packing-mistakes-to-avoid/7

#####
###############













INTERNATIONAL BUSINESS QUESTIONNAIRE:


**********************
======================
===  HANDLEBARS:

DOMESTIC
INTERNATIONAL

**********************
======================
===  :
