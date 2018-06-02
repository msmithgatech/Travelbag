USE travelbag_db;

SELECT checklist.journey, leaveFrom, goingTo, kustom.journey, traveler,
   FROM checklist INNER JOIN kustom ON (checklist.journey = kustom.journey) 
   AND (kustID = kustom.id)
   ORDER BY checklist.journey;