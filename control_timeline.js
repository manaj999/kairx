prepData();
		
// do all previous smart on fhir, get data js stuff here
function prepData(){
	var drugs = [];
	var spans = [];
	var dataUlt = [];
	var arbitraryPatientNum = 15;

	var demo = {
	    serviceUrl: "https://open-api.fhir.me",
	    patientId: "1137192"
	};

	// Create a FHIR client (server URL, patient id in `demo`)
	var smart = FHIR.client(demo),
	    pt = smart.context.patient;

	// make an array mapping patient names to patient ids
	// load all samples into app
	var patientArr = [];
	smart.api.Patient.search().then(function(allPatients) {
	    // Queried and found there is a total of 50 patients.
	    for (var i = 0; i < allPatients.length; i++) {
	        (function (i) {
	            if (typeof allPatients[i] === "undefined") {
	                console.log("patient " + i + " undefined");
	            } else {
	                // Create a FHIR client
	                smart = FHIR.client({
	                    serviceUrl: "https://open-api.fhir.me",
	                    patientId: allPatients[i].resourceId.id
	                });
	                pt = smart.context.patient;
	                patientData(pt, i); 
	            }
	        } )(i);
	    }
	});

	// pass patient names for dropdown list
	function patientData(pt, num) {
	    // Create the list element:
	    pt.read().then(function(p) {
	        var name = p.name[0];
	        var formatted = name.given.join(" ") + " " + name.family;
	        patientArr[num] = formatted;

	        if(patientArr.length==50){
	            dropPop(patientArr);
	        }
	    });
	};

	// populate dropdown list of patients
	function dropPop(array){
	    var select = document.getElementById("main_content"); 
	    for(var i = 0; i < array.length; i++) {
	        var opt = array[i];
	        var el = document.createElement("LI");
	        el.textContent = opt;
	        el.value = i;
	        el.className="mdl-menu__item";
	        select.appendChild(el);
	        (function(value){
	        el.addEventListener("click", function() {
	           launch(value);
	        }, false);})(i);
	    }
	};

	function launch(arbitraryPatientNum) {
	    // document.getElementById("timelineFrame").innerHTML = "";
	    document.getElementById("cond_content").innerHTML = "";
	    document.getElementById("type_content").innerHTML = "";
	    drugs = [];
	    spans = [];
	    dataUlt = [];


	    smart.api.Patient.search().then(function(allPatients) {
	        var arbitraryPatientId = allPatients[arbitraryPatientNum].resourceId.id;
	        smart = FHIR.client({
	            serviceUrl: "https://open-api.fhir.me",
	            patientId: arbitraryPatientId
	        });
	        pt = smart.context.patient;
	        getPatientData(pt, handlePatientData);
	    });
	}

	function getPatientData(pt, done) {
	    var allInfo = {};
	    var numLeftToCollect = 4;

	    // Create a patient banner by fetching + rendering demographics
	    pt.read().then(function(p) {
	        allInfo.patient = p;
	        numLeftToCollect--;

	        if (numLeftToCollect == 0) {
	            done(allInfo);
	        }
	    });

	    // Query for active Prescriptions, including med details
	    pt.MedicationPrescription.where
	        //.status("active")
	        ._include("MedicationPrescription.medication")
	        .search()
	        .then(function(prescriptions) {
	            allInfo.prescriptions = prescriptions;
	            numLeftToCollect--;

	            if (numLeftToCollect == 0) {
	                done(allInfo);
	            }
	        });

	    pt.Condition.search().then(function(conditions) {
	        allInfo.conditions = conditions;
	        numLeftToCollect--;

	        if (numLeftToCollect == 0) {
	            done(allInfo);
	        }
	    });

	    pt.MedicationDispense.where.search().then(function(disp) {
	        allInfo.dispensements = disp;
	        numLeftToCollect--;

	        if (numLeftToCollect == 0) {
	            done(allInfo);
	        }
	    });
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
	    var allInfoCollected = function() {
	        console.log('Tallying everything up');
	        for (var condition in conditionDescriptions) {
	            var words = conditionDescriptions[condition].split(" ");
	            for (var i = 0; i < words.length; i++) {
	                var okayWord = true;
	                for (var l = 0; l < wordsToAvoidContaining.length; l++) {
	                    if (words[i].toLowerCase().indexOf(wordsToAvoidContaining[l]) >= 0) {
	                        okayWord = false;
	                    }
	                }
	                for (var l = 0; l < wordsToAvoidBeing.length; l++) {
	                    if (words[i].toLowerCase() == wordsToAvoidBeing[l]) {
	                        okayWord = false;
	                    }
	                }
	                if (okayWord) {
	                    for (var disease in drugsForEachDisease) {
	                        var diseaseWords = disease.replace(/[^A-Za-z0-9]/g, ' ').split(" ");
	                        for (var k = 0; k < diseaseWords.length; k++) {
	                            var diseaseWord = diseaseWords[k].toLowerCase();

	                            if (diseaseWord.length > 0 && words[i].length > 0 
	                                && words[i].toLowerCase() == diseaseWord) {
	                                if (drugsForEachCondition[condition] == null)
	                                    drugsForEachCondition[condition] = {};

	                                for (var j = 0; j < drugsForEachDisease[disease].length; j++) {
	                                    var drug = drugsForEachDisease[disease][j];

	                                    if (drugsForEachCondition[condition][drug] == null)
	                                        drugsForEachCondition[condition][drug] = {reasons: []};

	                                    drugsForEachCondition[condition][drug].reasons.push({
	                                        conditionWord: words[i],
	                                        diseaseFromDrug: disease,
	                                        diseaseWord: diseaseWord
	                                    });
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	        }
	        condPop(drugsForEachCondition);
	        typePop(drugClasses);
	    }

	     //get list of med names of dispensements to only look up rx nav for those drugs
	    disp_drugs = [];
	    for(var i = 0; i < allData.dispensements.length; i++){
	    	disp_drugs.push(allData.dispensements[i].contained[0].name);
	    }

	    all_diseases = [];
	    for (var i = 0; i < allData.prescriptions.length; i++) {
	        var rx = allData.prescriptions[i];
	        var med = smart.cachedLink(rx, rx.medication);

	        (function (name) {
			            prescriptionsLeft += name.split(" ").length - 1;
			            name.split(" ").forEach(function(drugName) {
			                $.get("https://rxnav.nlm.nih.gov/REST/rxclass/class/byDrugName.json?drugName=" + drugName, function(data) {
			                    if (data.rxclassDrugInfoList != null) {
			                        var diseases = [];
			                        var drug_types = [];
			                        var classes = data.rxclassDrugInfoList.rxclassDrugInfo;
			                        for (var j = 0; j < classes.length; j++) {
			                            var disease = classes[j];
			                            if(disease.relaSource == "NDFRT"){
			                                if(disease.rela == "may_treat"){
			                                    diseases.push(disease.rxclassMinConceptItem.className);
			                                }
			                            }

			                            if(disease.rela == "has_MoA"){
			                            	if($.inArray(disease.rxclassMinConceptItem.className,drug_types)==-1){
			                            		drug_types.push(disease.rxclassMinConceptItem.className);
			                            	}
			                            }
			                        }
			             
			                        // match condition
			                        
			                        for (var j = 0; j < diseases.length; j++) {
			                            var disease = diseases[j];
			                            var out = disease + " : " + drugName;
			                            all_diseases.push(out);

			                            if (diseasesForEachDrug[name] == null) {
			                                diseasesForEachDrug[name] = [];
			                            }
			                            diseasesForEachDrug[name].push(disease);

			                            if (drugsForEachDisease[disease] == null) {
			                                drugsForEachDisease[disease] = [];
			                            }
			                            drugsForEachDisease[disease].push(name);
			                        }
			                        // don't match condition

			                        // drug type assoc array
			                        for (var j = 0; j < drug_types.length; j++){
			                        	var type = drug_types[j];
			                        	if($.inArray(name, disp_drugs) > -1){
			                        		if(drugClasses[type] == null)
			                        			drugClasses[type] = {};

			                        		if(drugClasses[type][name] == null)
			                        			drugClasses[type][name] = {reasons: []};

			                        		drugClasses[type][name].reasons.push({
			                        			drugAssoc: name
			                        		});
			                        	}
			                        }
			                    }

			                    prescriptionsLeft--;
			                    if (prescriptionsLeft == 0) {
			                        if (conditionsLeft == 0) {
			                            allInfoCollected();
			                        }
			                    }
			                });
			            });

					// }
		        })(med.name);
	    };

	    var onDone = function() {
	        console.log('conditions', conditionDescriptions)
	        console.log('Results for ' + formatted + ': ------  wait for more after this line.');
	        for (var key in filter_out) {
	            var out = key.concat(': ');
	            console.log(out + filter_out[key]);
	        }
	        if (prescriptionsLeft == 0) {
	            allInfoCollected();
	        }
	    }

	// Make a list of diseases per drug, and all diseases and the drugs they reference.
	// A list of descriptions per condition
	// A list of matching diseases per condition and what words match

	    allData.conditions.forEach(function(disease) {
	        var condition = disease.text.div.replace(/<div>/g,'').replace(/<\/div>/g,'');
	        $.ajax({
	             url: 'https://en.wikipedia.org/w/api.php',
	             data: { action: 'query', list: 'search', srsearch: condition, format: 'json' },
	             dataType: 'jsonp',
	             crossDomain: true,
	             async: false,
	             type: 'GET',
	             success: function (x) {
	                if (x.query.search.length > 0) {
	                   var title = x.query.search[0].title;
	                    $.ajax({
	                        url: 'https://en.wikipedia.org/w/api.php?',
	                        data: { action: 'query', format: 'json', prop: 'extracts', exintro: '', explaintext:'', titles:title},
	                        dataType: 'jsonp',
	                        crossDomain: true,
	                        async: false,
	                        type: 'GET',
	                        success: function (x) {
	                            var key = Object.keys(x.query.pages);
	                            var description = x.query.pages[key].extract;
	                            conditionDescriptions[condition] = description.split(". ")[0];
	                            var words = description.replace(/[^A-Za-z0-9]/g, ' ').split(" ");
	                            // clean words
	                            var clean_words = [];
	                            words.forEach(function(word){
	                                if(!(word.toLowerCase() in clean_words)){
	                                    clean_words.push(word.toLowerCase());
	                                }
	                            });

	                            for (var i = 0; i < all_diseases.length; i++) {
	                                var dis = all_diseases[i];
	                                var treat_terms = dis.split(":")[0].split(/[\s,]+/);
	                                var cur_drug = dis.split(":")[1];
	                                treat_terms.forEach(function(term){
	                                    // need a more robust way of filtering out common terms in diseases
	                                    // right now just filtering out "Diseases"
	                                    if(term != "Diseases" && clean_words.indexOf(term.toLowerCase()) != -1){
	                                        filter_out[condition] = cur_drug;
	                                    }
	                                });
	                            }

	                            conditionsLeft--;
	                            if (conditionsLeft == 0) {
	                                onDone();
	                            }
	                        }
	                    });
	                } else {
	                    conditionsLeft--;
	                    if (conditionsLeft == 0) {
	                        onDone();
	                    }
	                }

	         }
	        });
	    });
	    var disp = allData.dispensements

	// TEST here
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
	// TEST END

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

	    function assoc(p,key){
	        if(key=="all"){
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
 	 
     textnode1=document.createTextNode("Start Date");
     textnode2=document.createTextNode("Medication");
     textnode3=document.createTextNode("Order Detail");
     textnode4=document.createTextNode("Provider");
     textnode5=document.createTextNode("End Date");

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

			
	         row=document.createElement("tr");
	         cell1 = document.createElement("td");
	         cell2 = document.createElement("td");
	         cell3 = document.createElement("td");
	         cell4 = document.createElement("td");
	         cell5 = document.createElement("td");
	     	 
	         textnode1=document.createTextNode(data[i].dates[j].startdate.toString().substring(0,16));
	         textnode2=document.createTextNode(data[i].label);
	         textnode3=document.createTextNode("Take 1 50mg pill per day");
	         textnode4=document.createTextNode("Dr. Bora Chang");
	         textnode5=document.createTextNode(data[i].dates[j].enddate.toString().substring(0,16));

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



