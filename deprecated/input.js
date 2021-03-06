
module.exports = {
  getData: function() {
    var allinfo = {
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
    return allInfo;
  }
};

// exports.getData = function() {
//   var allinfo = {
//     "patient": {
//       "resourceType": "Patient",
//       "text": {
//         "status": "generated",
//         "div": "<div>\n        \n            <p>Patrick G. Taylor</p>\n      \n          </div>"
//       },
//       "identifier": [
//         {
//           "use": "usual",
//           "label": "SMART Hospiptal MRN",
//           "system": "urn:oid:0.1.2.3.4.5.6.7",
//           "value": "1134281"
//         }
//       ],
//       "name": [
//         {
//           "use": "official",
//           "family": [
//             "Taylor"
//           ],
//           "given": [
//             "Patrick",
//             "G."
//           ]
//         }
//       ],
//       "telecom": [
//         {
//           "system": "phone",
//           "value": "800-539-3986",
//           "use": "home"
//         },
//         {
//           "system": "phone",
//           "use": "mobile"
//         },
//         {
//           "system": "email",
//           "value": "patrick.taylor@example.com"
//         }
//       ],
//       "gender": {
//         "coding": [
//           {
//             "system": "http://hl7.org/fhir/v3/AdministrativeGender",
//             "code": "M",
//             "display": "Male"
//           }
//         ]
//       },
//       "birthDate": "2004-10-15",
//       "address": [
//         {
//           "use": "home",
//           "line": [
//             "24 Pine RdApt 3"
//           ],
//           "city": "Bixby",
//           "state": "OK",
//           "zip": "74008",
//           "country": "USA"
//         }
//       ],
//       "active": true,
//       "resourceId": {
//         "resource": "Patient",
//         "id": "1134281"
//       }
//     },
//     "dispensements": [
//       {
//         "resourceType": "MedicationDispense",
//         "text": {
//           "status": "generated",
//           "div": "<div>\n      Dispensed 22 tablets = 10 day supply of Mupirocin 0.02 MG/MG Topical Ointment\n    </div>"
//         },
//         "contained": [
//           {
//             "resourceType": "Medication",
//             "_id": "med",
//             "name": "Mupirocin 0.02 MG/MG Topical Ointment",
//             "code": {
//               "coding": [
//                 {
//                   "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                   "code": "106346",
//                   "display": "Mupirocin 0.02 MG/MG Topical Ointment"
//                 }
//               ]
//             }
//           }
//         ],
//         "patient": {
//           "reference": "Patient/1134281"
//         },
//         "authorizingPrescription": [
//           {
//             "reference": "MedicationPrescription/7354"
//           }
//         ],
//         "dispense": [
//           {
//             "status": "completed",
//             "quantity": {
//               "value": 22,
//               "units": "tablets",
//               "system": "http://unitsofmeasure.org",
//               "code": "{tablets}"
//             },
//             "medication": {
//               "reference": "#med"
//             },
//             "whenHandedOver": "2009-04-06"
//           }
//         ],
//         "resourceId": {
//           "resource": "MedicationDispense",
//           "id": "7355"
//         }
//       },
//       {
//         "resourceType": "MedicationDispense",
//         "text": {
//           "status": "generated",
//           "div": "<div>\n      Dispensed 100 tablets = 10 day supply of Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension\n    </div>"
//         },
//         "contained": [
//           {
//             "resourceType": "Medication",
//             "_id": "med",
//             "name": "Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension",
//             "code": {
//               "coding": [
//                 {
//                   "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                   "code": "617423",
//                   "display": "Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension"
//                 }
//               ]
//             }
//           }
//         ],
//         "patient": {
//           "reference": "Patient/1134281"
//         },
//         "authorizingPrescription": [
//           {
//             "reference": "MedicationPrescription/7356"
//           }
//         ],
//         "dispense": [
//           {
//             "status": "completed",
//             "quantity": {
//               "value": 100,
//               "units": "tablets",
//               "system": "http://unitsofmeasure.org",
//               "code": "{tablets}"
//             },
//             "medication": {
//               "reference": "#med"
//             },
//             "whenHandedOver": "2009-06-17"
//           }
//         ],
//         "resourceId": {
//           "resource": "MedicationDispense",
//           "id": "7357"
//         }
//       }
//     ],
//     "conditions": [
//       {
//         "resourceType": "Condition",
//         "text": {
//           "status": "generated",
//           "div": "<div>Neonatal jaundice associated with preterm delivery</div>"
//         },
//         "subject": {
//           "reference": "Patient/1134281"
//         },
//         "code": {
//           "coding": [
//             {
//               "system": "http://snomed.info/id",
//               "code": "73749009",
//               "display": "Neonatal jaundice associated with preterm delivery"
//             }
//           ],
//           "text": "Neonatal jaundice associated with preterm delivery"
//         },
//         "status": "confirmed",
//         "onsetDate": "2005-07-04",
//         "resourceId": {
//           "resource": "Condition",
//           "id": "7358"
//         }
//       },
//       {
//         "resourceType": "Condition",
//         "text": {
//           "status": "generated",
//           "div": "<div>Perinatal cyanotic attacks</div>"
//         },
//         "subject": {
//           "reference": "Patient/1134281"
//         },
//         "code": {
//           "coding": [
//             {
//               "system": "http://snomed.info/id",
//               "code": "95617006",
//               "display": "Perinatal cyanotic attacks"
//             }
//           ],
//           "text": "Perinatal cyanotic attacks"
//         },
//         "status": "confirmed",
//         "onsetDate": "2005-07-04",
//         "resourceId": {
//           "resource": "Condition",
//           "id": "7359"
//         }
//       },
//       {
//         "resourceType": "Condition",
//         "text": {
//           "status": "generated",
//           "div": "<div>Respiratory distress syndrome in the newborn</div>"
//         },
//         "subject": {
//           "reference": "Patient/1134281"
//         },
//         "code": {
//           "coding": [
//             {
//               "system": "http://snomed.info/id",
//               "code": "46775006",
//               "display": "Respiratory distress syndrome in the newborn"
//             }
//           ],
//           "text": "Respiratory distress syndrome in the newborn"
//         },
//         "status": "confirmed",
//         "onsetDate": "2005-07-04",
//         "resourceId": {
//           "resource": "Condition",
//           "id": "7360"
//         }
//       },
//       {
//         "resourceType": "Condition",
//         "text": {
//           "status": "generated",
//           "div": "<div>Scalp injury</div>"
//         },
//         "subject": {
//           "reference": "Patient/1134281"
//         },
//         "code": {
//           "coding": [
//             {
//               "system": "http://snomed.info/id",
//               "code": "206200000",
//               "display": "Scalp injury"
//             }
//           ],
//           "text": "Scalp injury"
//         },
//         "status": "confirmed",
//         "onsetDate": "2005-07-04",
//         "resourceId": {
//           "resource": "Condition",
//           "id": "7361"
//         }
//       },
//       {
//         "resourceType": "Condition",
//         "text": {
//           "status": "generated",
//           "div": "<div>Single liveborn, born in hospital, delivered without mention of cesarean section</div>"
//         },
//         "subject": {
//           "reference": "Patient/1134281"
//         },
//         "code": {
//           "coding": [
//             {
//               "system": "http://snomed.info/id",
//               "code": "442311008",
//               "display": "Single liveborn, born in hospital, delivered without mention of cesarean section"
//             }
//           ],
//           "text": "Single liveborn, born in hospital, delivered without mention of cesarean section"
//         },
//         "status": "confirmed",
//         "onsetDate": "2005-07-04",
//         "resourceId": {
//           "resource": "Condition",
//           "id": "7362"
//         }
//       },
//       {
//         "resourceType": "Condition",
//         "text": {
//           "status": "generated",
//           "div": "<div>Neonatal jaundice</div>"
//         },
//         "subject": {
//           "reference": "Patient/1134281"
//         },
//         "code": {
//           "coding": [
//             {
//               "system": "http://snomed.info/id",
//               "code": "387712008",
//               "display": "Neonatal jaundice"
//             }
//           ],
//           "text": "Neonatal jaundice"
//         },
//         "status": "confirmed",
//         "onsetDate": "2005-07-08",
//         "resourceId": {
//           "resource": "Condition",
//           "id": "7363"
//         }
//       },
//       {
//         "resourceType": "Condition",
//         "text": {
//           "status": "generated",
//           "div": "<div>Jaundice</div>"
//         },
//         "subject": {
//           "reference": "Patient/1134281"
//         },
//         "code": {
//           "coding": [
//             {
//               "system": "http://snomed.info/id",
//               "code": "18165001",
//               "display": "Jaundice"
//             }
//           ],
//           "text": "Jaundice"
//         },
//         "status": "confirmed",
//         "onsetDate": "2005-07-10",
//         "resourceId": {
//           "resource": "Condition",
//           "id": "7364"
//         }
//       },
//       {
//         "resourceType": "Condition",
//         "text": {
//           "status": "generated",
//           "div": "<div>Acute upper respiratory infection</div>"
//         },
//         "subject": {
//           "reference": "Patient/1134281"
//         },
//         "code": {
//           "coding": [
//             {
//               "system": "http://snomed.info/id",
//               "code": "54150009",
//               "display": "Acute upper respiratory infection"
//             }
//           ],
//           "text": "Acute upper respiratory infection"
//         },
//         "status": "confirmed",
//         "onsetDate": "2005-11-28",
//         "resourceId": {
//           "resource": "Condition",
//           "id": "7365"
//         }
//       },
//       {
//         "resourceType": "Condition",
//         "text": {
//           "status": "generated",
//           "div": "<div>Gastroesophageal reflux disease</div>"
//         },
//         "subject": {
//           "reference": "Patient/1134281"
//         },
//         "code": {
//           "coding": [
//             {
//               "system": "http://snomed.info/id",
//               "code": "235595009",
//               "display": "Gastroesophageal reflux disease"
//             }
//           ],
//           "text": "Gastroesophageal reflux disease"
//         },
//         "status": "confirmed",
//         "onsetDate": "2006-02-09",
//         "resourceId": {
//           "resource": "Condition",
//           "id": "7366"
//         }
//       },
//       {
//         "resourceType": "Condition",
//         "text": {
//           "status": "generated",
//           "div": "<div>Otitis media</div>"
//         },
//         "subject": {
//           "reference": "Patient/1134281"
//         },
//         "code": {
//           "coding": [
//             {
//               "system": "http://snomed.info/id",
//               "code": "65363002",
//               "display": "Otitis media"
//             }
//           ],
//           "text": "Otitis media"
//         },
//         "status": "confirmed",
//         "onsetDate": "2006-08-31",
//         "resourceId": {
//           "resource": "Condition",
//           "id": "7367"
//         }
//       },
//       {
//         "resourceType": "Condition",
//         "text": {
//           "status": "generated",
//           "div": "<div>Other and unspecified noninfectious gastroenteritis and colitis</div>"
//         },
//         "subject": {
//           "reference": "Patient/1134281"
//         },
//         "code": {
//           "coding": [
//             {
//               "system": "http://snomed.info/id",
//               "code": "25374005",
//               "display": "Other and unspecified noninfectious gastroenteritis and colitis"
//             }
//           ],
//           "text": "Other and unspecified noninfectious gastroenteritis and colitis"
//         },
//         "status": "confirmed",
//         "onsetDate": "2006-12-14",
//         "resourceId": {
//           "resource": "Condition",
//           "id": "7368"
//         }
//       },
//       {
//         "resourceType": "Condition",
//         "text": {
//           "status": "generated",
//           "div": "<div>Acute sinusitis</div>"
//         },
//         "subject": {
//           "reference": "Patient/1134281"
//         },
//         "code": {
//           "coding": [
//             {
//               "system": "http://snomed.info/id",
//               "code": "36971009",
//               "display": "Acute sinusitis"
//             }
//           ],
//           "text": "Acute sinusitis"
//         },
//         "status": "confirmed",
//         "onsetDate": "2009-06-17",
//         "resourceId": {
//           "resource": "Condition",
//           "id": "7369"
//         }
//       }
//     ],
//     "prescriptions": [
//       {
//         "resourceType": "MedicationPrescription",
//         "text": {
//           "status": "generated",
//           "div": "<div>\n      Amoxicillin 50 MG/ML Oral Suspension (rxnorm: 239191)\n    </div>"
//         },
//         "contained": [
//           {
//             "resourceType": "Medication",
//             "_id": "med",
//             "name": "Amoxicillin 50 MG/ML Oral Suspension",
//             "code": {
//               "coding": [
//                 {
//                   "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                   "code": "239191",
//                   "display": "Amoxicillin 50 MG/ML Oral Suspension"
//                 }
//               ]
//             }
//           }
//         ],
//         "status": "active",
//         "patient": {
//           "reference": "Patient/1134281"
//         },
//         "medication": {
//           "reference": "#med"
//         },
//         "dosageInstruction": [
//           {
//             "timingSchedule": {
//               "event": [
//                 {
//                   "start": "2005-11-28"
//                 }
//               ],
//               "repeat": {
//                 "frequency": 2,
//                 "duration": 1,
//                 "units": "d"
//               }
//             },
//             "doseQuantity": {
//               "value": 10,
//               "units": "mL",
//               "system": "http://unitsofmeasure.org",
//               "code": "mL"
//             }
//           }
//         ],
//         "resourceId": {
//           "resource": "MedicationPrescription",
//           "id": "7349"
//         }
//       },
//       {
//         "resourceType": "MedicationPrescription",
//         "text": {
//           "status": "generated",
//           "div": "<div>\n      carbinoxamine 1 MG/ML / Dextromethorphan 4 MG/ML / Pseudoephedrine 15 MG/ML Oral Solution [Carbofed DM Drops] (rxnorm: 352027)\n    </div>"
//         },
//         "contained": [
//           {
//             "resourceType": "Medication",
//             "_id": "med",
//             "name": "carbinoxamine 1 MG/ML / Dextromethorphan 4 MG/ML / Pseudoephedrine 15 MG/ML Oral Solution [Carbofed DM Drops]",
//             "code": {
//               "coding": [
//                 {
//                   "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                   "code": "352027",
//                   "display": "carbinoxamine 1 MG/ML / Dextromethorphan 4 MG/ML / Pseudoephedrine 15 MG/ML Oral Solution [Carbofed DM Drops]"
//                 }
//               ]
//             }
//           }
//         ],
//         "status": "active",
//         "patient": {
//           "reference": "Patient/1134281"
//         },
//         "medication": {
//           "reference": "#med"
//         },
//         "dosageInstruction": [
//           {
//             "timingSchedule": {
//               "event": [
//                 {
//                   "start": "2005-11-28"
//                 }
//               ]
//             }
//           }
//         ],
//         "resourceId": {
//           "resource": "MedicationPrescription",
//           "id": "7350"
//         }
//       },
//       {
//         "resourceType": "MedicationPrescription",
//         "text": {
//           "status": "generated",
//           "div": "<div>\n      Metoclopramide 1 MG/ML Oral Solution (rxnorm: 104884)\n    </div>"
//         },
//         "contained": [
//           {
//             "resourceType": "Medication",
//             "_id": "med",
//             "name": "Metoclopramide 1 MG/ML Oral Solution",
//             "code": {
//               "coding": [
//                 {
//                   "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                   "code": "104884",
//                   "display": "Metoclopramide 1 MG/ML Oral Solution"
//                 }
//               ]
//             }
//           }
//         ],
//         "status": "active",
//         "patient": {
//           "reference": "Patient/1134281"
//         },
//         "medication": {
//           "reference": "#med"
//         },
//         "dosageInstruction": [
//           {
//             "timingSchedule": {
//               "event": [
//                 {
//                   "start": "2006-01-08"
//                 }
//               ],
//               "repeat": {
//                 "frequency": 4,
//                 "duration": 1,
//                 "units": "d"
//               }
//             },
//             "doseQuantity": {
//               "value": 4,
//               "units": "mL",
//               "system": "http://unitsofmeasure.org",
//               "code": "mL"
//             }
//           }
//         ],
//         "resourceId": {
//           "resource": "MedicationPrescription",
//           "id": "7351"
//         }
//       },
//       {
//         "resourceType": "MedicationPrescription",
//         "text": {
//           "status": "generated",
//           "div": "<div>\n      Ranitidine 15 MG/ML Oral Solution [Zantac] (rxnorm: 755272)\n    </div>"
//         },
//         "contained": [
//           {
//             "resourceType": "Medication",
//             "_id": "med",
//             "name": "Ranitidine 15 MG/ML Oral Solution [Zantac]",
//             "code": {
//               "coding": [
//                 {
//                   "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                   "code": "755272",
//                   "display": "Ranitidine 15 MG/ML Oral Solution [Zantac]"
//                 }
//               ]
//             }
//           }
//         ],
//         "status": "active",
//         "patient": {
//           "reference": "Patient/1134281"
//         },
//         "medication": {
//           "reference": "#med"
//         },
//         "dosageInstruction": [
//           {
//             "timingSchedule": {
//               "event": [
//                 {
//                   "start": "2006-01-08"
//                 }
//               ],
//               "repeat": {
//                 "frequency": 2,
//                 "duration": 1,
//                 "units": "d"
//               }
//             },
//             "doseQuantity": {
//               "value": 6,
//               "units": "mL",
//               "system": "http://unitsofmeasure.org",
//               "code": "mL"
//             }
//           }
//         ],
//         "resourceId": {
//           "resource": "MedicationPrescription",
//           "id": "7352"
//         }
//       },
//       {
//         "resourceType": "MedicationPrescription",
//         "text": {
//           "status": "generated",
//           "div": "<div>\n      Amoxicillin 80 MG/ML Oral Suspension (rxnorm: 308189)\n    </div>"
//         },
//         "contained": [
//           {
//             "resourceType": "Medication",
//             "_id": "med",
//             "name": "Amoxicillin 80 MG/ML Oral Suspension",
//             "code": {
//               "coding": [
//                 {
//                   "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                   "code": "308189",
//                   "display": "Amoxicillin 80 MG/ML Oral Suspension"
//                 }
//               ]
//             }
//           }
//         ],
//         "status": "active",
//         "patient": {
//           "reference": "Patient/1134281"
//         },
//         "medication": {
//           "reference": "#med"
//         },
//         "dosageInstruction": [
//           {
//             "timingSchedule": {
//               "event": [
//                 {
//                   "start": "2006-08-31"
//                 }
//               ],
//               "repeat": {
//                 "frequency": 2,
//                 "duration": 1,
//                 "units": "d"
//               }
//             },
//             "doseQuantity": {
//               "value": 7,
//               "units": "mL",
//               "system": "http://unitsofmeasure.org",
//               "code": "mL"
//             }
//           }
//         ],
//         "resourceId": {
//           "resource": "MedicationPrescription",
//           "id": "7353"
//         }
//       },
//       {
//         "resourceType": "MedicationPrescription",
//         "text": {
//           "status": "generated",
//           "div": "<div>\n      Mupirocin 0.02 MG/MG Topical Ointment (rxnorm: 106346)\n    </div>"
//         },
//         "contained": [
//           {
//             "resourceType": "Medication",
//             "_id": "med",
//             "name": "Mupirocin 0.02 MG/MG Topical Ointment",
//             "code": {
//               "coding": [
//                 {
//                   "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                   "code": "106346",
//                   "display": "Mupirocin 0.02 MG/MG Topical Ointment"
//                 }
//               ]
//             }
//           }
//         ],
//         "status": "active",
//         "patient": {
//           "reference": "Patient/1134281"
//         },
//         "medication": {
//           "reference": "#med"
//         },
//         "dosageInstruction": [
//           {
//             "timingSchedule": {
//               "event": [
//                 {
//                   "start": "2009-04-06"
//                 }
//               ]
//             }
//           }
//         ],
//         "resourceId": {
//           "resource": "MedicationPrescription",
//           "id": "7354"
//         }
//       },
//       {
//         "resourceType": "MedicationPrescription",
//         "text": {
//           "status": "generated",
//           "div": "<div>\n      Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension (rxnorm: 617423)\n    </div>"
//         },
//         "contained": [
//           {
//             "resourceType": "Medication",
//             "_id": "med",
//             "name": "Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension",
//             "code": {
//               "coding": [
//                 {
//                   "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                   "code": "617423",
//                   "display": "Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension"
//                 }
//               ]
//             }
//           }
//         ],
//         "status": "active",
//         "patient": {
//           "reference": "Patient/1134281"
//         },
//         "medication": {
//           "reference": "#med"
//         },
//         "dosageInstruction": [
//           {
//             "timingSchedule": {
//               "event": [
//                 {
//                   "start": "2009-06-17"
//                 }
//               ],
//               "repeat": {
//                 "frequency": 2,
//                 "duration": 1,
//                 "units": "d"
//               }
//             },
//             "doseQuantity": {
//               "value": 7,
//               "units": "mL",
//               "system": "http://unitsofmeasure.org",
//               "code": "mL"
//             }
//           }
//         ],
//         "resourceId": {
//           "resource": "MedicationPrescription",
//           "id": "7356"
//         }
//       }
//     ]
//   };  
//   return allInfo;
// };


// export var allinfo = {
//   "patient": {
//     "resourceType": "Patient",
//     "text": {
//       "status": "generated",
//       "div": "<div>\n        \n            <p>Patrick G. Taylor</p>\n      \n          </div>"
//     },
//     "identifier": [
//       {
//         "use": "usual",
//         "label": "SMART Hospiptal MRN",
//         "system": "urn:oid:0.1.2.3.4.5.6.7",
//         "value": "1134281"
//       }
//     ],
//     "name": [
//       {
//         "use": "official",
//         "family": [
//           "Taylor"
//         ],
//         "given": [
//           "Patrick",
//           "G."
//         ]
//       }
//     ],
//     "telecom": [
//       {
//         "system": "phone",
//         "value": "800-539-3986",
//         "use": "home"
//       },
//       {
//         "system": "phone",
//         "use": "mobile"
//       },
//       {
//         "system": "email",
//         "value": "patrick.taylor@example.com"
//       }
//     ],
//     "gender": {
//       "coding": [
//         {
//           "system": "http://hl7.org/fhir/v3/AdministrativeGender",
//           "code": "M",
//           "display": "Male"
//         }
//       ]
//     },
//     "birthDate": "2004-10-15",
//     "address": [
//       {
//         "use": "home",
//         "line": [
//           "24 Pine RdApt 3"
//         ],
//         "city": "Bixby",
//         "state": "OK",
//         "zip": "74008",
//         "country": "USA"
//       }
//     ],
//     "active": true,
//     "resourceId": {
//       "resource": "Patient",
//       "id": "1134281"
//     }
//   },
//   "dispensements": [
//     {
//       "resourceType": "MedicationDispense",
//       "text": {
//         "status": "generated",
//         "div": "<div>\n      Dispensed 22 tablets = 10 day supply of Mupirocin 0.02 MG/MG Topical Ointment\n    </div>"
//       },
//       "contained": [
//         {
//           "resourceType": "Medication",
//           "_id": "med",
//           "name": "Mupirocin 0.02 MG/MG Topical Ointment",
//           "code": {
//             "coding": [
//               {
//                 "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                 "code": "106346",
//                 "display": "Mupirocin 0.02 MG/MG Topical Ointment"
//               }
//             ]
//           }
//         }
//       ],
//       "patient": {
//         "reference": "Patient/1134281"
//       },
//       "authorizingPrescription": [
//         {
//           "reference": "MedicationPrescription/7354"
//         }
//       ],
//       "dispense": [
//         {
//           "status": "completed",
//           "quantity": {
//             "value": 22,
//             "units": "tablets",
//             "system": "http://unitsofmeasure.org",
//             "code": "{tablets}"
//           },
//           "medication": {
//             "reference": "#med"
//           },
//           "whenHandedOver": "2009-04-06"
//         }
//       ],
//       "resourceId": {
//         "resource": "MedicationDispense",
//         "id": "7355"
//       }
//     },
//     {
//       "resourceType": "MedicationDispense",
//       "text": {
//         "status": "generated",
//         "div": "<div>\n      Dispensed 100 tablets = 10 day supply of Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension\n    </div>"
//       },
//       "contained": [
//         {
//           "resourceType": "Medication",
//           "_id": "med",
//           "name": "Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension",
//           "code": {
//             "coding": [
//               {
//                 "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                 "code": "617423",
//                 "display": "Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension"
//               }
//             ]
//           }
//         }
//       ],
//       "patient": {
//         "reference": "Patient/1134281"
//       },
//       "authorizingPrescription": [
//         {
//           "reference": "MedicationPrescription/7356"
//         }
//       ],
//       "dispense": [
//         {
//           "status": "completed",
//           "quantity": {
//             "value": 100,
//             "units": "tablets",
//             "system": "http://unitsofmeasure.org",
//             "code": "{tablets}"
//           },
//           "medication": {
//             "reference": "#med"
//           },
//           "whenHandedOver": "2009-06-17"
//         }
//       ],
//       "resourceId": {
//         "resource": "MedicationDispense",
//         "id": "7357"
//       }
//     }
//   ],
//   "conditions": [
//     {
//       "resourceType": "Condition",
//       "text": {
//         "status": "generated",
//         "div": "<div>Neonatal jaundice associated with preterm delivery</div>"
//       },
//       "subject": {
//         "reference": "Patient/1134281"
//       },
//       "code": {
//         "coding": [
//           {
//             "system": "http://snomed.info/id",
//             "code": "73749009",
//             "display": "Neonatal jaundice associated with preterm delivery"
//           }
//         ],
//         "text": "Neonatal jaundice associated with preterm delivery"
//       },
//       "status": "confirmed",
//       "onsetDate": "2005-07-04",
//       "resourceId": {
//         "resource": "Condition",
//         "id": "7358"
//       }
//     },
//     {
//       "resourceType": "Condition",
//       "text": {
//         "status": "generated",
//         "div": "<div>Perinatal cyanotic attacks</div>"
//       },
//       "subject": {
//         "reference": "Patient/1134281"
//       },
//       "code": {
//         "coding": [
//           {
//             "system": "http://snomed.info/id",
//             "code": "95617006",
//             "display": "Perinatal cyanotic attacks"
//           }
//         ],
//         "text": "Perinatal cyanotic attacks"
//       },
//       "status": "confirmed",
//       "onsetDate": "2005-07-04",
//       "resourceId": {
//         "resource": "Condition",
//         "id": "7359"
//       }
//     },
//     {
//       "resourceType": "Condition",
//       "text": {
//         "status": "generated",
//         "div": "<div>Respiratory distress syndrome in the newborn</div>"
//       },
//       "subject": {
//         "reference": "Patient/1134281"
//       },
//       "code": {
//         "coding": [
//           {
//             "system": "http://snomed.info/id",
//             "code": "46775006",
//             "display": "Respiratory distress syndrome in the newborn"
//           }
//         ],
//         "text": "Respiratory distress syndrome in the newborn"
//       },
//       "status": "confirmed",
//       "onsetDate": "2005-07-04",
//       "resourceId": {
//         "resource": "Condition",
//         "id": "7360"
//       }
//     },
//     {
//       "resourceType": "Condition",
//       "text": {
//         "status": "generated",
//         "div": "<div>Scalp injury</div>"
//       },
//       "subject": {
//         "reference": "Patient/1134281"
//       },
//       "code": {
//         "coding": [
//           {
//             "system": "http://snomed.info/id",
//             "code": "206200000",
//             "display": "Scalp injury"
//           }
//         ],
//         "text": "Scalp injury"
//       },
//       "status": "confirmed",
//       "onsetDate": "2005-07-04",
//       "resourceId": {
//         "resource": "Condition",
//         "id": "7361"
//       }
//     },
//     {
//       "resourceType": "Condition",
//       "text": {
//         "status": "generated",
//         "div": "<div>Single liveborn, born in hospital, delivered without mention of cesarean section</div>"
//       },
//       "subject": {
//         "reference": "Patient/1134281"
//       },
//       "code": {
//         "coding": [
//           {
//             "system": "http://snomed.info/id",
//             "code": "442311008",
//             "display": "Single liveborn, born in hospital, delivered without mention of cesarean section"
//           }
//         ],
//         "text": "Single liveborn, born in hospital, delivered without mention of cesarean section"
//       },
//       "status": "confirmed",
//       "onsetDate": "2005-07-04",
//       "resourceId": {
//         "resource": "Condition",
//         "id": "7362"
//       }
//     },
//     {
//       "resourceType": "Condition",
//       "text": {
//         "status": "generated",
//         "div": "<div>Neonatal jaundice</div>"
//       },
//       "subject": {
//         "reference": "Patient/1134281"
//       },
//       "code": {
//         "coding": [
//           {
//             "system": "http://snomed.info/id",
//             "code": "387712008",
//             "display": "Neonatal jaundice"
//           }
//         ],
//         "text": "Neonatal jaundice"
//       },
//       "status": "confirmed",
//       "onsetDate": "2005-07-08",
//       "resourceId": {
//         "resource": "Condition",
//         "id": "7363"
//       }
//     },
//     {
//       "resourceType": "Condition",
//       "text": {
//         "status": "generated",
//         "div": "<div>Jaundice</div>"
//       },
//       "subject": {
//         "reference": "Patient/1134281"
//       },
//       "code": {
//         "coding": [
//           {
//             "system": "http://snomed.info/id",
//             "code": "18165001",
//             "display": "Jaundice"
//           }
//         ],
//         "text": "Jaundice"
//       },
//       "status": "confirmed",
//       "onsetDate": "2005-07-10",
//       "resourceId": {
//         "resource": "Condition",
//         "id": "7364"
//       }
//     },
//     {
//       "resourceType": "Condition",
//       "text": {
//         "status": "generated",
//         "div": "<div>Acute upper respiratory infection</div>"
//       },
//       "subject": {
//         "reference": "Patient/1134281"
//       },
//       "code": {
//         "coding": [
//           {
//             "system": "http://snomed.info/id",
//             "code": "54150009",
//             "display": "Acute upper respiratory infection"
//           }
//         ],
//         "text": "Acute upper respiratory infection"
//       },
//       "status": "confirmed",
//       "onsetDate": "2005-11-28",
//       "resourceId": {
//         "resource": "Condition",
//         "id": "7365"
//       }
//     },
//     {
//       "resourceType": "Condition",
//       "text": {
//         "status": "generated",
//         "div": "<div>Gastroesophageal reflux disease</div>"
//       },
//       "subject": {
//         "reference": "Patient/1134281"
//       },
//       "code": {
//         "coding": [
//           {
//             "system": "http://snomed.info/id",
//             "code": "235595009",
//             "display": "Gastroesophageal reflux disease"
//           }
//         ],
//         "text": "Gastroesophageal reflux disease"
//       },
//       "status": "confirmed",
//       "onsetDate": "2006-02-09",
//       "resourceId": {
//         "resource": "Condition",
//         "id": "7366"
//       }
//     },
//     {
//       "resourceType": "Condition",
//       "text": {
//         "status": "generated",
//         "div": "<div>Otitis media</div>"
//       },
//       "subject": {
//         "reference": "Patient/1134281"
//       },
//       "code": {
//         "coding": [
//           {
//             "system": "http://snomed.info/id",
//             "code": "65363002",
//             "display": "Otitis media"
//           }
//         ],
//         "text": "Otitis media"
//       },
//       "status": "confirmed",
//       "onsetDate": "2006-08-31",
//       "resourceId": {
//         "resource": "Condition",
//         "id": "7367"
//       }
//     },
//     {
//       "resourceType": "Condition",
//       "text": {
//         "status": "generated",
//         "div": "<div>Other and unspecified noninfectious gastroenteritis and colitis</div>"
//       },
//       "subject": {
//         "reference": "Patient/1134281"
//       },
//       "code": {
//         "coding": [
//           {
//             "system": "http://snomed.info/id",
//             "code": "25374005",
//             "display": "Other and unspecified noninfectious gastroenteritis and colitis"
//           }
//         ],
//         "text": "Other and unspecified noninfectious gastroenteritis and colitis"
//       },
//       "status": "confirmed",
//       "onsetDate": "2006-12-14",
//       "resourceId": {
//         "resource": "Condition",
//         "id": "7368"
//       }
//     },
//     {
//       "resourceType": "Condition",
//       "text": {
//         "status": "generated",
//         "div": "<div>Acute sinusitis</div>"
//       },
//       "subject": {
//         "reference": "Patient/1134281"
//       },
//       "code": {
//         "coding": [
//           {
//             "system": "http://snomed.info/id",
//             "code": "36971009",
//             "display": "Acute sinusitis"
//           }
//         ],
//         "text": "Acute sinusitis"
//       },
//       "status": "confirmed",
//       "onsetDate": "2009-06-17",
//       "resourceId": {
//         "resource": "Condition",
//         "id": "7369"
//       }
//     }
//   ],
//   "prescriptions": [
//     {
//       "resourceType": "MedicationPrescription",
//       "text": {
//         "status": "generated",
//         "div": "<div>\n      Amoxicillin 50 MG/ML Oral Suspension (rxnorm: 239191)\n    </div>"
//       },
//       "contained": [
//         {
//           "resourceType": "Medication",
//           "_id": "med",
//           "name": "Amoxicillin 50 MG/ML Oral Suspension",
//           "code": {
//             "coding": [
//               {
//                 "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                 "code": "239191",
//                 "display": "Amoxicillin 50 MG/ML Oral Suspension"
//               }
//             ]
//           }
//         }
//       ],
//       "status": "active",
//       "patient": {
//         "reference": "Patient/1134281"
//       },
//       "medication": {
//         "reference": "#med"
//       },
//       "dosageInstruction": [
//         {
//           "timingSchedule": {
//             "event": [
//               {
//                 "start": "2005-11-28"
//               }
//             ],
//             "repeat": {
//               "frequency": 2,
//               "duration": 1,
//               "units": "d"
//             }
//           },
//           "doseQuantity": {
//             "value": 10,
//             "units": "mL",
//             "system": "http://unitsofmeasure.org",
//             "code": "mL"
//           }
//         }
//       ],
//       "resourceId": {
//         "resource": "MedicationPrescription",
//         "id": "7349"
//       }
//     },
//     {
//       "resourceType": "MedicationPrescription",
//       "text": {
//         "status": "generated",
//         "div": "<div>\n      carbinoxamine 1 MG/ML / Dextromethorphan 4 MG/ML / Pseudoephedrine 15 MG/ML Oral Solution [Carbofed DM Drops] (rxnorm: 352027)\n    </div>"
//       },
//       "contained": [
//         {
//           "resourceType": "Medication",
//           "_id": "med",
//           "name": "carbinoxamine 1 MG/ML / Dextromethorphan 4 MG/ML / Pseudoephedrine 15 MG/ML Oral Solution [Carbofed DM Drops]",
//           "code": {
//             "coding": [
//               {
//                 "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                 "code": "352027",
//                 "display": "carbinoxamine 1 MG/ML / Dextromethorphan 4 MG/ML / Pseudoephedrine 15 MG/ML Oral Solution [Carbofed DM Drops]"
//               }
//             ]
//           }
//         }
//       ],
//       "status": "active",
//       "patient": {
//         "reference": "Patient/1134281"
//       },
//       "medication": {
//         "reference": "#med"
//       },
//       "dosageInstruction": [
//         {
//           "timingSchedule": {
//             "event": [
//               {
//                 "start": "2005-11-28"
//               }
//             ]
//           }
//         }
//       ],
//       "resourceId": {
//         "resource": "MedicationPrescription",
//         "id": "7350"
//       }
//     },
//     {
//       "resourceType": "MedicationPrescription",
//       "text": {
//         "status": "generated",
//         "div": "<div>\n      Metoclopramide 1 MG/ML Oral Solution (rxnorm: 104884)\n    </div>"
//       },
//       "contained": [
//         {
//           "resourceType": "Medication",
//           "_id": "med",
//           "name": "Metoclopramide 1 MG/ML Oral Solution",
//           "code": {
//             "coding": [
//               {
//                 "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                 "code": "104884",
//                 "display": "Metoclopramide 1 MG/ML Oral Solution"
//               }
//             ]
//           }
//         }
//       ],
//       "status": "active",
//       "patient": {
//         "reference": "Patient/1134281"
//       },
//       "medication": {
//         "reference": "#med"
//       },
//       "dosageInstruction": [
//         {
//           "timingSchedule": {
//             "event": [
//               {
//                 "start": "2006-01-08"
//               }
//             ],
//             "repeat": {
//               "frequency": 4,
//               "duration": 1,
//               "units": "d"
//             }
//           },
//           "doseQuantity": {
//             "value": 4,
//             "units": "mL",
//             "system": "http://unitsofmeasure.org",
//             "code": "mL"
//           }
//         }
//       ],
//       "resourceId": {
//         "resource": "MedicationPrescription",
//         "id": "7351"
//       }
//     },
//     {
//       "resourceType": "MedicationPrescription",
//       "text": {
//         "status": "generated",
//         "div": "<div>\n      Ranitidine 15 MG/ML Oral Solution [Zantac] (rxnorm: 755272)\n    </div>"
//       },
//       "contained": [
//         {
//           "resourceType": "Medication",
//           "_id": "med",
//           "name": "Ranitidine 15 MG/ML Oral Solution [Zantac]",
//           "code": {
//             "coding": [
//               {
//                 "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                 "code": "755272",
//                 "display": "Ranitidine 15 MG/ML Oral Solution [Zantac]"
//               }
//             ]
//           }
//         }
//       ],
//       "status": "active",
//       "patient": {
//         "reference": "Patient/1134281"
//       },
//       "medication": {
//         "reference": "#med"
//       },
//       "dosageInstruction": [
//         {
//           "timingSchedule": {
//             "event": [
//               {
//                 "start": "2006-01-08"
//               }
//             ],
//             "repeat": {
//               "frequency": 2,
//               "duration": 1,
//               "units": "d"
//             }
//           },
//           "doseQuantity": {
//             "value": 6,
//             "units": "mL",
//             "system": "http://unitsofmeasure.org",
//             "code": "mL"
//           }
//         }
//       ],
//       "resourceId": {
//         "resource": "MedicationPrescription",
//         "id": "7352"
//       }
//     },
//     {
//       "resourceType": "MedicationPrescription",
//       "text": {
//         "status": "generated",
//         "div": "<div>\n      Amoxicillin 80 MG/ML Oral Suspension (rxnorm: 308189)\n    </div>"
//       },
//       "contained": [
//         {
//           "resourceType": "Medication",
//           "_id": "med",
//           "name": "Amoxicillin 80 MG/ML Oral Suspension",
//           "code": {
//             "coding": [
//               {
//                 "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                 "code": "308189",
//                 "display": "Amoxicillin 80 MG/ML Oral Suspension"
//               }
//             ]
//           }
//         }
//       ],
//       "status": "active",
//       "patient": {
//         "reference": "Patient/1134281"
//       },
//       "medication": {
//         "reference": "#med"
//       },
//       "dosageInstruction": [
//         {
//           "timingSchedule": {
//             "event": [
//               {
//                 "start": "2006-08-31"
//               }
//             ],
//             "repeat": {
//               "frequency": 2,
//               "duration": 1,
//               "units": "d"
//             }
//           },
//           "doseQuantity": {
//             "value": 7,
//             "units": "mL",
//             "system": "http://unitsofmeasure.org",
//             "code": "mL"
//           }
//         }
//       ],
//       "resourceId": {
//         "resource": "MedicationPrescription",
//         "id": "7353"
//       }
//     },
//     {
//       "resourceType": "MedicationPrescription",
//       "text": {
//         "status": "generated",
//         "div": "<div>\n      Mupirocin 0.02 MG/MG Topical Ointment (rxnorm: 106346)\n    </div>"
//       },
//       "contained": [
//         {
//           "resourceType": "Medication",
//           "_id": "med",
//           "name": "Mupirocin 0.02 MG/MG Topical Ointment",
//           "code": {
//             "coding": [
//               {
//                 "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                 "code": "106346",
//                 "display": "Mupirocin 0.02 MG/MG Topical Ointment"
//               }
//             ]
//           }
//         }
//       ],
//       "status": "active",
//       "patient": {
//         "reference": "Patient/1134281"
//       },
//       "medication": {
//         "reference": "#med"
//       },
//       "dosageInstruction": [
//         {
//           "timingSchedule": {
//             "event": [
//               {
//                 "start": "2009-04-06"
//               }
//             ]
//           }
//         }
//       ],
//       "resourceId": {
//         "resource": "MedicationPrescription",
//         "id": "7354"
//       }
//     },
//     {
//       "resourceType": "MedicationPrescription",
//       "text": {
//         "status": "generated",
//         "div": "<div>\n      Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension (rxnorm: 617423)\n    </div>"
//       },
//       "contained": [
//         {
//           "resourceType": "Medication",
//           "_id": "med",
//           "name": "Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension",
//           "code": {
//             "coding": [
//               {
//                 "system": "http://rxnav.nlm.nih.gov/REST/rxcui",
//                 "code": "617423",
//                 "display": "Amoxicillin 40 MG/ML / Clavulanate 5.7 MG/ML Oral Suspension"
//               }
//             ]
//           }
//         }
//       ],
//       "status": "active",
//       "patient": {
//         "reference": "Patient/1134281"
//       },
//       "medication": {
//         "reference": "#med"
//       },
//       "dosageInstruction": [
//         {
//           "timingSchedule": {
//             "event": [
//               {
//                 "start": "2009-06-17"
//               }
//             ],
//             "repeat": {
//               "frequency": 2,
//               "duration": 1,
//               "units": "d"
//             }
//           },
//           "doseQuantity": {
//             "value": 7,
//             "units": "mL",
//             "system": "http://unitsofmeasure.org",
//             "code": "mL"
//           }
//         }
//       ],
//       "resourceId": {
//         "resource": "MedicationPrescription",
//         "id": "7356"
//       }
//     }
//   ]
// };  