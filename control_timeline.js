

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
    "DrugType": "XO-I",
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
    "DrugType": "XO-I",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 90,
    "DateStarted": "2004-02-28",
    "DateEnded": "2004-05-28",
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
    "DrugType": "XO-I",
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
    "DrugType": "XO-I",
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
    "DrugType": "XO-I",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2006-05-31",
    "DateEnded": "2007-05-31",
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
    "DrugType": "XO-I",
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
    "DrugType": "XO-I",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2008-05-31",
    "DateEnded": "2009-05-31",
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
    "DrugType": "XO-I",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2009-05-31",
    "DateEnded": "2010-05-31",
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
    "DrugType": "XO-I",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2010-05-31",
    "DateEnded": "2011-05-31",
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
    "DrugType": "XO-I",
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
    "DrugType": "XO-I",
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
    "DrugType": "XO-I",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2013-05-31",
    "DateEnded": "2014-05-31",
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
    "DrugType": "XO-I",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "100 mg",
    "Instructions": "Take one 100 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2014-05-31",
    "DateEnded": "2015-05-31",
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
    "DrugType": "XO-I",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "200 mg",
    "Instructions": "Take one 200 mg tablet/day for 30 days.",
    "Days": 180,
    "DateStarted": "2015-07-07",
    "DateEnded": "2016-01-03",
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
    "DrugType": "XO-I",
    "MedicationName": "Allopurinol",
    "DosagePerDay": "200 mg",
    "Instructions": "Take one 200 mg tablet/day for 30 days.",
    "Days": 365,
    "DateStarted": "2016-01-08",
    "DateEnded": "2017-01-07",
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
    "DrugType": "CCB",
    "MedicationName": "Amlodipine",
    "DosagePerDay": "5 mg",
    "Instructions": "Take one 5 mg tablet/day for 30 days.",
    "Days": 30,
    "DateStarted": "2008-09-29",
    "DateEnded": "2008-10-29",
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
    "DrugType": "CCB",
    "MedicationName": "Amlodipine",
    "DosagePerDay": "5 mg",
    "Instructions": "Take one 5 mg tablet/day for 30 days.",
    "Days": 180,
    "DateStarted": "2010-10-30",
    "DateEnded": "2011-04-28",
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
    "DrugType": "CCB",
    "MedicationName": "Amlodipine",
    "DosagePerDay": "10 mg",
    "Instructions": "Take two 5 mg tablets for a total of 10 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2011-04-30",
    "DateEnded": "2011-05-30",
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
    "DrugType": "CCB",
    "MedicationName": "Amlodipine",
    "DosagePerDay": "10 mg",
    "Instructions": "Take two 5 mg tablets for a total of 10 mg/day for 30 days.",
    "Days": 180,
    "DateStarted": "2012-05-31",
    "DateEnded": "2012-11-27",
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
    "DrugType": "CCB",
    "MedicationName": "Amlodipine",
    "DosagePerDay": "10 mg",
    "Instructions": "Take two 5 mg tablets for a total of 10 mg/day for 30 days.",
    "Days": 180,
    "DateStarted": "2012-11-28",
    "DateEnded": "2013-05-27",
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
    "DrugType": "CCB",
    "MedicationName": "Amlodipine",
    "DosagePerDay": "10 mg",
    "Instructions": "Take two 5 mg tablets for a total of 10 mg/day for 30 days.",
    "Days": 180,
    "DateStarted": "2013-05-28",
    "DateEnded": "2014-11-24",
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
    "DrugType": "CCB",
    "MedicationName": "Amlodipine",
    "DosagePerDay": "10 mg",
    "Instructions": "Take two 5 mg tablets for a total of 10 mg/day for 30 days.",
    "Days": 180,
    "DateStarted": "2014-11-25",
    "DateEnded": "2015-05-23",
    "Provider": "Dr. Bradley",
    "Refills": 5,
    "FillStatus": "Not filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "CCB",
    "MedicationName": "Amlodipine",
    "DosagePerDay": "10 mg",
    "Instructions": "Take two 5 mg tablets for a total of 10 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2015-05-24",
    "DateEnded": "2016-05-23",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Not filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27705"
  },
  {
    "Condition": "Hypertension",
    "DrugType": "CCB",
    "MedicationName": "Amlodipine",
    "DosagePerDay": "10 mg",
    "Instructions": "Take two 5 mg tablets for a total of 10 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2016-05-24",
    "DateEnded": "2017-05-24",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Not filled",
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
    "DateEnded": "2012-12-12",
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
    "DrugType": "Atypical",
    "MedicationName": "Bupropion XR",
    "DosagePerDay": "150 mg",
    "Instructions": "Take one tablet of 150 mg in the morning each day, if tolerated, as early as day 4, increase to two tablets in the morning each day for a total of 300 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2006-12-17",
    "DateEnded": "2006-01-16",
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
    "DrugType": "Atypical",
    "MedicationName": "Bupropion XR",
    "DosagePerDay": "300 mg",
    "Instructions": "Take two tablets of 150 mg in the morning each day for a total of 300 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2007-01-18",
    "DateEnded": "2007-02-17",
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
    "DrugType": "Atypical",
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
    "DrugType": "Atypical",
    "MedicationName": "Bupropion XR",
    "DosagePerDay": "300 mg",
    "Instructions": "Take two tablets of 150 mg in the morning each day for a total of 300 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2008-02-18",
    "DateEnded": "2009-02-17",
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
    "DrugType": "Atypical",
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
    "DrugType": "Atypical",
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
    "DrugType": "Atypical",
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
    "DrugType": "Atypical",
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
    "DrugType": "Atypical",
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
    "DrugType": "Atypical",
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
    "DrugType": "Atypical",
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
    "Condition": "Depression",
    "DrugType": "Atypical",
    "MedicationName": "Bupropion XR",
    "DosagePerDay": "300 mg",
    "Instructions": "Take two tablets of 150 mg in the morning each day for a total of 300 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2016-02-18",
    "DateEnded": "2017-02-17",
    "Provider": "Dr. Bradley",
    "Refills": 11,
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
    "DateEnded": "1999-05-06",
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
    "DateEnded": "2004-02-19",
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
    "DateEnded": "2014-07-08",
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
    "DateEnded": "2000-04-24",
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
    "DateEnded": "2000-06-26",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "12.5 mg",
    "Instructions": "Take one tablet of 12.5 mg/day for 2 weeks.",
    "Days": 14,
    "DateStarted": "1996-08-08",
    "DateEnded": "1996-08-22",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "12.5 mg",
    "Instructions": "Take one tablet of 12.5 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "1996-08-27",
    "DateEnded": "1997-08-27",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "12.5 mg",
    "Instructions": "Take one tablet of 12.5 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "1997-08-27",
    "DateEnded": "1998-08-27",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "25 mg",
    "Instructions": "Take one tablet of 25 mg/day for 2 weeks.",
    "Days": 14,
    "DateStarted": "1998-08-27",
    "DateEnded": "1998-09-10",
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
    "DrugType": "Thiazide",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "25 mg",
    "Instructions": "Take one tablet of 25 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "1999-09-12",
    "DateEnded": "2000-09-11",
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
    "DrugType": "Thiazide",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2001-09-13",
    "DateEnded": "2002-09-13",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2002-09-28",
    "DateEnded": "2003-09-28",
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
    "DrugType": "Thiazide",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2004-09-28",
    "DateEnded": "2005-09-28",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2005-09-28",
    "DateEnded": "2006-09-28",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2006-09-28",
    "DateEnded": "2007-09-28",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2007-09-28",
    "DateEnded": "2008-09-27",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2008-09-28",
    "DateEnded": "2009-09-28",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2009-09-28",
    "DateEnded": "2010-09-28",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2010-09-28",
    "DateEnded": "2011-09-28",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2011-09-28",
    "DateEnded": "2012-09-27",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2012-09-28",
    "DateEnded": "2013-09-28",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2013-09-28",
    "DateEnded": "2014-09-28",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2014-09-28",
    "DateEnded": "2015-09-28",
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
    "DrugType": "Thiazide",
    "MedicationName": "Hydrochlorothiazide",
    "DosagePerDay": "50 mg",
    "Instructions": "Take one tablet of 50 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2015-09-28",
    "DateEnded": "2016-09-27",
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
    "DrugType": "ACE-I",
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
    "DrugType": "ACE-I",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "20 mg",
    "Instructions": "Take a 20 mg tablet/day for 30 days.",
    "Days": 180,
    "DateStarted": "2006-10-30",
    "DateEnded": "2007-04-28",
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
    "DrugType": "ACE-I",
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
    "DrugType": "ACE-I",
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
    "DrugType": "ACE-I",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2008-05-31",
    "DateEnded": "2009-05-31",
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
    "DrugType": "ACE-I",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2009-05-31",
    "DateEnded": "2010-05-31",
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
    "DrugType": "ACE-I",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2010-05-31",
    "DateEnded": "2011-05-31",
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
    "DrugType": "ACE-I",
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
    "DrugType": "ACE-I",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2012-05-31",
    "DateEnded": "2013-05-31",
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
    "DrugType": "ACE-I",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2013-05-31",
    "DateEnded": "2014-05-31",
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
    "DrugType": "ACE-I",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2014-05-31",
    "DateEnded": "2015-05-31",
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
    "DrugType": "ACE-I",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2015-05-31",
    "DateEnded": "2016-05-30",
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
    "DrugType": "ACE-I",
    "MedicationName": "Lisinopril",
    "DosagePerDay": "40 mg",
    "Instructions": "Take two 20 mg tablets for a total of 40mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2016-05-30",
    "DateEnded": "2017-05-30",
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
    "DateEnded": "2010-11-02",
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
    "DateEnded": "2010-12-31",
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
    "DateEnded": "2011-12-31",
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
    "DosagePerDay": "1500 mg",
    "Instructions": "Take three 500 mg tablets, one with each meal, for a total of 1500 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2013-12-29",
    "DateEnded": "2014-12-29",
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
    "Instructions": "Take three 500 mg tablets, one with each meal, for a total of 1500 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2014-12-29",
    "DateEnded": "2015-12-29",
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
    "Days": 365,
    "DateStarted": "2015-12-29",
    "DateEnded": "2016-12-28",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Filled",
    "Route": "Oral",
    "Frequency": "Daily",
    "OrderStatus": "Complete",
    "Pharmacy": "CVS Pharmacy, 528 Beaver St, Durham, NC 27706"
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
    "Condition": "Depression",
    "DrugType": "SSRI",
    "MedicationName": "Sertraline",
    "DosagePerDay": "100 mg",
    "Instructions": "Take two 50 mg tablets/day for a total of 100 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2000-07-29",
    "DateEnded": "2000-08-28",
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
    "DateEnded": "2000-09-30",
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
    "DateEnded": "2000-11-01",
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
    "DateEnded": "2001-11-03",
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
    "DosagePerDay": "200 mg",
    "Instructions": "Take four 50mg tablets/day for a total of 200 mg/day for 30 days.",
    "Days": 30,
    "DateStarted": "2006-11-14",
    "DateEnded": "2006-12-14",
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
    "DateStarted": "2006-12-17",
    "DateEnded": "2007-12-17",
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
    "DosagePerDay": "200 mg",
    "Instructions": "Take four 50mg tablets/day for a total of 200 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2007-12-17",
    "DateEnded": "2008-12-16",
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
    "DosagePerDay": "200 mg",
    "Instructions": "Take four 50mg tablets/day for a total of 200 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2008-12-17",
    "DateEnded": "2009-12-17",
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
    "DosagePerDay": "200 mg",
    "Instructions": "Take four 50mg tablets/day for a total of 200 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2009-12-17",
    "DateEnded": "2010-12-17",
    "Provider": "Dr. Bradley",
    "Refills": 11,
    "FillStatus": "Not filled",
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
    "DateStarted": "2010-12-17",
    "DateEnded": "2011-12-17",
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
    "DosagePerDay": "200 mg",
    "Instructions": "Take four 50mg tablets/day for a total of 200 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2011-12-17",
    "DateEnded": "2012-12-16",
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
    "DosagePerDay": "200 mg",
    "Instructions": "Take four 50mg tablets/day for a total of 200 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2012-12-17",
    "DateEnded": "2013-12-17",
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
    "DosagePerDay": "200 mg",
    "Instructions": "Take four 50mg tablets/day for a total of 200 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2013-12-17",
    "DateEnded": "2014-12-17",
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
    "DosagePerDay": "200 mg",
    "Instructions": "Take four 50mg tablets/day for a total of 200 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2014-12-17",
    "DateEnded": "2015-12-17",
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
    "DosagePerDay": "200 mg",
    "Instructions": "Take four 50mg tablets/day for a total of 200 mg/day for 30 days.",
    "Days": 365,
    "DateStarted": "2015-12-17",
    "DateEnded": "2016-12-16",
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
		
// do all previous smart on fhir, get data js stuff here
function prepData(){
	var drugs = [];
	var spans = [];
	var dataUlt = [];
	var arbitraryPatientNum = 15;

	launch(arbitraryPatientNum);

	function launch(arbitraryPatientNum) {
	    // document.getElementById("timelineFrame").innerHTML = "";
	    //document.getElementById("timelineFrame").innerHTML = "";
	    // document.getElementById("cond_content").innerHTML = "";
	    // document.getElementById("type_content").innerHTML = "";
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

	    //condPop(conditions);
	    //typePop(drug_types);

	    // function condPop(p){
	    // 	var select = document.getElementById("cond_content"); 
		   //  assoc(p,"all");

		   //  // make all link
	    //     var el = document.createElement("LI");
	    //     el.textContent = "All";
	    //     el.className= "mdl-menu__item";
	    //     var pass = "all";
	    //     el.onClick = 'assoc(p, pass)';
	    //     select.appendChild(el);
	    //     (function(p,pass){
	    //         el.addEventListener("click", function() {
	    //            assoc(p,pass);
	    //         }, false);})(p,pass);

		   //  for(var key in p){
		   //  	var opt = key;
		   //  	var el = document.createElement("LI");
		   //  	el.textContent = key;
		   //  	el.className="mdl-menu__item";
		   //  	el.onClick = "assoc(p,key)";
		   //  	select.appendChild(el);
		   //  	 (function(p,key){
		   //          el.addEventListener("click", function() {
		   //             assoc(p,key);
		   //          }, false);})(p,key);
		   //  }
	    // };


	    // function typePop(p){
	    // 	var select = document.getElementById("type_content");
	    // 	//assoc(p,"all");

	    // 	 // make all link
	    //     var el = document.createElement("LI");
	    //     el.textContent = "All";
	    //     el.className= "mdl-menu__item";
	    //     var pass = "all";
	    //     el.onClick = 'assoc(p, pass)';
	    //     select.appendChild(el);
	    //     (function(p,pass){
	    //         el.addEventListener("click", function() {
	    //            assoc(p,pass);
	    //         }, false);})(p,pass);

	    //     for(var key in p){
		   //  	var opt = key;
		   //  	var el = document.createElement("LI");
		   //  	el.textContent = key;
		   //  	el.className="mdl-menu__item";
		   //  	el.onClick = "assoc(p,key)";
		   //  	select.appendChild(el);
		   //  	 (function(p,key){
		   //          el.addEventListener("click", function() {
		   //             assoc(p,key);
		   //          }, false);})(p,key);
		   //  }
	    // }


	    
	    assoc(null,"all");

	    function assoc(p,key){
	        if(key=="all"){
	            //document.getElementById("timelineFrame").innerHTML = "";
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
	            //document.getElementById("timelineFrame").innerHTML = "";
	            setData(drugsNew, spansNew);
	        }
	    };

	    // use this function to convert data from drugs and spans into inspired ehrs format
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
			postData(dataUlt);
	    } // set data
	}    // handle

	 // *** WORKS ***
 //    dataSet = [{"label": "insulin glargine", "dates":[{"startdate": new Date(2012,10,19), "enddate": new Date(2013,8,19), "strength": 8, "dosage": 28, "dosage2": "", "dosage3": " u"}]},
	// {"label": "omeprazole", "dates":[{"startdate": new Date(2012,4,19), "enddate": new Date(2013,0,31), "strength": 16, "dosage": 40, "dosage2": "", "dosage3": " mg"}, {"startdate": new Date(2013,2,07), "enddate": new Date(2013,8,19), "strength": 16, "dosage": 40, "dosage2": "", "dosage3": " mg"}]}];
	// seetData(dataSet);
}



function postData(data){
	// set data here
	if (!document.getElementsByTagName) return;
	tabBody=document.getElementsByTagName("tbody").item(0);


	while(tabBody.hasChildNodes()){
		tabBody.removeChild(tabBody.firstChild);
	}


	 row=document.createElement("tr");
     cell1 = document.createElement("th");
     cell2 = document.createElement("th");
     cell3 = document.createElement("th");
     cell4 = document.createElement("th");
     cell5 = document.createElement("th");
 	 

     textnode1=document.createTextNode("Medication");
     textnode2=document.createTextNode("Start Date");
     textnode3=document.createTextNode("End Date");
     textnode4=document.createTextNode("Order Detail");
     textnode5=document.createTextNode("Provider");

     cell1.appendChild(textnode1);
     cell2.appendChild(textnode2);
     cell3.appendChild(textnode3);
     cell4.appendChild(textnode4);
     cell5.appendChild(textnode5);

     row.appendChild(cell1);
     row.appendChild(cell2);
     row.appendChild(cell3);
     row.appendChild(cell4);
     row.appendChild(cell5);

     tabBody.appendChild(row);


	for(var i = 0; i < data.length; i++){
		for(var j = 0; j < data[i].dates.length; j++){

			 var d = data[i].dates[j];
			 
			 
	         row=document.createElement("tr");
	         row.onclick = (function() {

	         	var d = data[i].dates[j];

	         	return function() {
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
                        refills: d.obj.Refills,
				        fillStat: d.obj.FillStatus,
				        provider: d.obj.Provider
				        // positive: {
				        //     title: 'Yay',
				        //     onClick: function (e) {
				        //         alert('Action performed!');
				        //     }
				        // }
				    });
	        	}
	   
	         })(i,j);


	         cell1 = document.createElement("td");
	         cell2 = document.createElement("td");
	         cell3 = document.createElement("td");
	         cell4 = document.createElement("td");
	         cell5 = document.createElement("td");

	         textnode1=document.createTextNode(data[i].label);
	         textnode2=document.createTextNode(data[i].dates[j].startdate.toString().substring(3,16));
	         textnode3=document.createTextNode(data[i].dates[j].enddate.toString().substring(3,16));
	         textnode4=document.createTextNode(d.obj.Instructions.substring(0,45) + "...");
	         textnode5=document.createTextNode(d.obj.Provider);

	         cell1.appendChild(textnode1);
	         cell2.appendChild(textnode2);
	         cell3.appendChild(textnode3);
	         cell4.appendChild(textnode4);
	         cell5.appendChild(textnode5);

	         row.appendChild(cell1);
	         row.appendChild(cell2);
	         row.appendChild(cell3);
	         row.appendChild(cell4);
	         row.appendChild(cell5);

	         tabBody.appendChild(row);

		}
	}

}

function preShowDialog(d){

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
                    refills: d.obj.Refills,
			        fillStat: d.obj.FillStatus,
			        provider: d.obj.Provider
			        // positive: {
			        //     title: 'Yay',
			        //     onClick: function (e) {
			        //         alert('Action performed!');
			        //     }
			        // }
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
        refills: null,
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

    if (options.rx != null) {
        $('<p>  <span style="font-weight:bold;">Refills: </span>' + options.refills + '</p><br>').appendTo(content);
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
    // if (options.cancelable) {
    //     dialog.click(function () {
    //         hideDialog(dialog);
    //     });
    //     $(document).bind("keyup.dialog", function (e) {
    //         if (e.which == 27)
    //             hideDialog(dialog);
    //     });
    //     content.click(function (e) {
    //         e.stopPropagation();
    //     });
    // }
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



