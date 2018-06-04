USE travelbag_db;

SELECT checklist.journey, checklist.leaveFrom, checklist.goingTo, kustom.journey, kustom.traveler
   FROM checklist INNER JOIN kustom ON (checklist.journey = kustom.journey) 
   AND (checklist.kustID = kustom.id)
   ORDER BY checklist.journey;