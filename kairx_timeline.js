//prepData();
		
// do all previous smart on fhir, get data js stuff here

var allInfo ={
  "patient": {
    "resourceType": "Patient",
    "text": {
      "status": "generated",
      "div": "<div>\n        \n            <p>Patrick G. Taylor</p>\n      \n          </div>"
    },
    "identifier": [
      {
        "use": "usual",
        "label": "SMART Hospiptal MRN",
        "system": "urn:oid:0.1.2.3.4.5.6.7",
        "value": "1134281"
      }
    ],
    "name": [
      {
        "use": "official",
        "family": [
          "Taylor"
        ],
        "given": [
          "Patrick",
          "G."
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
        "value": "patrick.taylor@example.com"
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
    "birthDate": "2004-10-15",
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
      "id": "1134281"
    }
  },
  "dispensements": [
    {
      "resourceType": "MedicationDispense",
      "text": {
        "status": "generated",
        "div": "<div>\n      Dispensed 22 tablets = 10 day supply of Mupirocin 0.02 MG/MG Topical Ointment\n    </div>"
      },
      "contained": [
        {
          "resourceType": "Medication",
          "_id": "med",
          "name": "Mupirocin 0.02 MG/MG Topical Ointment",
          "code": {
            "coding": [
              {
                "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
                "code": "106346",
                "display": "Mupirocin 0.02 MG/MG Topical Ointment"
              }
            ]
          }
        }
      ],
      "patient": {
        "reference": "Patient/1134281"
      },
      "authorizingPrescription": [
        {
          "reference": "MedicationPrescription/7354"
        }
      ],
      "dispense": [
        {
          "status": "completed",
          "quantity": {
            "value": 22,
            "units": "tablets",
            "system": "http://unitsofmeasure.org",
            "code": "{tablets}"
          },
          "medication": {
            "reference": "#med"
          },
          "whenHandedOver": "2009-04-06"
        }
      ],
      "resourceId": {
        "resource": "MedicationDispense",
        "id": "7355"
      }
    },
    {
      "resourceType": "MedicationDispense",
      "text": {
        "status": "generated",
        "div": "<div>\n      Dispensed 100 tablets = 10 day supply of Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension\n    </div>"
      },
      "contained": [
        {
          "resourceType": "Medication",
          "_id": "med",
          "name": "Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension",
          "code": {
            "coding": [
              {
                "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
                "code": "617423",
                "display": "Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension"
              }
            ]
          }
        }
      ],
      "patient": {
        "reference": "Patient/1134281"
      },
      "authorizingPrescription": [
        {
          "reference": "MedicationPrescription/7356"
        }
      ],
      "dispense": [
        {
          "status": "completed",
          "quantity": {
            "value": 100,
            "units": "tablets",
            "system": "http://unitsofmeasure.org",
            "code": "{tablets}"
          },
          "medication": {
            "reference": "#med"
          },
          "whenHandedOver": "2009-06-17"
        }
      ],
      "resourceId": {
        "resource": "MedicationDispense",
        "id": "7357"
      }
    }
  ],
  "conditions": [
    {
      "resourceType": "Condition",
      "text": {
        "status": "generated",
        "div": "<div>Neonatal jaundice associated with preterm delivery</div>"
      },
      "subject": {
        "reference": "Patient/1134281"
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/id",
            "code": "73749009",
            "display": "Neonatal jaundice associated with preterm delivery"
          }
        ],
        "text": "Neonatal jaundice associated with preterm delivery"
      },
      "status": "confirmed",
      "onsetDate": "2005-07-04",
      "resourceId": {
        "resource": "Condition",
        "id": "7358"
      }
    },
    {
      "resourceType": "Condition",
      "text": {
        "status": "generated",
        "div": "<div>Perinatal cyanotic attacks</div>"
      },
      "subject": {
        "reference": "Patient/1134281"
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/id",
            "code": "95617006",
            "display": "Perinatal cyanotic attacks"
          }
        ],
        "text": "Perinatal cyanotic attacks"
      },
      "status": "confirmed",
      "onsetDate": "2005-07-04",
      "resourceId": {
        "resource": "Condition",
        "id": "7359"
      }
    },
    {
      "resourceType": "Condition",
      "text": {
        "status": "generated",
        "div": "<div>Respiratory distress syndrome in the newborn</div>"
      },
      "subject": {
        "reference": "Patient/1134281"
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/id",
            "code": "46775006",
            "display": "Respiratory distress syndrome in the newborn"
          }
        ],
        "text": "Respiratory distress syndrome in the newborn"
      },
      "status": "confirmed",
      "onsetDate": "2005-07-04",
      "resourceId": {
        "resource": "Condition",
        "id": "7360"
      }
    },
    {
      "resourceType": "Condition",
      "text": {
        "status": "generated",
        "div": "<div>Scalp injury</div>"
      },
      "subject": {
        "reference": "Patient/1134281"
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/id",
            "code": "206200000",
            "display": "Scalp injury"
          }
        ],
        "text": "Scalp injury"
      },
      "status": "confirmed",
      "onsetDate": "2005-07-04",
      "resourceId": {
        "resource": "Condition",
        "id": "7361"
      }
    },
    {
      "resourceType": "Condition",
      "text": {
        "status": "generated",
        "div": "<div>Single liveborn, born in hospital, delivered without mention of cesarean section</div>"
      },
      "subject": {
        "reference": "Patient/1134281"
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/id",
            "code": "442311008",
            "display": "Single liveborn, born in hospital, delivered without mention of cesarean section"
          }
        ],
        "text": "Single liveborn, born in hospital, delivered without mention of cesarean section"
      },
      "status": "confirmed",
      "onsetDate": "2005-07-04",
      "resourceId": {
        "resource": "Condition",
        "id": "7362"
      }
    },
    {
      "resourceType": "Condition",
      "text": {
        "status": "generated",
        "div": "<div>Neonatal jaundice</div>"
      },
      "subject": {
        "reference": "Patient/1134281"
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/id",
            "code": "387712008",
            "display": "Neonatal jaundice"
          }
        ],
        "text": "Neonatal jaundice"
      },
      "status": "confirmed",
      "onsetDate": "2005-07-08",
      "resourceId": {
        "resource": "Condition",
        "id": "7363"
      }
    },
    {
      "resourceType": "Condition",
      "text": {
        "status": "generated",
        "div": "<div>Jaundice</div>"
      },
      "subject": {
        "reference": "Patient/1134281"
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/id",
            "code": "18165001",
            "display": "Jaundice"
          }
        ],
        "text": "Jaundice"
      },
      "status": "confirmed",
      "onsetDate": "2005-07-10",
      "resourceId": {
        "resource": "Condition",
        "id": "7364"
      }
    },
    {
      "resourceType": "Condition",
      "text": {
        "status": "generated",
        "div": "<div>Acute upper respiratory infection</div>"
      },
      "subject": {
        "reference": "Patient/1134281"
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/id",
            "code": "54150009",
            "display": "Acute upper respiratory infection"
          }
        ],
        "text": "Acute upper respiratory infection"
      },
      "status": "confirmed",
      "onsetDate": "2005-11-28",
      "resourceId": {
        "resource": "Condition",
        "id": "7365"
      }
    },
    {
      "resourceType": "Condition",
      "text": {
        "status": "generated",
        "div": "<div>Gastroesophageal reflux disease</div>"
      },
      "subject": {
        "reference": "Patient/1134281"
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/id",
            "code": "235595009",
            "display": "Gastroesophageal reflux disease"
          }
        ],
        "text": "Gastroesophageal reflux disease"
      },
      "status": "confirmed",
      "onsetDate": "2006-02-09",
      "resourceId": {
        "resource": "Condition",
        "id": "7366"
      }
    },
    {
      "resourceType": "Condition",
      "text": {
        "status": "generated",
        "div": "<div>Otitis media</div>"
      },
      "subject": {
        "reference": "Patient/1134281"
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/id",
            "code": "65363002",
            "display": "Otitis media"
          }
        ],
        "text": "Otitis media"
      },
      "status": "confirmed",
      "onsetDate": "2006-08-31",
      "resourceId": {
        "resource": "Condition",
        "id": "7367"
      }
    },
    {
      "resourceType": "Condition",
      "text": {
        "status": "generated",
        "div": "<div>Other and unspecified noninfectious gastroenteritis and colitis</div>"
      },
      "subject": {
        "reference": "Patient/1134281"
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/id",
            "code": "25374005",
            "display": "Other and unspecified noninfectious gastroenteritis and colitis"
          }
        ],
        "text": "Other and unspecified noninfectious gastroenteritis and colitis"
      },
      "status": "confirmed",
      "onsetDate": "2006-12-14",
      "resourceId": {
        "resource": "Condition",
        "id": "7368"
      }
    },
    {
      "resourceType": "Condition",
      "text": {
        "status": "generated",
        "div": "<div>Acute sinusitis</div>"
      },
      "subject": {
        "reference": "Patient/1134281"
      },
      "code": {
        "coding": [
          {
            "system": "http://snomed.info/id",
            "code": "36971009",
            "display": "Acute sinusitis"
          }
        ],
        "text": "Acute sinusitis"
      },
      "status": "confirmed",
      "onsetDate": "2009-06-17",
      "resourceId": {
        "resource": "Condition",
        "id": "7369"
      }
    }
  ],
  "prescriptions": [
    {
      "resourceType": "MedicationPrescription",
      "text": {
        "status": "generated",
        "div": "<div>\n      Amoxicillin 50 MG/ML Oral Suspension (rxnorm: 239191)\n    </div>"
      },
      "contained": [
        {
          "resourceType": "Medication",
          "_id": "med",
          "name": "Amoxicillin 50 MG/ML Oral Suspension",
          "code": {
            "coding": [
              {
                "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
                "code": "239191",
                "display": "Amoxicillin 50 MG/ML Oral Suspension"
              }
            ]
          }
        }
      ],
      "status": "active",
      "patient": {
        "reference": "Patient/1134281"
      },
      "medication": {
        "reference": "#med"
      },
      "dosageInstruction": [
        {
          "timingSchedule": {
            "event": [
              {
                "start": "2005-11-28"
              }
            ],
            "repeat": {
              "frequency": 2,
              "duration": 1,
              "units": "d"
            }
          },
          "doseQuantity": {
            "value": 10,
            "units": "mL",
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      ],
      "resourceId": {
        "resource": "MedicationPrescription",
        "id": "7349"
      }
    },
    {
      "resourceType": "MedicationPrescription",
      "text": {
        "status": "generated",
        "div": "<div>\n      carbinoxamine 1 MG/ML / Dextromethorphan 4 MG/ML / Pseudoephedrine 15 MG/ML Oral Solution [Carbofed DM Drops] (rxnorm: 352027)\n    </div>"
      },
      "contained": [
        {
          "resourceType": "Medication",
          "_id": "med",
          "name": "carbinoxamine 1 MG/ML / Dextromethorphan 4 MG/ML / Pseudoephedrine 15 MG/ML Oral Solution [Carbofed DM Drops]",
          "code": {
            "coding": [
              {
                "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
                "code": "352027",
                "display": "carbinoxamine 1 MG/ML / Dextromethorphan 4 MG/ML / Pseudoephedrine 15 MG/ML Oral Solution [Carbofed DM Drops]"
              }
            ]
          }
        }
      ],
      "status": "active",
      "patient": {
        "reference": "Patient/1134281"
      },
      "medication": {
        "reference": "#med"
      },
      "dosageInstruction": [
        {
          "timingSchedule": {
            "event": [
              {
                "start": "2005-11-28"
              }
            ]
          }
        }
      ],
      "resourceId": {
        "resource": "MedicationPrescription",
        "id": "7350"
      }
    },
    {
      "resourceType": "MedicationPrescription",
      "text": {
        "status": "generated",
        "div": "<div>\n      Metoclopramide 1 MG/ML Oral Solution (rxnorm: 104884)\n    </div>"
      },
      "contained": [
        {
          "resourceType": "Medication",
          "_id": "med",
          "name": "Metoclopramide 1 MG/ML Oral Solution",
          "code": {
            "coding": [
              {
                "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
                "code": "104884",
                "display": "Metoclopramide 1 MG/ML Oral Solution"
              }
            ]
          }
        }
      ],
      "status": "active",
      "patient": {
        "reference": "Patient/1134281"
      },
      "medication": {
        "reference": "#med"
      },
      "dosageInstruction": [
        {
          "timingSchedule": {
            "event": [
              {
                "start": "2006-01-08"
              }
            ],
            "repeat": {
              "frequency": 4,
              "duration": 1,
              "units": "d"
            }
          },
          "doseQuantity": {
            "value": 4,
            "units": "mL",
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      ],
      "resourceId": {
        "resource": "MedicationPrescription",
        "id": "7351"
      }
    },
    {
      "resourceType": "MedicationPrescription",
      "text": {
        "status": "generated",
        "div": "<div>\n      Ranitidine 15 MG/ML Oral Solution [Zantac] (rxnorm: 755272)\n    </div>"
      },
      "contained": [
        {
          "resourceType": "Medication",
          "_id": "med",
          "name": "Ranitidine 15 MG/ML Oral Solution [Zantac]",
          "code": {
            "coding": [
              {
                "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
                "code": "755272",
                "display": "Ranitidine 15 MG/ML Oral Solution [Zantac]"
              }
            ]
          }
        }
      ],
      "status": "active",
      "patient": {
        "reference": "Patient/1134281"
      },
      "medication": {
        "reference": "#med"
      },
      "dosageInstruction": [
        {
          "timingSchedule": {
            "event": [
              {
                "start": "2006-01-08"
              }
            ],
            "repeat": {
              "frequency": 2,
              "duration": 1,
              "units": "d"
            }
          },
          "doseQuantity": {
            "value": 6,
            "units": "mL",
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      ],
      "resourceId": {
        "resource": "MedicationPrescription",
        "id": "7352"
      }
    },
    {
      "resourceType": "MedicationPrescription",
      "text": {
        "status": "generated",
        "div": "<div>\n      Amoxicillin 80 MG/ML Oral Suspension (rxnorm: 308189)\n    </div>"
      },
      "contained": [
        {
          "resourceType": "Medication",
          "_id": "med",
          "name": "Amoxicillin 80 MG/ML Oral Suspension",
          "code": {
            "coding": [
              {
                "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
                "code": "308189",
                "display": "Amoxicillin 80 MG/ML Oral Suspension"
              }
            ]
          }
        }
      ],
      "status": "active",
      "patient": {
        "reference": "Patient/1134281"
      },
      "medication": {
        "reference": "#med"
      },
      "dosageInstruction": [
        {
          "timingSchedule": {
            "event": [
              {
                "start": "2006-08-31"
              }
            ],
            "repeat": {
              "frequency": 2,
              "duration": 1,
              "units": "d"
            }
          },
          "doseQuantity": {
            "value": 7,
            "units": "mL",
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      ],
      "resourceId": {
        "resource": "MedicationPrescription",
        "id": "7353"
      }
    },
    {
      "resourceType": "MedicationPrescription",
      "text": {
        "status": "generated",
        "div": "<div>\n      Mupirocin 0.02 MG/MG Topical Ointment (rxnorm: 106346)\n    </div>"
      },
      "contained": [
        {
          "resourceType": "Medication",
          "_id": "med",
          "name": "Mupirocin 0.02 MG/MG Topical Ointment",
          "code": {
            "coding": [
              {
                "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
                "code": "106346",
                "display": "Mupirocin 0.02 MG/MG Topical Ointment"
              }
            ]
          }
        }
      ],
      "status": "active",
      "patient": {
        "reference": "Patient/1134281"
      },
      "medication": {
        "reference": "#med"
      },
      "dosageInstruction": [
        {
          "timingSchedule": {
            "event": [
              {
                "start": "2009-04-06"
              }
            ]
          }
        }
      ],
      "resourceId": {
        "resource": "MedicationPrescription",
        "id": "7354"
      }
    },
    {
      "resourceType": "MedicationPrescription",
      "text": {
        "status": "generated",
        "div": "<div>\n      Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension (rxnorm: 617423)\n    </div>"
      },
      "contained": [
        {
          "resourceType": "Medication",
          "_id": "med",
          "name": "Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension",
          "code": {
            "coding": [
              {
                "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
                "code": "617423",
                "display": "Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension"
              }
            ]
          }
        }
      ],
      "status": "active",
      "patient": {
        "reference": "Patient/1134281"
      },
      "medication": {
        "reference": "#med"
      },
      "dosageInstruction": [
        {
          "timingSchedule": {
            "event": [
              {
                "start": "2009-06-17"
              }
            ],
            "repeat": {
              "frequency": 2,
              "duration": 1,
              "units": "d"
            }
          },
          "doseQuantity": {
            "value": 7,
            "units": "mL",
            "system": "http://unitsofmeasure.org",
            "code": "mL"
          }
        }
      ],
      "resourceId": {
        "resource": "MedicationPrescription",
        "id": "7356"
      }
    }
  ]
};
var x;

// $( window ).load( function() {
// 		console.log("start");


// 		// $.getJSON("input.json").done(function(response) {
//   //   		console.log("resp", response); //here's your response
// 		// });

// 		// var req = $.getJSON("input.json");
// 		// req.done(function(response) { console.log("finally"); });
// 		// x = req;
// 		// loadData("input", function(data) {
// 		// 	console.log(data);

// 		// 	prepData();
// 		// });

//         // console.log( "window loaded" );
//         // console.log(loadData("input"));
//         // x = loadData("input");

//     } );

// var req = $.getJSON("input.json");
// req.done(function(response) { prepData(); });
// x = req;
// prepData();




// function loadData(fileName, callback) { 
//     // getting json from a remote file
//     // by returning the jqXHR object we can use the .done() function on it
//     // so the callback gets executed as soon as the request returns successfully
//     console.log("yes!");
//     //return $.getJSON( fileName + ".json");
//     // x = $.getJSON( fileName + ".json")
//     // callback(x);


//     $.getJSON(fileName + ".json").done(function(response) {
//     	console.log("resp", response); //here's your response
// 	});
// }

prepData();

function prepData(){
	console.log("gets here!", allInfo);
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

	    handlePatientData(allInfo);
	}


	function handlePatientData(allData) {
	    var name = allData.patient.name[0];
	    var formatted = name.given.join(" ") + " " + name.family+"'s Profile";
	    var ptmrn = "MRN: " + allData.patient.resourceId.id;
	    var ptdob = "DOB: " + allData.patient.birthDate;
	    var ptsex = "SEX: " + allData.patient.gender.coding[0].display;
	    var ptage = "AGE: " + (2016 - allData.patient.birthDate.split("-")[0]).toString();

	    // Since there is no weight or height available in this EHR data, generating it.
	    // weight hash.... if male, 150-300, if female, 100-250
	    	//150 [100] + 10*(hash ID on 15)
	    // height hash... if male, 5'5" to 6'5", if female 5' to 6'
	    	//5.5 [5] + 4*(hash ID on 3)
	    var sexVar = ((allData.patient.gender.coding[0].code == "M") ? 1 : 0);
	    var ptwt = "WEIGHT: " + (70 + sexVar*50 + 7*(allData.patient.resourceId.id % 15)).toString();
	    var ptht = "HEIGHT: " + (5 + sexVar*0.5 + 0.4*(allData.patient.resourceId.id % 3)).toString();


	    $("#ptname").text(formatted);
	    $("#ptmrn").text(ptmrn);
	    $("#ptdob").text(ptdob);
	    $("#ptage").text(ptage);
	    $("#ptsex").text(ptsex);
	    $("#ptwt").text(ptwt);
	    $("#ptht").text(ptht);


	    var prescriptionsLeft = allData.prescriptions.length;
	    var conditionsLeft = allData.conditions.length;

	    var diseasesForEachDrug = {};
	    var drugsForEachDisease = {};
	    var drugClasses	= {};
	    var conditions = [];
	    var filter_out = {};
	    var conditionDescriptions = {};

	    var wordsToAvoidContaining = ['disease', 'infect', 'bacteria', 'relate'];
	    var wordsToAvoidBeing = ['and', 'or'];

	    drugsForEachCondition = {};

	    //get list of med names of dispensements to only look up rx nav for those drugs
	    disp_drugs = [];
	    for(var i = 0; i < allData.dispensements.length; i++){
	    	disp_drugs.push(allData.dispensements[i].contained[0].name);
	    }

	    all_diseases = [];


	    var disp = allData.dispensements
	    for (var i = 0; i < disp.length; i++) {
	        var med = disp[i];
	        if (drugs.indexOf(med.contained[0].name) == -1) {
	            drugs.push(med.contained[0].name);
	        }

	        spans.push({
	            id: i,
	            drug: med.contained[0].name,
	            start: med.dispense[0].whenHandedOver,
	            days: med.text.div.match(/= [^ ]+/)[0].substring(2)
	        })
	    }

	    function typePop(p){
	    	var select = document.getElementById("type_content");
	    	assoc(p,"all");

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

	    function condPop(p){
	    	var select = document.getElementById("cond_content"); 
		    assoc(p,"all");

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

	    assoc(null,"all");

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
	                    if(med.contained[0].name==drug){
	                        if (drugsNew.indexOf(med.contained[0].name) == -1) {
	                            drugsNew.push(med.contained[0].name);
	                        }
	                        spansNew.push({
	                            id: i,
	                            drug: med.contained[0].name,
	                            start: med.dispense[0].whenHandedOver,
	                            days: med.text.div.match(/= [^ ]+/)[0].substring(2)
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
	            fullname = spans[i].drug.split(" ");
	            for(var j = 0; j < fullname.length; j++) {
	                if(fullname[j].indexOf("MG") > -1){
	                    dose = fullname[j-1] + " " + fullname[j];
	                    
	                    name = fullname.slice(0,j-1).join([separator = ' ']);
	                    type = fullname.slice(j+1,fullname.length+1).join([separator = ' ']);
	                    
	                    
	                }
	            }

	            start = spans[i].start;
	            days = spans[i].days;

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
	                    dosage3: ""
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
	                        dosage3: ""
	                    }]
	                })
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
			seetData(dataUlt);
	    } // set data
	}    // handle

	 // *** WORKS ***
 //    dataSet = [{"label": "insulin glargine", "dates":[{"startdate": new Date(2012,10,19), "enddate": new Date(2013,8,19), "strength": 8, "dosage": 28, "dosage2": "", "dosage3": " u"}]},
	// {"label": "omeprazole", "dates":[{"startdate": new Date(2012,4,19), "enddate": new Date(2013,0,31), "strength": 16, "dosage": 40, "dosage2": "", "dosage3": " mg"}, {"startdate": new Date(2013,2,07), "enddate": new Date(2013,8,19), "strength": 16, "dosage": 40, "dosage2": "", "dosage3": " mg"}]}];
	// seetData(dataSet);
}



function seetData(data){
	// set data here
	console.log("yes?");
	renderTimeLine(data);
}

function renderTimeLine(data){
	//console.log('render',data);
	var group, barGroup, context, scruboffset = 0, scrubData, t1, scrubDisplay, circGroup;
		
	var m = [60, 120, 0, 120]; // top right bottom left
	var m2 = [420, 120, 15, 60];
	var	w = 900 - m[1] - m[3]; // width    
	var h = 600 - m[0] - m[2]; // height
	var h2 = 600 - m2[0] - m2[2];
	
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];				//Array to display the current month on the TodayLine
	
	//Data array for the timeline
	// fn to add in medication for each patient. filter later
	x=d3.time.scale().range([126, w + 160]);		//X-axis 
	x2 = d3.time.scale().range([126, w + 160]);		//X-axis in the scrubber region
	var startdates=[];									//Array to store the startdates
	var enddates=[];									//Array to store the enddates
	
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
	var rDate = new Date();	//Variable to store the right date to set brush extent 
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
				if(d.strength == "max"){
					return "rgba(195,0,0,1)";
				}
				else {
					ret = "rgba(55,37,217," + d.strength + ")";
					return ret;
				}
				// if(d.strength==1){
				// 	return "rgba(47,47,47,.2)";
				// }else if(d.strength==4){
				// 	return "rgba(47,47,47,.35)";
				// }else if(d.strength == 8){
				// 	return "rgba(47,47,47,.6)";
				// }else if(d.strength == 16){
				// 	return "rgba(85,107,47,1)";
				// }else{
				// 	return "rgba(85,107,47,1)";
				// 	//return "rgba(195,0,0,1)";
				// }
			})
			.attr("cursor", "move")
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
	var todayLine = chart.append("g"); //Appends a line indicatiin current date and month
	
	//Append triangle above the line
	todayLine.append("path")
			.attr("class", "todayTriangle")
			.attr("d", d3.svg.symbol().type("triangle-down"))
			.attr("transform", "translate(" + (x(currDate) - 220) + ", 60)")
			.attr("fill", "#000000");
				
	todayLine.append("line")
			.attr("class", "todayLine")
			.attr("y1", 62)
			.attr("y2", h-25)
			.attr("stroke", "#999999")
			.attr("stroke-width", 2);
				
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
	// 		.attr("class", "todayTriangle")
	// 		.attr("d", d3.svg.symbol().type("triangle-down"))
	// 		.attr("transform", "translate(" + (x(currDate) - 220) + ", 60)")
	// 		.attr("fill", "#999999");
				
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
	var todayLineText=chart.append("g");
	todayLineText.append("text")
			.attr("class", "todayLineText")
			.attr("x", x(currDate)-38)
			.attr("width", 10)
			.attr("y", 30)
			.attr("height", 10)
			.attr("fill", "black")
			.attr("font-size", "11px")
			.text("Today " + newDate);
	
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
					// 	return "rgba(47,47,47,.2)";
					// }else if(d.strength==4){
					// 	return "rgba(47,47,47,.35)";
					// }else if(d.strength == 8){
					// 	return "rgba(47,47,47,.6)";
					// }else if(d.strength == 16){
					// 	return "rgba(47,47,47,1)";
					// }else{
					// 	return "rgba(195,0,0,1)";
					// }
				});
	});
	
	//Appends a line indicating the current date in the context region
	context.append("line")
			.attr("class", "contextLine")
			.attr("x1", x2(currDate))
			.attr("x2", x2(currDate))
			.attr("y1", -4)
			.attr("y2", 54)
			.attr("stroke-width", 1)
			.attr("stroke", "black")
			.attr("stroke-opacity", .5);
	
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
					// 	d3.select(this)
					// 		.attr("fill", "rgba(67,67,67,1)")
					// 		.text(data[ind].dates[i].dosage2);
					// 		//.text(data[ind].dates[i].dosage + data[ind].dates[i].dosage3 + data[ind].dates[i].dosage2);
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
			updateTodayLine();
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
			updateTodayLine();
		}
		
		//Redraws the today line when zooming/dragging the timeline
		function updateTodayLine(){
			d3.select(".todayTriangle").attr("transform", "translate("+ (x(currDate)-20) +", 59)")
			d3.select(".todayLine").attr("x1", x(currDate)-20)
					.attr("x2", x(currDate)-20);
					
			d3.select(".todayLineText").attr("x", x(currDate) - 38)
									.attr("width", 10);
		}
		
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
					// 	var d = new Date(centerDate);
					// 	var lAdjust = parseInt(d.toString().split(" ")[3] - minDate.toString().split(" ")[3]) + 1;
					// 	var rAdjust = parseInt(maxDate.toString().split(" ")[3] - d.toString().split(" ")[3]) + 1;

					// 	console.log(lAdjust);
					// 	console.log(rAdjust);
					// 	left.setTime(centerDate + (one_day*365*lAdjust));
					// 	right.setTime(centerDate - (one_day*365*rAdjust));

					// 	//d3.select('rect.scrubber').attr("x",938);
					// 	// left.setTime(Date.parse(minDate) + one_day);
					// 	// right.setTime(Date.parse(maxDate) - one_day);
					// 	// left.setTime(centerDate - ((one_day*365) +  (one_day*365*lAdjust)) );
					// 	// right.setTime(centerDate + (one_day*365) + (one_day*365*rAdjust) );
					// 	break;
					case "fiveYears":
						left.setTime(centerDate + (one_day*365*2.5));
						right.setTime(centerDate - (one_day*365*2.5));
						break;
					// case "sixMonths":
					// 	d3.select('rect.scrubber').attr("x",960);
					// 	left.setTime(centerDate + (one_day*365/4));
					// 	right.setTime(centerDate - (one_day*365/4));
					// 	break;
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


	//	------------
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