

var newInfo = {
	"patient": {
	    "resourceType": "Patient",
	    "text": {
	      "status": "generated",
	      "div": "<div>\n        \n            <p>John E. Smith</p>\n      \n          </div>"
	    },
	    "identifier": [
	      {
	        "use": "usual",
	        "label": "Duke Test Hospital MRN",
	        "system": "urn:oid:0.1.2.3.4.5.6.7",
	        "value": "1039582"
	      }
	    ],
	    "name": [
	      {
	        "use": "official",
	        "family": [
	          "Smith"
	        ],
	        "given": [
	          "John",
	          "E."
	        ]
	      }
	    ],
	    "telecom": [
	      {
	        "system": "phone",
	        "value": "800-539-3986",
	        "use": "home"
	      },
	      {
	        "system": "phone",
	        "use": "mobile"
	      },
	      {
	        "system": "email",
	        "value": "john.e.smith@example.com"
	      }
	    ],
	    "gender": {
	      "coding": [
	        {
	          "system": "http://hl7.org/fhir/v3/AdministrativeGender",
	          "code": "M",
	          "display": "Male"
	        }
	      ]
	    },
	    "weight": "289 lbs",
	    "height": "70 in",
	    "birthDate": "1954-04-28",
	    "address": [
	      {
	        "use": "home",
	        "line": [
	          "24 Pine RdApt 3"
	        ],
	        "city": "Bixby",
	        "state": "OK",
	        "zip": "74008",
	        "country": "USA"
	      }
	    ],
	    "active": true,
	    "resourceId": {
	      "resource": "Patient",
	      "id": "1039582"
	    }
  	},
  	"medications": [
  {
    "Condition": "Gout",
    "DrugType": "Xanthine oxidase inhibitors",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 10 days.",
    "Days": 10,
    "DateStarted": "2004-02-18",
    "DateEnded": "2004-02-28",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Xanthine oxidase inhibitors",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2004-05-30",
    "DateEnded": "2005-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Xanthine oxidase inhibitors",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2005-05-31",
    "DateEnded": "2006-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Xanthine oxidase inhibitors",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2006-05-31",
    "DateEnded": "2007-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Xanthine oxidase inhibitors",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2007-05-31",
    "DateEnded": "2008-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Xanthine oxidase inhibitors",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2008-05-31",
    "DateEnded": "2009-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Xanthine oxidase inhibitors",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2009-05-31",
    "DateEnded": "2010-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Xanthine oxidase inhibitors",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2010-05-31",
    "DateEnded": "2011-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Xanthine oxidase inhibitors",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2011-05-31",
    "DateEnded": "2012-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Xanthine oxidase inhibitors",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2012-05-31",
    "DateEnded": "2013-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Xanthine oxidase inhibitors",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2013-05-31",
    "DateEnded": "2014-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Xanthine oxidase inhibitors",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2014-05-31",
    "DateEnded": "2015-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Xanthine oxidase inhibitors",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 90,
    "DateStarted": "2004-02-28",
    "DateEnded": "2004-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 2,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Xanthine oxidase inhibitors",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 200 mg tablet/day for 30 days.",
    "Days": 240,
    "DateStarted": "2015-07-07",
    "DateEnded": "2016-01-07",
    "Provider": "Dr. Emerman",
    "Refills": 5,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Xanthine oxidase inhibitors",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 200 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2016-01-08",
    "DateEnded": "2017-01-08",
    "Provider": "Dr. Emerman",
    "Refills": 11,
    "FillStatus": "Not filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Calcium channel blocker",
    "MedicationName": "Amlodipine",
    "DosagePerDay": "10 mg",
    "Instructions": "Take two 5 mg tablets for a total of 10 mg/day for 30 days.",
    "Days": 240,
    "DateStarted": "2007-05-31",
    "DateEnded": "2007-11-30",
    "Provider": "Dr. Bradley",
    "Refills": 5,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Calcium channel blocker",
    "MedicationName": "Amlodipine",
    "DosagePerDay": "10 mg",
    "Instructions": "Take two 5 mg tablets for a total of 10 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2007-04-30",
    "DateEnded": "2007-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Calcium channel blocker",
    "MedicationName": "Amlodipine",
    "DosagePerDay": "5 mg",
    "Instructions": "Take one 5 mg tablet/day for 30 days.",
    "Days": 240,
    "DateStarted": "2006-10-30",
    "DateEnded": "2007-04-30",
    "Provider": "Dr. Bradley",
    "Refills": 5,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Calcium channel blocker",
    "MedicationName": "Amlodipine",
    "DosagePerDay": "5 mg",
    "Instructions": "Take one 5 mg tablet/day for 30 days.",
    "Days": 30,
    "DateStarted": "2006-09-29",
    "DateEnded": "2006-10-29",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Pneumonia",
    "DrugType": "Macrolide",
    "MedicationName": "Azithromycin",
    "DosagePerDay": "500 mg/ 250 mg",
    "Instructions": "Take one dose of 500 mg PO, then 250 mg PO for 4 days.",
    "Days": 5,
    "DateStarted": "2012-12-07",
    "DateEnded": "2012-12-11",
    "Provider": "Dr. Emerman",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Bupropion XR",
    "DosagePerDay": "150 mg",
    "Instructions": "Take one tablet of 150 mg in the morning each day, if tolerated, as early as day 4, increase to two tablets in the morning each day for a total of 300 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2006-12-17",
    "DateEnded": "2006-01-17",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Bupropion XR",
    "DosagePerDay": "300 mg",
    "Instructions": "Take two tablets of 150 mg in the morning each day for a total of 300 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2007-01-18",
    "DateEnded": "2007-02-18",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Bupropion XR",
    "DosagePerDay": "300 mg",
    "Instructions": "Take two tablets of 150 mg in the morning each day for a total of 300 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2007-02-18",
    "DateEnded": "2008-02-18",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Bupropion XR",
    "DosagePerDay": "300 mg",
    "Instructions": "Take two tablets of 150 mg in the morning each day for a total of 300 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2008-02-18",
    "DateEnded": "2009-02-18",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Bupropion XR",
    "DosagePerDay": "300 mg",
    "Instructions": "Take two tablets of 150 mg in the morning each day for a total of 300 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2009-02-18",
    "DateEnded": "2010-02-18",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Bupropion XR",
    "DosagePerDay": "300 mg",
    "Instructions": "Take two tablets of 150 mg in the morning each day for a total of 300 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2010-02-18",
    "DateEnded": "2011-02-18",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Bupropion XR",
    "DosagePerDay": "300 mg",
    "Instructions": "Take two tablets of 150 mg in the morning each day for a total of 300 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2011-02-18",
    "DateEnded": "2012-02-18",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Bupropion XR",
    "DosagePerDay": "300 mg",
    "Instructions": "Take two tablets of 150 mg in the morning each day for a total of 300 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2012-02-18",
    "DateEnded": "2013-02-18",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Bupropion XR",
    "DosagePerDay": "300 mg",
    "Instructions": "Take two tablets of 150 mg in the morning each day for a total of 300 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2013-02-18",
    "DateEnded": "2014-02-18",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Bupropion XR",
    "DosagePerDay": "300 mg",
    "Instructions": "Take two tablets of 150 mg in the morning each day for a total of 300 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2014-02-18",
    "DateEnded": "2015-02-18",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Bupropion XR",
    "DosagePerDay": "300 mg",
    "Instructions": "Take two tablets of 150 mg in the morning each day for a total of 300 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2015-02-18",
    "DateEnded": "2016-02-18",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Active",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Alpha-agonist",
    "MedicationName": "Clonidine",
    "DosagePerDay": "0.10 mg",
    "Instructions": "Take a 0.05 mg tablet 2x a day for a total of 0.10mg/day for 30 days.",
    "Days": 14,
    "DateStarted": "2016-01-01",
    "DateEnded": "2016-01-15",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Alpha-agonist",
    "MedicationName": "Clonidine",
    "DosagePerDay": "0.10 mg",
    "Instructions": "Take a 0.05 mg tablet 2x a day for a total of 0.10mg/day for 30 days.",
    "Days": 240,
    "DateStarted": "2016-01-16",
    "DateEnded": "2016-07-16",
    "Provider": "Dr. Bradley",
    "Refills": 5,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Active",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Alkaloid",
    "MedicationName": "Colchicine",
    "DosagePerDay": "1.8 mg",
    "Instructions": "Take 1.2 mg then 0.6 mg single dose 1 hour after first dose.",
    "Days": 1,
    "DateStarted": "1999-05-05",
    "DateEnded": "1999-05-05",
    "Provider": "Dr. Montana",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Alkaloid",
    "MedicationName": "Colchicine",
    "DosagePerDay": "1.8 mg",
    "Instructions": "Take 1.2 mg then 0.6 mg single dose 1 hour after first dose.",
    "Days": 1,
    "DateStarted": "2004-02-18",
    "DateEnded": "2004-02-18",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "Alkaloid",
    "MedicationName": "Colchicine",
    "DosagePerDay": "1.8 mg",
    "Instructions": "Take 1.2 mg then 0.6 mg single dose 1 hour after first dose.",
    "Days": 1,
    "DateStarted": "2014-07-07",
    "DateEnded": "2014-07-07",
    "Provider": "Dr. Emerman",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "SSRI",
    "MedicationName": "Fluoxetine",
    "DosagePerDay": "20 mg",
    "Instructions": "Take one 20 mg tablet/day for 30 days.",
    "Days": 30,
    "DateStarted": "2000-03-25",
    "DateEnded": "2000-04-25",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "SSRI",
    "MedicationName": "Fluoxetine",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets/day for a total of 40 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2000-04-26",
    "DateEnded": "2000-05-26",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "SSRI",
    "MedicationName": "Fluoxetine",
    "DosagePerDay": "80 mg",
    "Instructions": "Take four 20 mg tablets/day for a total of 80 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2000-05-27",
    "DateEnded": "2000-06-27",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Thiazide diuretic",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "12.5 mg",
    "Instructions": "Take one tablet of 12.5 mg/day for 2 weeks.",
    "Days": 14,
    "DateStarted": "1996-08-08",
    "DateEnded": "1996-08-26",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Thiazide diuretic",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "12.5 mg",
    "Instructions": "Take one tablet of 12.5 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "1996-08-27",
    "DateEnded": "1997-08-26",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Thiazide diuretic",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "12.5 mg",
    "Instructions": "Take one tablet of 12.5 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "1997-08-27",
    "DateEnded": "1998-08-26",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Thiazide diuretic",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "25 mg",
    "Instructions": "Take one tablet of 25 mg/day for 2 weeks.",
    "Days": 14,
    "DateStarted": "1998-08-27",
    "DateEnded": "1998-09-11",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Thiazide diuretic",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "25 mg",
    "Instructions": "Take one tablet of 25 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "1998-09-12",
    "DateEnded": "1999-09-12",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Thiazide diuretic",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "25 mg",
    "Instructions": "Take one tablet of 25 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "1999-09-12",
    "DateEnded": "2000-09-12",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Thiazide diuretic",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "25 mg",
    "Instructions": "Take one tablet of 25 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2000-09-12",
    "DateEnded": "2001-09-12",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Thiazide diuretic",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2001-09-13",
    "DateEnded": "2002-09-27",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Thiazide diuretic",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2002-09-28",
    "DateEnded": "2003-09-27",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Thiazide diuretic",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2003-09-28",
    "DateEnded": "2004-09-27",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Thiazide diuretic",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2004-09-28",
    "DateEnded": "2005-09-27",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Thiazide diuretic",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2005-09-28",
    "DateEnded": "2006-09-27",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Thiazide diuretic",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2006-09-28",
    "DateEnded": "2007-09-27",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "ACE Inhibitor",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "20 mg",
    "Instructions": "Take a 20 mg tablet/day for 30 days.",
    "Days": 240,
    "DateStarted": "2006-10-30",
    "DateEnded": "2007-04-30",
    "Provider": "Dr. Bradley",
    "Refills": 5,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "ACE Inhibitor",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "20 mg",
    "Instructions": "Take a 20 mg tablet/day for 30 days.",
    "Days": 30,
    "DateStarted": "2006-09-29",
    "DateEnded": "2006-10-29",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "ACE Inhibitor",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2007-04-30",
    "DateEnded": "2007-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "ACE Inhibitor",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2007-05-31",
    "DateEnded": "2008-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "ACE Inhibitor",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2008-05-31",
    "DateEnded": "2009-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "ACE Inhibitor",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2009-05-31",
    "DateEnded": "2010-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "ACE Inhibitor",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2010-05-31",
    "DateEnded": "2011-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "ACE Inhibitor",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2011-05-31",
    "DateEnded": "2012-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "ACE Inhibitor",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2012-05-31",
    "DateEnded": "2013-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "ACE Inhibitor",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2013-05-31",
    "DateEnded": "2014-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "ACE Inhibitor",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2014-05-31",
    "DateEnded": "2015-05-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Diabetes",
    "DrugType": "Glucophage",
    "MedicationName": "Metformin",
    "DosagePerDay": "500 mg",
    "Instructions": "Take one 500 mg tablet once a day with dinner for 2 weeks.",
    "Days": 14,
    "DateStarted": "2010-10-19",
    "DateEnded": "2010-10-30",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Diabetes",
    "DrugType": "Glucophage",
    "MedicationName": "Metformin",
    "DosagePerDay": "1000 mg",
    "Instructions": "Take two 500 mg tablets, one with breakfast and one with dinner for a total of 1000 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2010-10-31",
    "DateEnded": "2010-11-30",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Diabetes",
    "DrugType": "Glucophage",
    "MedicationName": "Metformin",
    "DosagePerDay": "1000 mg",
    "Instructions": "Take two 500 mg tablets, one with breakfast and one with dinner for a total of 1000 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2010-12-01",
    "DateEnded": "2011-12-01",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Diabetes",
    "DrugType": "Glucophage",
    "MedicationName": "Metformin",
    "DosagePerDay": "1000 mg",
    "Instructions": "Take two 500 mg tablets, one with breakfast and one with dinner for a total of 1000 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2011-12-01",
    "DateEnded": "2012-12-13",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Diabetes",
    "DrugType": "Glucophage",
    "MedicationName": "Metformin",
    "DosagePerDay": "1500 mg",
    "Instructions": "Take three 500 mg tablets, one with each meal, for a total of 1500 mg/day for 2 weeks.",
    "Days": 14,
    "DateStarted": "2012-12-14",
    "DateEnded": "2012-12-28",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Diabetes",
    "DrugType": "Glucophage",
    "MedicationName": "Metformin",
    "DosagePerDay": "1500 mg",
    "Instructions": "Take three 500 mg tablets, one with each meal, for a total of 1500 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2012-12-29",
    "DateEnded": "2013-12-29",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Diabetes",
    "DrugType": "Glucophage",
    "MedicationName": "Metformin",
    "DosagePerDay": "2000 mg",
    "Instructions": "Take two 1000 mg tablets, one with breakfast and one with dinner for a total of 2000 mg/day for 2 weeks.",
    "Days": 14,
    "DateStarted": "2013-12-30",
    "DateEnded": "2014-01-13",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Diabetes",
    "DrugType": "Glucophage",
    "MedicationName": "Metformin",
    "DosagePerDay": "2000 mg",
    "Instructions": "Take two 1000 mg tablets, one with breakfast and one with dinner for a total of 2000 mg/day for 2 weeks.",
    "Days": 365,
    "DateStarted": "2014-01-13",
    "DateEnded": "2015-01-13",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27706"
  },
  {
    "Condition": "Diabetes",
    "DrugType": "Glucophage",
    "MedicationName": "Metformin",
    "DosagePerDay": "2550 mg",
    "Instructions": "Take three 850 mg tablets, one with each meal, for a total of 2550 mg/day for 2 weeks.",
    "Days": 14,
    "DateStarted": "2015-01-14",
    "DateEnded": "2015-01-30",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Diabetes",
    "DrugType": "Glucophage",
    "MedicationName": "Metformin",
    "DosagePerDay": "2550 mg",
    "Instructions": "Take three 850 mg tablets, one with each meal, for a total of 2550 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2015-01-31",
    "DateEnded": "2015-02-01",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Active",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Diabetes",
    "DrugType": "Glucophage",
    "MedicationName": "Metformin",
    "DosagePerDay": "2550 mg",
    "Instructions": "Take three 850 mg tablets, one with each meal, for a total of 2550 mg/day for 90 days.",
    "Days": 365,
    "DateStarted": "2015-02-02",
    "DateEnded": "2016-02-02",
    "Provider": "Dr. Bradley",
    "Refills": 4,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Mirtazapine",
    "DosagePerDay": "15 mg",
    "Instructions": "Take one 15 mg tablet each night for 30 days.",
    "Days": 30,
    "DateStarted": "2007-02-18",
    "DateEnded": "2007-03-18",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Mirtazapine",
    "DosagePerDay": "30 mg",
    "Instructions": "Take two 15 mg tablets each night for a total of 30 mg/night for 30 days.",
    "Days": 30,
    "DateStarted": "2007-03-19",
    "DateEnded": "2007-04-19",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Mirtazapine",
    "DosagePerDay": "45 mg",
    "Instructions": "Take three 15 mg pills each night for a total of 45 mg/night for 30 days.",
    "Days": 30,
    "DateStarted": "2007-04-20",
    "DateEnded": "2007-05-20",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Mirtazapine",
    "DosagePerDay": "45 mg",
    "Instructions": "Take three 15 mg pills each night for a total of 45 mg/night for 90 days.",
    "Days": 365,
    "DateStarted": "2007-05-21",
    "DateEnded": "2008-05-20",
    "Provider": "Dr. Bradley",
    "Refills": 4,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Mirtazapine",
    "DosagePerDay": "45 mg",
    "Instructions": "Take three 15 mg pills each night for a total of 45 mg/night for 90 days.",
    "Days": 365,
    "DateStarted": "2008-05-21",
    "DateEnded": "2009-05-20",
    "Provider": "Dr. Bradley",
    "Refills": 4,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Mirtazapine",
    "DosagePerDay": "45 mg",
    "Instructions": "Take three 15 mg pills each night for a total of 45 mg/night for 90 days.",
    "Days": 365,
    "DateStarted": "2009-05-21",
    "DateEnded": "2010-05-20",
    "Provider": "Dr. Bradley",
    "Refills": 4,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Mirtazapine",
    "DosagePerDay": "45 mg",
    "Instructions": "Take three 15 mg pills each night for a total of 45 mg/night for 90 days.",
    "Days": 365,
    "DateStarted": "2010-05-21",
    "DateEnded": "2011-05-20",
    "Provider": "Dr. Bradley",
    "Refills": 4,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Mirtazapine",
    "DosagePerDay": "45 mg",
    "Instructions": "Take three 15 mg pills each night for a total of 45 mg/night for 90 days.",
    "Days": 365,
    "DateStarted": "2011-05-21",
    "DateEnded": "2012-05-20",
    "Provider": "Dr. Bradley",
    "Refills": 4,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Mirtazapine",
    "DosagePerDay": "45 mg",
    "Instructions": "Take three 15 mg pills each night for a total of 45 mg/night for 90 days.",
    "Days": 365,
    "DateStarted": "2012-05-21",
    "DateEnded": "2013-05-20",
    "Provider": "Dr. Bradley",
    "Refills": 4,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Mirtazapine",
    "DosagePerDay": "45 mg",
    "Instructions": "Take three 15 mg pills each night for a total of 45 mg/night for 90 days.",
    "Days": 365,
    "DateStarted": "2013-05-21",
    "DateEnded": "2014-05-20",
    "Provider": "Dr. Bradley",
    "Refills": 4,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Mirtazapine",
    "DosagePerDay": "45 mg",
    "Instructions": "Take three 15 mg pills each night for a total of 45 mg/night for 90 days.",
    "Days": 365,
    "DateStarted": "2014-05-21",
    "DateEnded": "2015-05-20",
    "Provider": "Dr. Bradley",
    "Refills": 4,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "Atypical antidepressant",
    "MedicationName": "Mirtazapine",
    "DosagePerDay": "45 mg",
    "Instructions": "Take three 15 mg pills each night for a total of 45 mg/night for 90 days.",
    "Days": 365,
    "DateStarted": "2015-05-21",
    "DateEnded": "2016-05-20",
    "Provider": "Dr. Bradley",
    "Refills": 4,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Active",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "NSAIDs",
    "MedicationName": "Naproxen",
    "DosagePerDay": "500 mg",
    "Instructions": "Take one 500 mg tablet/day for 10 days or until inflammation and pain are gone.",
    "Days": 10,
    "DateStarted": "1999-05-05",
    "DateEnded": "1999-05-15",
    "Provider": "Dr. Montana",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "NSAIDs",
    "MedicationName": "Naproxen",
    "DosagePerDay": "500 mg",
    "Instructions": "Take one 500 mg tablet/day for 10 days or until inflammation and pain are gone.",
    "Days": 10,
    "DateStarted": "2004-02-18",
    "DateEnded": "2004-02-28",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Gout",
    "DrugType": "NSAIDs",
    "MedicationName": "Naproxen",
    "DosagePerDay": "500 mg",
    "Instructions": "Take one 500 mg tablet/day for 10 days or until inflammation and pain are gone.",
    "Days": 10,
    "DateStarted": "2014-07-07",
    "DateEnded": "2014-07-17",
    "Provider": "Dr. Emerman",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "SSRI",
    "MedicationName": "Sertraline",
    "DosagePerDay": "100 mg",
    "Instructions": "Take two 50 mg tablets/day for a total of 100 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2000-07-29",
    "DateEnded": "2000-08-30",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "SSRI",
    "MedicationName": "Sertraline",
    "DosagePerDay": "150 mg",
    "Instructions": "Take three 50 mg tablets/day for a total of 150 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2000-08-31",
    "DateEnded": "2000-10-01",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "SSRI",
    "MedicationName": "Sertraline",
    "DosagePerDay": "200 mg",
    "Instructions": "Take four 50 mg tablets/day for a total of 200 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2000-10-02",
    "DateEnded": "2000-11-02",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "SSRI",
    "MedicationName": "Sertraline",
    "DosagePerDay": "200 mg",
    "Instructions": "Take four 50mg tablets/day for a total of 200 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2006-11-14",
    "DateEnded": "2006-12-16",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "SSRI",
    "MedicationName": "Sertraline",
    "DosagePerDay": "200 mg",
    "Instructions": "Take four 50mg tablets/day for a total of 200 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2000-11-03",
    "DateEnded": "2001-11-13",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Depression",
    "DrugType": "SSRI",
    "MedicationName": "Sertraline",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one 50 mg tablet/day for 30 days.",
    "Days": 30,
    "DateStarted": "2000-06-28",
    "DateEnded": "2000-07-28",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Calcium channel blocker",
    "MedicationName": "Verapamil",
    "DosagePerDay": "240 mg",
    "Instructions": "Take a 80 mg tablet, 3x a day for a total of 240mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2007-11-30",
    "DateEnded": "2007-12-30",
    "Provider": "Dr. Bradley",
    "Refills": 0,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Calcium channel blocker",
    "MedicationName": "Verapamil",
    "DosagePerDay": "240 mg",
    "Instructions": "Take a 80 mg tablet, 3x a day for a total of 240mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2007-12-31",
    "DateEnded": "2008-12-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Calcium channel blocker",
    "MedicationName": "Verapamil",
    "DosagePerDay": "240 mg",
    "Instructions": "Take a 80 mg tablet, 3x a day for a total of 240mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2008-12-31",
    "DateEnded": "2009-12-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Calcium channel blocker",
    "MedicationName": "Verapamil",
    "DosagePerDay": "240 mg",
    "Instructions": "Take a 80 mg tablet, 3x a day for a total of 240mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2010-12-31",
    "DateEnded": "2011-12-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Calcium channel blocker",
    "MedicationName": "Verapamil",
    "DosagePerDay": "240 mg",
    "Instructions": "Take a 80 mg tablet, 3x a day for a total of 240mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2011-12-31",
    "DateEnded": "2012-12-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Calcium channel blocker",
    "MedicationName": "Verapamil",
    "DosagePerDay": "240 mg",
    "Instructions": "Take a 80 mg tablet, 3x a day for a total of 240mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2012-12-31",
    "DateEnded": "2013-12-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Calcium channel blocker",
    "MedicationName": "Verapamil",
    "DosagePerDay": "240 mg",
    "Instructions": "Take a 80 mg tablet, 3x a day for a total of 240mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2013-12-31",
    "DateEnded": "2014-12-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "Calcium channel blocker",
    "MedicationName": "Verapamil",
    "DosagePerDay": "240 mg",
    "Instructions": "Take a 80 mg tablet, 3x a day for a total of 240mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2014-12-31",
    "DateEnded": "2015-12-30",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  }
]
  	
};

prepData();

function prepData(){
	var drugs = [];
	var spans = [];
	var dataUlt = [];
	var arbitraryPatientNum = 15;

	launch(arbitraryPatientNum);


	function launch(arbitraryPatientNum) {
	    document.getElementById("timelineFrame").innerHTML = "";
	    document.getElementById("cond_content").innerHTML = "";
	    document.getElementById("type_content").innerHTML = "";
	    drugs = [];
	    spans = [];
	    dataUlt = [];

	    //handlePatientData(allInfo);
	    handlePatientData(newInfo);
	}


	function handlePatientData(allData) {
	    var name = allData.patient.name[0];
	    var formatted = name.given.join(" ") + " " + name.family+"'s Profile";
	    var ptmrn = "MRN: " + allData.patient.resourceId.id;
	    var ptdob = "DOB: " + allData.patient.birthDate;
	    var ptsex = "SEX: " + allData.patient.gender.coding[0].display;
	    var ptage = "AGE: " + (2016 - allData.patient.birthDate.split("-")[0]).toString();

	    var ptwt = "WEIGHT: " + allData.patient.weight;
	    var ptht = "HEIGHT: " + allData.patient.height;


	    $("#ptname").text(formatted);
	    $("#ptmrn").text(ptmrn);
	    $("#ptdob").text(ptdob);
	    $("#ptage").text(ptage);
	    $("#ptsex").text(ptsex);
	    $("#ptwt").text(ptwt);
	    $("#ptht").text(ptht);


	    // prepare associative arrays
	    var conditions = {};
	    var drug_types = {};

	    var disp = allData.medications
	    for (var i = 0; i < disp.length; i++) {
	        var med = disp[i];
	        if (drugs.indexOf(med.MedicationName) == -1) {
	            drugs.push(med.MedicationName);
	        }

	        spans.push({
	            id: i,
				obj: med
	        })

	        // prep for condPop
	        var cond = med.Condition;
	        var name = med.MedicationName;
	        var type = med.DrugType;

	        if(conditions[cond] == null){
	        	conditions[cond] = {};
	        }

	        if(conditions[cond][name] == null){
	        	conditions[cond][name] = true;
	        }

	        // prep for typePop
	        if(drug_types[type] == null){
	        	drug_types[type] = {};
	        }

	        if(drug_types[type][name] == null){
	        	drug_types[type][name] = true;
	        }

	    }


	    // prep for condPop
	    console.log("conditions", conditions);
	    console.log("drug types", drug_types);
	    condPop(conditions);
	    typePop(drug_types);

	    function condPop(p){
	    	var select = document.getElementById("cond_content"); 
		    //assoc(p,"all");

		    // make all link
	        var el = document.createElement("LI");
	        el.textContent = "All";
	        el.className= "mdl-menu__item";
	        var pass = "all";
	        el.onClick = 'assoc(p, pass)';
	        select.appendChild(el);
	        (function(p,pass){
	            el.addEventListener("click", function() {
	               assoc(p,pass);
	            }, false);})(p,pass);

		    for(var key in p){
		    	var opt = key;
		    	var el = document.createElement("LI");
		    	el.textContent = key;
		    	el.className="mdl-menu__item";
		    	el.onClick = "assoc(p,key)";
		    	select.appendChild(el);
		    	 (function(p,key){
		            el.addEventListener("click", function() {
		               assoc(p,key);
		            }, false);})(p,key);
		    }
	    };


	    function typePop(p){
	    	var select = document.getElementById("type_content");
	    	//assoc(p,"all");

	    	 // make all link
	        var el = document.createElement("LI");
	        el.textContent = "All";
	        el.className= "mdl-menu__item";
	        var pass = "all";
	        el.onClick = 'assoc(p, pass)';
	        select.appendChild(el);
	        (function(p,pass){
	            el.addEventListener("click", function() {
	               assoc(p,pass);
	            }, false);})(p,pass);

	        for(var key in p){
		    	var opt = key;
		    	var el = document.createElement("LI");
		    	el.textContent = key;
		    	el.className="mdl-menu__item";
		    	el.onClick = "assoc(p,key)";
		    	select.appendChild(el);
		    	 (function(p,key){
		            el.addEventListener("click", function() {
		               assoc(p,key);
		            }, false);})(p,key);
		    }
	    }



	    assoc(null,"all");
	    // need to still adjust type and cond... how they populate the assoc arrays
	    function assoc(p,key){
	        if(key=="all"){
	            document.getElementById("timelineFrame").innerHTML = "";
	            setData(drugs, spans);
	        }
	        else{
	            var drugsNew = [];
	            var spansNew = [];
	            for(var drug in p[key]) {
	                for (var i = 0; i < disp.length; i++) {
	                    var med = disp[i];
	                    if(med.MedicationName==drug){
	                        if (drugsNew.indexOf(med.MedicationName) == -1) {
	                            drugsNew.push(med.MedicationName);
	                        }
	                        spansNew.push({
					            id: i,
								obj: med
	                        })
	                    }

	                }
	            }
	            document.getElementById("timelineFrame").innerHTML = "";
	            setData(drugsNew, spansNew);
	        }
	    };

	    // use this function to convert data from drugs and spans into inspired ehrs format
	    function setData(drugs, spans){
	        var data = [];
	        var dataIndex = {};
	        var keyCount = 0;
	        var strDict = {}
	        dataUlt = [];
	        
	        for (var i = 0; i < spans.length; i++) {
	            var fullname, start, days, dose, type; //dosage from label
	            var name = "";
	            // edit these extracts so they can be pushed in right format
	            //fullname = spans[i].drug.split(" ");

	            name = spans[i].obj.MedicationName;
	            dose = spans[i].obj.DosagePerDay;
	            type = spans[i].obj.Sig;
	            start = spans[i].obj.DateStarted;
	            days = spans[i].obj.Days;
	            fill = spans[i].obj.FillStatus;

	            var DAY, MONTH, YEAR;
	            DAY = start.split("-")[2];
	            MONTH = start.split("-")[1];
	            YEAR = start.split("-")[0];

	            predate = d3.time.day(new Date(YEAR, MONTH-1, DAY));
	            // break down days and adjust date accordingly
	            var dYear = dMonth = dDay = 0;
	            var delt = parseInt(days);
	            if(delt>=365) {
	                dYear = delt / 365;
	                delt = delt % 365;
	            }
	            // not perfect yet. doesn't account for nuances in days/month
	            if(delt>=30) {
	                dMonth = delt / 30;
	                delt = delt % 30;
	            }
	            dDay = delt;
	            date = d3.time.year.offset(predate,dYear);
	            date = d3.time.month.offset(date,dMonth);
	            date = d3.time.day.offset(date,dDay);

	            // have array with drug names and index to reference for data
	            // strDict manipulations are for strength fn see "dosage-fn.txt"

	            // name has already been added, append to dates
	            if(Object.keys(dataIndex).indexOf(name) >=0){
	                dataUlt[dataIndex[name]].dates.push({
	                    startdate: predate,
	                    enddate: date,
	                    strength: "",
	                    dosage: dose,
	                    dosage2: type,
	                    dosage3: "",
	                    filled: fill,
	                    obj: spans[i].obj
	                });

	                if(strDict[name].indexOf(dose) < 0){
	                	strDict[name].push(dose);
	                }
	            }
	            else {
	                dataUlt.push({
	                    label: name,
	                    dates: [{
	                        startdate: predate,
	                        enddate: date,
	                        strength: "",
	                        dosage: dose,
	                        dosage2: type,
	                        dosage3: "",
	                        filled: fill,
	                        obj: spans[i].obj
	                    }]
	                });
	                dataIndex[name] = keyCount;
	                keyCount += 1;
	                strDict[name] = [dose];
	            }     
	        } 

	        // str dose function
	        for (var i = 0; i < dataUlt.length; i++) {

	        	var sorted = strDict[dataUlt[i].label].sort(function(a,b){
							return parseFloat(a.split(" ")[0]) - parseFloat(b.split(" ")[0])})

	        	for(var j = 0; j<dataUlt[i].dates.length; j++){
	        		var strFactor = (sorted.indexOf(dataUlt[i].dates[j].dosage) + 1) / 
	        						(sorted.length + 1);
	        		if(sorted.indexOf(dataUlt[i].dates[j].dosage) == sorted.length-1){
	        			strFactor = 1.5;
	        		}
	        		dataUlt[i].dates[j].strength = strFactor;
	        	}
	        }
	        console.log('set',dataUlt);
	        // *** DOESN'T WORK ***
	  //       dataSet = [{"label": "insulin glargine", "dates":[{"startdate": new Date(2012,10,19), "enddate": new Date(2013,8,19), "strength": 8, "dosage": 28, "dosage2": "", "dosage3": " u"}]},
			// {"label": "omeprazole", "dates":[{"startdate": new Date(2012,4,19), "enddate": new Date(2013,0,31), "strength": 16, "dosage": 40, "dosage2": "", "dosage3": " mg"}, {"startdate": new Date(2013,2,07), "enddate": new Date(2013,8,19), "strength": 16, "dosage": 40, "dosage2": "", "dosage3": " mg"}]}];
			sendData(dataUlt);
	    } // set data
	}    // handle

	 // *** WORKS ***
 //    dataSet = [{"label": "insulin glargine", "dates":[{"startdate": new Date(2012,10,19), "enddate": new Date(2013,8,19), "strength": 8, "dosage": 28, "dosage2": "", "dosage3": " u"}]},
	// {"label": "omeprazole", "dates":[{"startdate": new Date(2012,4,19), "enddate": new Date(2013,0,31), "strength": 16, "dosage": 40, "dosage2": "", "dosage3": " mg"}, {"startdate": new Date(2013,2,07), "enddate": new Date(2013,8,19), "strength": 16, "dosage": 40, "dosage2": "", "dosage3": " mg"}]}];
	// seetData(dataSet);
}



function sendData(data){
	// set data here
	console.log("yes?");
	renderTimeLine(data);
}


function renderTimeLine(data){
    //console.log('render',data);
    var group, barGroup, context, scruboffset = 0, scrubData, t1, scrubDisplay, circGroup;
        
    var m = [60, 120, 0, 120]; // top right bottom left
    var m2 = [420, 120, 15, 60];
    var w = 900 - m[1] - m[3]; // width    
    var h = 600 - m[0] - m[2]; // height
    var h2 = 600 - m2[0] - m2[2];
    
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];              //Array to display the current month on the TodayLine
    
    //Data array for the timeline
    // fn to add in medication for each patient. filter later
    x=d3.time.scale().range([126, w + 160]);        //X-axis 
    x2 = d3.time.scale().range([126, w + 160]);     //X-axis in the scrubber region
    var startdates=[];                                  //Array to store the startdates
    var enddates=[];                                    //Array to store the enddates
    
    //This loop adds the startdates and enddates into the respective arrays 
    for(var i = 0; i < data.length; i++){
        for(var j = 0; j < data[i].dates.length; j++){
            startdates[startdates.length] = new Date(data[i].dates[j].startdate);
            enddates[enddates.length] = new Date(data[i].dates[j].enddate);
        }
    }
        
    minDate = startdates[0]; //Variable to store the minimum Date
    maxDate = enddates[0]; //Variable to store the maximum Date
        
    //Loop to find out the min and max Date
    for(var i = 1; i < startdates.length; i++){
        if(startdates[i] < minDate)
            minDate = startdates[i];
            
        if(enddates[i] > maxDate)
            maxDate = enddates[i];
    }
        
    minDate = new Date(minDate.getFullYear(),0,1);
    maxDate = new Date(maxDate.getFullYear()+1,0,1);
    var lDate = new Date(); //Variable to store the left date to set brush extent
    var rDate = new Date(); //Variable to store the right date to set brush extent 
    var currDate = new Date(2013,8,18); //Stores the current Date       
    
    var w1  = 1100 - 960; //calculate offset so that the today line (currDate) is aligned with the scrubber ( 1100 is the width of svg, 960 is the width being shown)
    rDate = maxDate;
    lDate = minDate;
    
    //Moves the small today's date line so that it lines up with the large today's date line.
    //Only works for the date September, 18, 2013
    var sudoMaxDate = maxDate;
    sudoMaxDate.setMonth(sudoMaxDate.getMonth() + 3);
    sudoMaxDate.setDate(sudoMaxDate.getDate() - 20);
        
    //Setting the domain of the x-axis  
    x.domain([minDate, maxDate]);
    x2.domain([minDate, sudoMaxDate]);
        
    //Setting the Y-axis    
    var y=d3.scale.linear().domain([0, 19]).range([75, h-40]);
    var y2 = d3.scale.linear().domain([0, data.length]).range([0, 48]);
    
    //Declaring the zoom behavior   
    zoom = d3.behavior.zoom()
                .scaleExtent([.7, 1.3])
                .on("zoom", zoomed);
    
    //Declaring the brush               
    brush = d3.svg.brush()
                .x(x2)
                .extent([lDate, rDate])
                .on("brush", brushed);
    
    //Declaring the drag for the scrubber               
    var drag = d3.behavior.drag()
                .on("dragstart",scrubstart)
                .on("drag", scrub);
    var vDrag = d3.behavior.drag()
                .on("drag",scrolldrag);
                
    //Creating the chart area   
    var chart=d3.select('#timelineFrame').append("svg")
                .classed("chart", true)
                .attr("width", w+m[1]+50)
                .attr("height",h+m[0]+m[2]);
    
    //Appending a rectangular pane to the chart area    
    var pane = chart.append("g");
    
    pane.append("rect")
        .attr("class", "pane")
        .attr("x", 126)
        .attr("width", w + 50)
        .attr("y", 55)
        .attr("height", h - 80)
        .attr("stroke", "#EEEEEE")
        .attr("stroke-width", 1);
    //Setting the x-axis                
    var xaxis=d3.svg.axis()
                .scale(x)
                .orient("top")
                .tickSize(h-80)
                .tickPadding(13);
                
    var xaxis2 = d3.svg.axis()
                    .scale(x2)
                    .orient("bottom")
                    .tickPadding(3)
                    .tickSize(1);

    var xaxis3 = d3.svg.axis()
                .scale(x)
                .orient("top")
                .tickSize(0)
                .tickPadding(3);
    //Append the x-axis to the chart
    chart.append("g").attr("class", "x axis")
            .attr("transform", "translate(-20, "+ (h-25) + ")")
            .attr("font-size", "15px")
            .call(xaxis);
        
    //Variable to create the timeline bars      
    var medicines=chart.selectAll(".medicineGroup").data(data).enter().append('g').classed("medicineGroup", true)
                            .attr('transform', function(d, i){ return 'translate(-20,'+ (y(i)) +')' }) ;
    
    //Selects each medicine group and draws the reactangle for each drug
    //based on the start date and end date in the data array and displays the
    //dosage of each drug for a given period of time                            
    medicines.each(function(d, i){
        group=d3.select(this);
        barGroup = group.append("g").classed("barGroup", true); //Appends timeline bars and text to the bars        
        barGroup.selectAll(".timeBars")
            .data(d.dates)
            .enter()
            // .append("svg:circle")
            // .attr("cx", 30)
            // .attr("cy", 30)
            // .attr("r", 20)
            .append("rect")
            .classed("timeBars", true)
            .attr("y", -10)
            .attr("height", 20)
            //.attr("stroke", "white")
            .attr("fill", function(d){
                if(d.filled == "Filled"){
                    ret = "rgba(55,37,217," + d.strength + ")";
                    return ret;
                }
                // if(d.strength == "max"){
                //  return "rgba(195,0,0,1)";
                // }
                else {
                    ret = "rgba(251,126,49," + d.strength + ")";
                    return ret;
                }
                // if(d.strength==1){
                //  return "rgba(47,47,47,.2)";
                // }else if(d.strength==4){
                //  return "rgba(47,47,47,.35)";
                // }else if(d.strength == 8){
                //  return "rgba(47,47,47,.6)";
                // }else if(d.strength == 16){
                //  return "rgba(85,107,47,1)";
                // }else{
                //  return "rgba(85,107,47,1)";
                //  //return "rgba(195,0,0,1)";
                // }
            })
            .attr("cursor", "move")
            .on("click", function (d) {
                
                showDialog({
                    title: d.obj.MedicationName,
                    text: 'This dialog can be closed by pressing ESC or clicking outside of the dialog.<br/>Pressing "YAY" will fire the configured action.',
                    negative: {
                        title: 'Close'
                    },
                    dose: d.obj.DosagePerDay,
                    sDate: d.obj.DateStarted,
                    eDate: d.obj.DateEnded,
                    route: d.obj.Route,
                    freq: d.obj.Frequency,
                    instr: d.obj.Instructions,
                    stat: d.obj.OrderStatus,
                    rx: d.obj.Pharmacy,
                    fillStat: d.obj.FillStatus,
                    provider: d.obj.Provider
                    // positive: {
                    //     title: 'Yay',
                    //     onClick: function (e) {
                    //         alert('Action performed!');
                    //     }
                    // }
                });
            })
            .call(zoom);

            // test for adding other data to timeline
            // circGroup = group.append("g").classed("circGroup", true); //Appends timeline bars and text to the bars       
            // circGroup.selectAll(".timeBars")
            // .data(d.dates)
            // .enter()
            // .append("svg:circle")
            // .attr("cy", 30)
            // .classed("timeBars", true)
            // .attr("cursor", "move")
            // .call(zoom);
            
        barGroup.selectAll(".timeBarstext")
                .data(d.dates)
                .enter()
                .append("text")
                .classed("timeBarstext", true)
                .attr("y", 4)
                .attr("fill", "white")
                .attr("text-anchor", "end")
                .attr("font-size", "11px")
                .text(function(d){return d.dosage;});   
    });
    
    pane.call(zoom);
    // var todayLine = chart.append("g"); //Appends a line indicatiin current date and month
    
    //Append triangle above the line
    // todayLine.append("path")
    //         .attr("class", "todayTriangle")
    //         .attr("d", d3.svg.symbol().type("triangle-down"))
    //         .attr("transform", "translate(" + (x(currDate) - 220) + ", 60)")
    //         .attr("fill", "#000000");
                
    // todayLine.append("line")
    //         .attr("class", "todayLine")
    //         .attr("y1", 62)
    //         .attr("y2", h-25)
    //         .attr("stroke", "#999999")
    //         .attr("stroke-width", 2);
                
    var day = currDate.getDate();
    var month = currDate.getMonth();
    var newDate = monthNames[month] + " " + day; //Stores the current date and month 
   
    //Append the drug names on the y-axis
    var yAxisLabel = chart.append("g");
    
    yAxisLabel.append("rect")
            .attr("class", "yAxisRect")
            .attr("x", 0)
            .attr("y", 54)
            .attr("width", 185)
            .attr("height", h+50)
            .attr("stroke", "white")
            .attr("fill", "white");
    
    medicines.each(function(d, i){
        yAxisLabel.append("text")
            .attr("class", "yAxisText")
            .attr("y", y(i)+3)
            .attr("x",165)
            .attr("height", 100)
            .attr("stroke", "none")
            .attr("fill", "rgba(67,67,67,.5)")
            .attr("text-anchor", "end")
            .attr("font-size","12px")
            .text(d.label);
    });
    yAxisLabel.append("rect")
            .attr("x", 0)
            .attr("y", 590)
            .attr("width", 175)
            .attr("height", h+50)
            .attr("fill", "white");
    
    //Appends a draggable rectangle over the bars to display the names of the drugs
    //selected by the it while dragging     
    scrubber=chart.append("g");                                 
    
    //Creates the draggable rectangle (indeed, the scrub display on the right)
    scrubber.append("rect")
        .attr("class", "scrubber")
        .attr("x", 0)
        .attr("width", "60px")
        .attr("y", 55)
        .attr("height", h-80)
        .attr("fill", "#ffffff")
        .attr("fill-opacity", .05 )
        .attr("cursor", "move")
        .attr("stroke", "#c7c7c7")
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", [0, 800+(h-80)+800,h-80]);
        // .call(drag);

    //Create a line in the middle where dose display will be shown if highlighted over
    var midLine = chart.append("g"); //Appends a line indicatiin current date and month
    
    //Append triangle above the line
    // midLine.append("path")
    //      .attr("class", "todayTriangle")
    //      .attr("d", d3.svg.symbol().type("triangle-down"))
    //      .attr("transform", "translate(" + (x(currDate) - 220) + ", 60)")
    //      .attr("fill", "#999999");
                
    midLine.append("rect")
        .attr("class", "scrubber")
        .attr("x", w/2)
        .attr("width", "1px")
        .attr("y", 55)
        .attr("height", h-80)
        .attr("fill", "#000000")
        .attr("fill-opacity", .2 )
        .attr("cursor", "move")
        .attr("stroke", "#c7c7c7")
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", [0, 800+(h-80)+800,h-80])
        .call(drag);

    midLine.append("path")
            .attr("class", "todayTriangle")
            .attr("d", d3.svg.symbol().type("triangle-down"))
            .attr("transform", "translate(" + w/2 + ", 60)")
            .attr("fill", "#000000");
        
    //Appends text over the scrubber and initially makes them invisible 
    medicines.each(function(d, i){
        scrubDisplay = scrubber.append("g")
                            .attr("transform",this.attributes[1].value)
                            .classed("scrubDisplay", true);
        scrubDisplay.append("text")
                .attr("class","displayLabel")
                .attr("fill","#000000")
                .attr("width","100px")
                .attr("x",w+50)
                .attr("y", 3)
                .attr("height","20px")
                .attr("font-size", "12px")
                .attr("font-weight", "bold");
        // actually the class for label, not dose
        scrubDisplay.append("text")
                .attr("class","displayDose")
                .attr("fill","#000000")
                .attr("width","50px")
                .attr("x",w+115)
                .attr("y", 3)
                .attr("height","20px")
                .attr("font-size", "11px");
    });
    chart.append("rect")
        .attr("x", -10)
        .attr("y", -10)
        .attr("width", w+175)
        .attr("height", 67)
        .attr("fill", "white");
    chart.append("g").attr("class", "xaxis2")
            .attr("transform", "translate(-20, 50)")
            .attr("fill", "rgba(67,67,67,.5)")
            .attr("font-size", "12px")
            .call(xaxis3);
    //Append text above the line            
    // var todayLineText=chart.append("g");
    // todayLineText.append("text")
    //         .attr("class", "todayLineText")
    //         .attr("x", x(currDate)-38)
    //         .attr("width", 10)
    //         .attr("y", 30)
    //         .attr("height", 10)
    //         .attr("fill", "black")
    //         .attr("font-size", "11px")
    //         .text("Today " + newDate);
    
    //A vertical scroll bar to scroll the chart vertically
    scrollBar=chart.append("g");            
    
    scrollBar.append("rect")
            .attr("class", "vScroller")
            .attr("x", 1108)
            .attr("width", 8)
            .attr("y", 55)
            .attr("height", (15/data.length)*515)
            .attr("rx", 4)
            .attr("ry", 4)
            .attr("fill", "#AAA8A8")
            .attr("cursor", "move")
            .call(vDrag);
    //Variable to append a mini version of the timeline to allow brushing to select
    //region one wants to view
    context = chart.append("g")
                .attr("transform", "translate(0 , " + (m2[0]+ 30) + ")");
    
    //Appends a rectangular region to display the mini timeline         
    context.append("rect")
            .attr("x", 126)
            .attr("width", w + 40)
            .attr("y", -5)
            .attr("height", 60)
            .attr("stroke", "#d9d9d9")
            .attr("stroke-width", .75)
            .attr("fill", "#ededed");
    context.append("rect")
        .attr("x", 115)
        .attr("y", 55)
        .attr("width", w+100)
        .attr("height", h2)
        .attr("fill", "white");
    //Appends x-axis to the context area        
    context.append("g")
        .attr("class", "x axis")
        .attr("fill", "rgba(67,67,67,.5)")
        .attr("transform", "translate(0, " + (h2-55) + ")")
        .call(xaxis2);
    
    //Creates the timeline bars in the context area 
    var contextBars = context.selectAll(".medicineGroup").data(data)
                            .enter().append("g")
                            .classed("contextBar", true)
                            .attr("transform", function(d, i){ return "translate(0, " + (y2(i)) + ")" ;});
    
    //Selects each medicine group and draws the reactangle for each drug
    //based on the start date and end date in the data array                        
    contextBars.each(function(d, i){
        var cGroup = d3.select(this);
        
        cGroup.selectAll(".contextBars")
                .data(d.dates)
                .enter()
                .append("rect")
                .classed("cBars", true)
                .attr("x", function(d){ return x2(d.startdate);})
                .attr("width", function(d){ return x2(d.enddate) - x2(d.startdate);})
                //.attr("y", -1)
                .attr("y", 2)
                .attr("height", 1)
                //.attr("height", 3)
                //.attr("stroke", "white")
                .attr("fill", function(d){
                    if(d.strength == "max"){
                        return "rgba(195,0,0,1)";
                    }
                    else {
                        ret = "rgba(55,37,217," + d.strength + ")";
                        return ret;
                    }
                    // if(d.strength==1){
                    //  return "rgba(47,47,47,.2)";
                    // }else if(d.strength==4){
                    //  return "rgba(47,47,47,.35)";
                    // }else if(d.strength == 8){
                    //  return "rgba(47,47,47,.6)";
                    // }else if(d.strength == 16){
                    //  return "rgba(47,47,47,1)";
                    // }else{
                    //  return "rgba(195,0,0,1)";
                    // }
                });
    });
    
    //Appends a line indicating the current date in the context region
    // context.append("line")
    //         .attr("class", "contextLine")
    //         .attr("x1", x2(currDate))
    //         .attr("x2", x2(currDate))
    //         .attr("y1", -4)
    //         .attr("y2", 54)
    //         .attr("stroke-width", 1)
    //         .attr("stroke", "black")
    //         .attr("stroke-opacity", .5);
    
    //Appends a brush over the context region   
    b = context.append("g")
            .attr("class", "x brush");
    
    //Adding visible left and right circle handles    
    var leftHandle = b.append("svg:circle")
        .attr("r", 7)
        .attr("cx",150)
        .attr("cy",25);
        
    var rightHandle = b.append("svg:circle")
        .attr("r", 7)
        .attr("cx",175)
        .attr("cy",25);
    
    //makes sure that dragging the circles (handles) calls the brush function... otherwise dragging is broken in that region.    
    b.call(brush);
        
    b.selectAll("rect")
        .attr("y", -4)
        .attr("height", 58);
        
    b.selectAll(".resize.e rect").attr("width", 25).attr("x", -5);
    b.selectAll(".resize.w rect").attr("width", 25).attr("x", -5);
        
    chart.append("rect")
        .attr("x", 1119)
        .attr("width", 1)
        .attr("y", 55)
        .attr("height", h-20)
        .attr("stroke", "#EEEEEE");
    
    chart.append("rect")
        .attr("x", 1120)
        .attr("width", 50)
        .attr("y", -10)
        .attr("height", h+48)
        .attr("fill", "white");
    chart.append("rect")
            .attr("x", 0)
            .attr("width", 110)
            .attr("y", 0)
            .attr("height", 55)
            .attr("fill", "white");
    //This function updates the timeline bars when zooming or dragging based on the
    //x-axis and redraws them   
    function updateBars(){
        medicines.each(function(d, i){
            group=d3.select(this);
            
            group.select(".barGroup").selectAll(".timeBars").each(function(d){
                d3.select(this)
                .attr("x", function(d){ return x(d.startdate);})
                .attr("width", function(d){ return x(d.enddate)-x(d.startdate);})
            });

            group.select(".circGroup").selectAll(".timeBars").each(function(d){
                d3.select(this)
                .attr("cx", function(d){ return x(d.startdate);})
                .attr("r", function(d){ return (x(d.enddate)-x(d.startdate)) / 10;})
            });

            //Displays the dosage over the bars based on the width of the bars. If width is less than 30px the text
            //is not displayed
            group.select(".barGroup").selectAll(".timeBarstext").each(function(d){
                d3.select(this).attr("x", function(d){return x(d.startdate)+(x(d.enddate)-x(d.startdate))-8;})
                                .attr("fill", function(d){
                                    if((x(d.enddate) - x(d.startdate))< 30)
                                        return "none";
                                    else
                                        return "white";
                                });
            });
        });
    }   
    
    // //This function sets the scrub offset on start of drag   
    function scrubstart(d){
        scruboffset = 0;
    }
    
    // //This allows to move the scrubber over the bars and sets the extent to which it can
    // //be dragged 
    function scrub(d){
        //console.log(d3.event.dy);
        if(d3.event.x-scruboffset >= 1080)
            scrubber.select(".scrubber").attr("x", 1080);
        else if(d3.event.x-scruboffset <= 125)
            scrubber.select(".scrubber").attr("x", 125);
        else
            scrubber.select(".scrubber").attr("x", d3.event.x-scruboffset);
        //On dragging the scrubber updates the names of the drugs selected by it
        updateOnScrub();
    }
    
    //Displays the drug names over the scrubber based on the time bars selected by it
    updateOnScrub = function(){
        var ind = 0;
        scrubber.selectAll(".scrubDisplay").each(function(d,j){
            var scrubGroup = d3.select(this);
            scrubGroup.selectAll(".displayLabel").attr("x",scrubber.select(".scrubber").attr("x")*1 + 30)
                .attr("fill","none");
            
            // Dosage location? 
            scrubGroup.selectAll(".displayDose").attr("x",scrubber.select(".scrubber").attr("x")*1 + 125)
                .attr("fill","none");

            //console.log(scrubGroup)
            // old location relative to scrubber: 1*scrubber.select(".scrubber").attr("x")+200
            for(var i = 0; i < data[ind].dates.length; i++){
                if((x.invert(w/2 - 1) < data[ind].dates[i].enddate) && 
                    (x.invert(w/2 + 10) > data[ind].dates[i].startdate)){
                    
                    scrubGroup.selectAll(".displayLabel").each(function(d){
                        d3.select(this)
                            .attr("fill", "rgba(67,67,67,1)")
                            .text(data[ind].dates[i].dosage + " ");
                    });
                    // scrubGroup.selectAll(".displayDose").each(function(d,j){
                    //  d3.select(this)
                    //      .attr("fill", "rgba(67,67,67,1)")
                    //      .text(data[ind].dates[i].dosage2);
                    //      //.text(data[ind].dates[i].dosage + data[ind].dates[i].dosage3 + data[ind].dates[i].dosage2);
                    // })
                }
            }
            ind++;
        });
        //Updating yAxis labels of the timeline
        updateYLabels();
    };
    
    //Changes the color of the yAxis labels based on the bars selected by the scrubber to
    //indicate active and inactive medicines.
    updateYLabels = function(){
        var scrubberArray=[];               
        scrubberArray=scrubber.selectAll(".displayLabel")[0]; //Adds the bars selected by the scrubber to this array
        var yLabelArray=d3.selectAll(".yAxisText")[0]; //Adds the yAxis text to this array
        
        for(var k=0; k<scrubberArray.length; k++){      
            if(scrubberArray[k].attributes[1].value == "rgba(67,67,67,1)"){
                d3.select(yLabelArray[k]).attr("fill", "rgba(67,67,67,1)");
            }else{
                d3.select(yLabelArray[k]).attr("fill", "rgba(67,67,67,.5)");
            }
        }
    };
    //Gets the translation value of the scroll bar and allows for scrolling of the chart
    //in the vertical direction by calling the updateOnScroll function
    function scrolldrag(d){
        var yVal = scrollBar.select(".vScroller").attr("y")*1+d3.event.dy;
        if(yVal < 55)
            yVal = 55;
        else if(yVal > (593-scrollBar.select(".vScroller").attr("height")*1))
            yVal = (593-scrollBar.select(".vScroller").attr("height")*1);
        var deltaY = scrollBar.select(".vScroller").attr("y")*1-yVal;
        scrollBar.select(".vScroller").attr("y",yVal);
        updateOnScroll(deltaY);
    };
    //Updates the position of the labels on the left, on the scrubber and the drags the chart
    //when the scroll bar is dragged
    updateOnScroll = function(yVal){ 
        chart.selectAll(".medicineGroup").each(function(d,j){
            var tranStr = d3.select(this).attr("transform");
            if(tranStr != null)
                tranStr = tranStr.substring(14,tranStr.length-1);
            else
                tranStr = 0;
            d3.select(this).attr('transform', 'translate(-20,'+ (tranStr*1+yVal) +')') ;
        });
        scrubber.selectAll(".displayLabel").each(function(d,j){
            var scrubStr = d3.select(this).attr("transform");
            if(scrubStr != null)
                scrubStr = scrubStr.substring(13,scrubStr.length-1);
            else
                scrubStr = 0;
            d3.select(this).attr('transform', 'translate(0, '+ (scrubStr*1+yVal) +')') ;
        });
        scrubber.selectAll(".displayDose").each(function(d,j){
            var scrubStr = d3.select(this).attr("transform");
            if(scrubStr != null)
                scrubStr = scrubStr.substring(13,scrubStr.length-1);
            else
                scrubStr = 0;
            d3.select(this).attr('transform', 'translate(0, '+ (scrubStr*1+yVal) +')') ;
        });
        yAxisLabel.selectAll(".yAxisText").each(function(d,j){
            var labelStr = d3.select(this).attr("transform");
            if(labelStr != null)
                labelStr = labelStr.substring(13,labelStr.length-1);
            else
                labelStr = 0;
            d3.select(this).attr('transform', 'translate(0, '+ (labelStr*1+yVal) +')') ;
        });
    };
    
    //Allows dragging the chart and zooming along the x-axis and based on the zoom/drag moves the brush
    //to indicate the region of the timeline that is in focus
    function zoomed(){
            //console.log(d3.event);
            if(d3.event.scale == 1) {
                if(d3.event.sourceEvent.webkitMovementX != null) {
                    var dir = -d3.event.sourceEvent.webkitMovementX*.2;
                    var tx1 = x2(brush.extent()[0])+dir;
                    var tx2 = x2(brush.extent()[1])+dir;
                    //dir = d3.select(".extent").attr("x")*1+dir;
                    if(tx1 < 127) {
                        tx2 += 127-tx1;
                        tx1 = 127;
                    }
                    if(tx2 > 1120) {
                        tx1 += 1120-tx2;
                        tx2 = 1120;
                    }
                    d3.select(".extent").attr("x",tx1);
                    brush.extent([x2.invert(tx1),x2.invert(tx2)]);
                    x.domain(brush.extent());
                    brushed();
                    //zoom.translate([0,0]);
                } else {
                    var dir = -d3.event.translate[0]/25;
                    var tx1 = x2(brush.extent()[0])+dir;
                    var tx2 = x2(brush.extent()[1])+dir;
                    //dir = d3.select(".extent").attr("x")*1+dir;
                
                    if(tx1 < 127) {
                        tx2 += 127-tx1;
                        tx1 = 127;
                    }
                
                    if(tx2 > 1120) {
                        tx1 += 1120-tx2;
                        tx2 = 1120;
                    }
                    d3.select(".extent").attr("x",tx1);
                    brush.extent([x2.invert(tx1),x2.invert(tx2)]);
                    x.domain(brush.extent());
                    brushed();
                    zoom.translate([0,0]);
                }
            } else {
                var zScale = d3.event.scale;
                var mid = (x2(brush.extent()[1])-x2(brush.extent()[0]))/2+x2(brush.extent()[0]);
                var zWidth = (x2(brush.extent()[1])-x2(brush.extent()[0]))*zScale;
                
                var ts1 = mid-zWidth/2;
                var ts2 = mid+zWidth/2;
                
                if(zWidth > x2(minDate.setMonth(minDate.getMonth()+1))-126) {
                    if(ts1 < 127)
                        ts1 = 127;
                    
                    if(ts2 > 1120)
                        ts2 = 1120;
                    d3.select(".extent").attr("x",ts1);
                    d3.select(".extent").attr("width",zWidth);
                
                    brush.extent([x2.invert(ts1),x2.invert(ts2)])
                    x.domain(brush.extent());
                    brushed();
                }
                minDate.setMonth(minDate.getMonth()-1);
                zoom.scale(1)   
            }
        };  
        
        //Allows brushing over the mini timeline and helps selecting a particular
        //section of the timeline
        function brushed() {
            leftHandle.attr("cx", function() {
                return x2(brush.extent()[0]) + 1; 
            });
            rightHandle.attr("cx", function() {
                return x2(brush.extent()[1]) - 1 ; 
            });
            
            x.domain(brush.extent());
            barGroup.selectAll(".timeBars").attr("x", function(d){return  x(d.startdate);});
            barGroup.attr("width", 5);
            chart.select("g.x.axis").call(xaxis);
            chart.select("g.xaxis2").call(xaxis3);
            updateBars();
            updateOnScrub();
            // updateTodayLine();
        }
        
        brushed();
        
        brushFunc = function() {
            leftHandle.attr("cx", function() {
                return x2(brush.extent()[0]) + 1; 
            });
            rightHandle.attr("cx", function() {
                return x2(brush.extent()[1]) - 1 ; 
            });
            
            x.domain(brush.extent());
            barGroup.selectAll(".timeBars").attr("x", function(d){return  x(d.startdate);});
            barGroup.attr("width", 5);
            chart.select("g.x.axis").call(xaxis);
            chart.select("g.xaxis2").call(xaxis3);
            updateBars();
            updateOnScrub();
            // updateTodayLine();
        }
        
        //Redraws the today line when zooming/dragging the timeline
        // function updateTodayLine(){
        //     d3.select(".todayTriangle").attr("transform", "translate("+ (x(currDate)-20) +", 59)")
        //     d3.select(".todayLine").attr("x1", x(currDate)-20)
        //             .attr("x2", x(currDate)-20);
                    
        //     d3.select(".todayLineText").attr("x", x(currDate) - 38)
        //                             .attr("width", 10);
        // }
        
        //Change brush & update Graph
        //Today Button: Moves the brush (while maintaining width) so that the 'today line' aligns with the left edge of the 'scrubber'
        //2 Years, 5 Years, & 6 months: Resizes the brush while maintaing the center point
        function timeButtonClicked(d) {
            var elem = d3.select(this);
            var id = elem.attr("id");
            var left = brush.extent()[0];
            var right = brush.extent()[1];
            
            var one_day=1000*60*60*24;
            var d1 = left.getTime();
            var d2 = right.getTime();
            
            var diff = (d1-d2)/2;
            var centerDate = left.getTime() - diff;
            
            if(elem.attr("class").indexOf("active") >= 0) {
                elem.attr("class", "");   
            }
            else {
                d3.selectAll('ul.time-list li').attr("class", "");
                elem.attr("class", "active");
                switch(id) {
                    // case "twoYears":
                    //  var d = new Date(centerDate);
                    //  var lAdjust = parseInt(d.toString().split(" ")[3] - minDate.toString().split(" ")[3]) + 1;
                    //  var rAdjust = parseInt(maxDate.toString().split(" ")[3] - d.toString().split(" ")[3]) + 1;

                    //  console.log(lAdjust);
                    //  console.log(rAdjust);
                    //  left.setTime(centerDate + (one_day*365*lAdjust));
                    //  right.setTime(centerDate - (one_day*365*rAdjust));

                    //  //d3.select('rect.scrubber').attr("x",938);
                    //  // left.setTime(Date.parse(minDate) + one_day);
                    //  // right.setTime(Date.parse(maxDate) - one_day);
                    //  // left.setTime(centerDate - ((one_day*365) +  (one_day*365*lAdjust)) );
                    //  // right.setTime(centerDate + (one_day*365) + (one_day*365*rAdjust) );
                    //  break;
                    case "fiveYears":
                        left.setTime(centerDate + (one_day*365*2.5));
                        right.setTime(centerDate - (one_day*365*2.5));
                        break;
                    // case "sixMonths":
                    //  d3.select('rect.scrubber').attr("x",960);
                    //  left.setTime(centerDate + (one_day*365/4));
                    //  right.setTime(centerDate - (one_day*365/4));
                    //  break;
                    case "todayButton":
                        var diff2 = right.getTime() - left.getTime();
                        if( diff2 >= 107227274850){ 
                            right = x.invert(w);
                            left.setTime(right.getTime() + diff2);
                            d3.select('rect.scrubber').attr("x", function() {
                               return d3.select('line.todayLine').attr("x1"); 
                            });
                        }
                        else {
                            var w1  = 1100 - d3.select("rect.scrubber").attr("x"); //calculate offset so that the today line is aligned with the scrubber
                            w1 =  x(currDate) + w1;
                            left.setTime(x.invert(w1));
                            right.setTime(left.getTime() + (diff*2));
                        }
                        break;
                    default:
                        console.log("not sure how I got here");
                }
                var tx1 = x2(right);
                var tx2 = x2(left);
                if(tx1 < 127) {
                    tx2 += 127-tx1;
                    tx1 = 127;
                }
                if(tx2 > 1120) {
                    tx1 += 1120-tx2;
                    tx2 = 1120;
                }
                d3.select(".extent").attr("x",tx1);
                brush.extent([x2.invert(tx1),x2.invert(tx2)]);
                x.domain(brush.extent());
                brushed();
                context.select('g.x.brush').call(brush);
            }
    }
        
        
    d3.selectAll('ul.time-list li').on("click", timeButtonClicked);
        //should there be something here?


    //  ------------
    d3.select('html').on('keydown', function() {
    var keyCode = d3.event.keyCode;
    var offset = 10;
    if (keyCode == 38) { 
      // UP -- scroll up (e.g. dragging the bar on the right)
            var yVal = scrollBar.select(".vScroller").attr("y")*1-offset;
            if(yVal < 55)
                yVal = 55;
            else if(yVal > (593-scrollBar.select(".vScroller").attr("height")*1))
                yVal = (593-scrollBar.select(".vScroller").attr("height")*1);
            var deltaY = scrollBar.select(".vScroller").attr("y")*1-yVal;
            scrollBar.select(".vScroller").attr("y",yVal);
            updateOnScroll(deltaY);
    }
    else if (keyCode == 40) {
      // DOWN -- scroll down (e.g. dragging the bar on the right)
            var yVal = scrollBar.select(".vScroller").attr("y")*1+offset;
            if(yVal < 55)
                yVal = 55;
            else if(yVal > (593-scrollBar.select(".vScroller").attr("height")*1))
                yVal = (593-scrollBar.select(".vScroller").attr("height")*1);
            var deltaY = scrollBar.select(".vScroller").attr("y")*1-yVal;
            scrollBar.select(".vScroller").attr("y",yVal);
            updateOnScroll(deltaY);
      
    }
    else if (keyCode == 37) {
      // Left -- move time scrubber to the left (drag)
            var dir = -offset;
            var tx1 = x2(brush.extent()[0])+dir;
            var tx2 = x2(brush.extent()[1])+dir;
            //dir = d3.select(".extent").attr("x")*1+dir;
            if(tx1 < 127) {
                tx2 += 127-tx1;
                tx1 = 127;
            }
            if(tx2 > 1120) {
                tx1 += 1120-tx2;
                tx2 = 1120;
            }
            d3.select(".extent").attr("x",tx1);
            brush.extent([x2.invert(tx1),x2.invert(tx2)]);
            x.domain(brush.extent());
            brushFunc();
      
    }
    else if (keyCode == 39) {
      // Right -- move time scrubber to the right (drag)
            var dir = offset;
            var tx1 = x2(brush.extent()[0])+dir;
            var tx2 = x2(brush.extent()[1])+dir;
            //dir = d3.select(".extent").attr("x")*1+dir;
            if(tx1 < 127) {
                tx2 += 127-tx1;
                tx1 = 127;
            }
            if(tx2 > 1120) {
                tx1 += 1120-tx2;
                tx2 = 1120;
            }
            d3.select(".extent").attr("x",tx1);
            brush.extent([x2.invert(tx1),x2.invert(tx2)]);
            x.domain(brush.extent());
            brushFunc();
    }   
        else if(keyCode == 187) {
            // + -- Zooming In - make time scrubber larger (scrolling)  
            var zScale = .9;
            //console.log(zScale)
            var mid = (x2(brush.extent()[1])-x2(brush.extent()[0]))/2+x2(brush.extent()[0]);
            var zWidth = (x2(brush.extent()[1])-x2(brush.extent()[0]))*zScale;
            var ts1 = mid-zWidth/2;
            var ts2 = mid+zWidth/2;
            if(zWidth > x2(minDate.setMonth(minDate.getMonth()+1))-126) {
                if(ts1 < 127)
                    ts1 = 127;
                if(ts2 > 1120)
                    ts2 = 1120;
                d3.select(".extent").attr("x",ts1);
                d3.select(".extent").attr("width",zWidth);
                brush.extent([x2.invert(ts1),x2.invert(ts2)])
                x.domain(brush.extent());
                brushFunc();
            }
            minDate.setMonth(minDate.getMonth()-1);
            zoom.scale(1)   
        }
        else if (keyCode == 189) {
                // - -- Zooming our - make the time scrubber smaller (scrolling)
            var zScale = 1.1;
            //console.log(zScale)
            var mid = (x2(brush.extent()[1])-x2(brush.extent()[0]))/2+x2(brush.extent()[0]);
            var zWidth = (x2(brush.extent()[1])-x2(brush.extent()[0]))*zScale;
            var ts1 = mid-zWidth/2;
            var ts2 = mid+zWidth/2;
            if(zWidth > x2(minDate.setMonth(minDate.getMonth()+1))-126) {
                if(ts1 < 127)
                    ts1 = 127;
                if(ts2 > 1120)
                    ts2 = 1120;
                d3.select(".extent").attr("x",ts1);
                d3.select(".extent").attr("width",zWidth);
                brush.extent([x2.invert(ts1),x2.invert(ts2)])
                x.domain(brush.extent());
                brushFunc();
            }
            minDate.setMonth(minDate.getMonth()-1);
            zoom.scale(1)   
        }
    });
}



function showDialog(options) {
    options = $.extend({
        id: 'orrsDiag',
        title: null,
        dose: null,
        sDate: null,
        eDate: null,
        route: null,
        freq: null,
        instr: null,
        stat: null,
        rx: null,
        fillStat: null,
        provider: null,
        negative: false,
        positive: false,
        cancelable: true,
        contentStyle: null,
        onLoaded: false
    }, options);

    // remove existing dialogs
    $('.dialog-container').remove();
    $(document).unbind("keyup.dialog");

    $('<div id="' + options.id + '" class="dialog-container"><div class="mdl-card mdl-shadow--16dp"></div></div>').appendTo("body");
    var dialog = $('#orrsDiag');
    var content = dialog.find('.mdl-card');
    if (options.contentStyle != null) content.css(options.contentStyle);
    if (options.title != null) {
        $('<h5 style="font-weight: bold;">' + options.title + '</h5>' + '<br><br>').appendTo(content);
    }

    if (options.provider != null) {
    	$('<p>  <span style="font-weight:bold;">Provider: </span>' + options.provider + '</p><br>').appendTo(content);
    }
    
    if (options.dose != null) {
    	$('<p>  <span style="font-weight:bold;">Ordered Dose: </span>' + options.dose + '</p><br>').appendTo(content);
    }
    
    if (options.sDate != null) {
    	$('<p>  <span style="font-weight:bold;">Start Date: </span>' + options.sDate + '</p><br>').appendTo(content);
    }

    if (options.eDate != null) {
    	$('<p>  <span style="font-weight:bold;">End Date: </span>' + options.eDate + '</p><br>').appendTo(content);
    }

    if (options.route != null) {
    	$('<p>  <span style="font-weight:bold;">Route: </span>' + options.route + '</p><br>').appendTo(content);
    }

    if (options.freq != null) {
    	$('<p>  <span style="font-weight:bold;">Frequency: </span>' + options.freq + '</p><br>').appendTo(content);
    }

    if (options.instr != null) {
    	$('<p>  <span style="font-weight:bold;">Instructions: </span>' + options.instr + '</p><br>').appendTo(content);
    }

    if (options.stat != null) {
    	$('<p>  <span style="font-weight:bold;">Order Status: </span>' + options.stat + '</p><br>').appendTo(content);
    }

    if (options.rx != null) {
    	$('<p>  <span style="font-weight:bold;">Pharmacy: </span>' + options.rx + '</p><br>').appendTo(content);
    }

    if (options.fillStat != null) {
    	$('<p>  <span style="font-weight:bold;">Fill Status: </span>' + options.fillStat + '</p><br>').appendTo(content);
    }




    if (options.negative || options.positive) {
        var buttonBar = $('<div class="mdl-card__actions dialog-button-bar"></div>');
        if (options.negative) {
            options.negative = $.extend({
                id: 'negative',
                title: 'Cancel',
                onClick: function () {
                    return false;
                }
            }, options.negative);
            var negButton = $('<button class="mdl-button mdl-js-button mdl-js-ripple-effect" id="' + options.negative.id + '">' + options.negative.title + '</button>');
            negButton.click(function (e) {
                e.preventDefault();
                if (!options.negative.onClick(e))
                    hideDialog(dialog)
            });
            negButton.appendTo(buttonBar);
        }

        buttonBar.appendTo(content);
    }
    componentHandler.upgradeDom();
    if (options.cancelable) {
        dialog.click(function () {
            hideDialog(dialog);
        });
        $(document).bind("keyup.dialog", function (e) {
            if (e.which == 27)
                hideDialog(dialog);
        });
        content.click(function (e) {
            e.stopPropagation();
        });
    }
    setTimeout(function () {
        dialog.css({opacity: 1});
        if (options.onLoaded)
            options.onLoaded();
    }, 1);
}

function showDialog(options) {
    options = $.extend({
        id: 'orrsDiag',
        title: null,
        dose: null,
        sDate: null,
        eDate: null,
        route: null,
        freq: null,
        instr: null,
        stat: null,
        rx: null,
        fillStat: null,
        provider: null,
        negative: false,
        positive: false,
        cancelable: true,
        contentStyle: null,
        onLoaded: false
    }, options);

    // remove existing dialogs
    $('.dialog-container').remove();
    $(document).unbind("keyup.dialog");

    $('<div id="' + options.id + '" class="dialog-container"><div class="mdl-card mdl-shadow--16dp"></div></div>').appendTo("body");
    var dialog = $('#orrsDiag');
    var content = dialog.find('.mdl-card');
    if (options.contentStyle != null) content.css(options.contentStyle);
    if (options.title != null) {
        $('<h5 style="font-weight: bold;">' + options.title + '</h5>' + '<br><br>').appendTo(content);
    }

    if (options.provider != null) {
        $('<p>  <span style="font-weight:bold;">Provider: </span>' + options.provider + '</p><br>').appendTo(content);
    }
    
    if (options.dose != null) {
        $('<p>  <span style="font-weight:bold;">Ordered Dose: </span>' + options.dose + '</p><br>').appendTo(content);
    }
    
    if (options.sDate != null) {
        $('<p>  <span style="font-weight:bold;">Start Date: </span>' + options.sDate + '</p><br>').appendTo(content);
    }

    if (options.eDate != null) {
        $('<p>  <span style="font-weight:bold;">End Date: </span>' + options.eDate + '</p><br>').appendTo(content);
    }

    if (options.route != null) {
        $('<p>  <span style="font-weight:bold;">Route: </span>' + options.route + '</p><br>').appendTo(content);
    }

    if (options.freq != null) {
        $('<p>  <span style="font-weight:bold;">Frequency: </span>' + options.freq + '</p><br>').appendTo(content);
    }

    if (options.instr != null) {
        $('<p>  <span style="font-weight:bold;">Instructions: </span>' + options.instr + '</p><br>').appendTo(content);
    }

    if (options.stat != null) {
        $('<p>  <span style="font-weight:bold;">Order Status: </span>' + options.stat + '</p><br>').appendTo(content);
    }

    if (options.rx != null) {
        $('<p>  <span style="font-weight:bold;">Pharmacy: </span>' + options.rx + '</p><br>').appendTo(content);
    }

    if (options.fillStat != null) {
        $('<p>  <span style="font-weight:bold;">Fill Status: </span>' + options.fillStat + '</p><br>').appendTo(content);
    }




    if (options.negative || options.positive) {
        var buttonBar = $('<div class="mdl-card__actions dialog-button-bar"></div>');
        if (options.negative) {
            options.negative = $.extend({
                id: 'negative',
                title: 'Cancel',
                onClick: function () {
                    return false;
                }
            }, options.negative);
            var negButton = $('<button class="mdl-button mdl-js-button mdl-js-ripple-effect" id="' + options.negative.id + '">' + options.negative.title + '</button>');
            negButton.click(function (e) {
                e.preventDefault();
                if (!options.negative.onClick(e))
                    hideDialog(dialog)
            });
            negButton.appendTo(buttonBar);
        }

        buttonBar.appendTo(content);
    }
    componentHandler.upgradeDom();
    if (options.cancelable) {
        dialog.click(function () {
            hideDialog(dialog);
        });
        $(document).bind("keyup.dialog", function (e) {
            if (e.which == 27)
                hideDialog(dialog);
        });
        content.click(function (e) {
            e.stopPropagation();
        });
    }
    setTimeout(function () {
        dialog.css({opacity: 1});
        if (options.onLoaded)
            options.onLoaded();
    }, 1);
}

function hideDialog(dialog) {
    $(document).unbind("keyup.dialog");
    dialog.css({opacity: 0});
    setTimeout(function () {
        dialog.remove();
    }, 400);
}
