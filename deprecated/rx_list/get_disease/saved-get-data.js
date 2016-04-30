var demo = {
    serviceUrl: "https://open-api.fhir.me",
    patientId: "1137192"
};
var smart = FHIR.client(demo);
var arbitraryPatientNum = 22;


// start below
// ideal workflow... get medication info from
all_diseases = [];
smart.api.Patient.search().then(function(allPatients) {
        if(typeof allPatients[arbitraryPatientNum] === "undefined"){
            console.log("patient " + i + " undefined");
        }
        else{
            var arbitraryPatientId = allPatients[arbitraryPatientNum].resourceId.id;


            smart = FHIR.client({
                serviceUrl: "https://open-api.fhir.me",
                patientId: arbitraryPatientId
            });
            pt = smart.context.patient;
           

            // Create a patient banner by fetching + rendering demographics
            pt.read()
                .then(function(p) {
                    var name = p.name[0];
                    //$("#test").text(name.family);
                    var formatted = name.given.join(" ") + " " + name.family;
                    var alt_row = $("<ul>" +
                        "<li> " + formatted+ "</li>" + "</ul><br>");
                    $("#med_list").append(alt_row);
                    console.log(formatted);
                    //$("#patient_name").text(formatted);
                });

           


            $("#med_list").append("Prescriptions:");
            // Query for active Prescriptions, including med details
            pt.MedicationPrescription.where
                //.status("active")
                ._include("MedicationPrescription.medication")
                .search()
                .then(function(prescriptions) {
                    //prescript = prescriptions;
                    //console.log("\nDrug disease:")
                    prescriptions.forEach(function(rx) {
                        var med = smart.cachedLink(rx, rx.medication);
                        var row = $("<li> " + med.name + "</li>");

                        $("#med_list").append(row);

                        med.name.split(" ").forEach(function(drugName) {
                            $.get("https://rxnav.nlm.nih.gov/REST/rxclass/class/byDrugName.json?drugName=".concat(drugName), function(data) {
                                if (data.rxclassDrugInfoList == null) {
                                    return;
                                }
                                else {
                                    var diseases = [];
                                    var classes = data.rxclassDrugInfoList.rxclassDrugInfo;
                                    classes.forEach(function(disease) {
                                        if(disease.relaSource == "NDFRT"){
                                            if(disease.rela == "may_treat"){
                                                diseases.push(disease.rxclassMinConceptItem.className);
                                            }
                                        }

                                    });
                                    // output drugs prescribed to and diseases they treat
                                    //console.log(drugName);
                                    //console.log(diseases);
                         
                                    // match condition
                                    
                                    diseases.forEach(function(disease){
                                        var out = disease + " : " + drugName;
                                        //console.log(out);
                                        all_diseases.push(out);
                                        //console.log(out);
                                    });

                                    



                                    // don't match condition

                                }
                               
                   

                        // need to figure out a smart way to parse out drug name
                        // then query rxnav for disease

                            });
                        });
                    });
                });

            console.log("Patient conditions:");
            var conditions = [];
            var filter_out = {};
            pt.Condition.search().then(function(data) {
                data.forEach(function(disease){
                    //conditions.push(disease.text.div);
                    var extract = disease.text.div.replace(/<div>/g,'').replace(/<\/div>/g,'');
                    //console.log(extract);
                    $.ajax({
                         url: 'http://en.wikipedia.org/w/api.php',
                         data: { action: 'query', list: 'search', srsearch: extract, format: 'json' },
                         dataType: 'jsonp',
                         crossDomain: true,
                         async: false,
                         type: 'GET',
                         success: function (x) {
                           var title = x.query.search[0].title;

                           $.ajax({
                                url: 'https://en.wikipedia.org/w/api.php?',
                                data: { action: 'query', format: 'json',prop: 'extracts', explaintext:'', titles:title},
                                dataType: 'jsonp',
                                crossDomain: true,
                                async: false,
                                type: 'GET',
                                success: function (x) {
                                    var key =Object.keys(x.query.pages);
                                    var description = x.query.pages[key].extract;
                                    var words = description.replace(/[^A-Za-z0-9]/g, ' ').split(" ");
                                    // clean words
                                    var clean_words = [];
                                    words.forEach(function(word){
                                        if(!(word.toLowerCase() in clean_words)){
                                            clean_words.push(word.toLowerCase());
                                        }
                                    });

                                    console.log(clean_words);
                                    //console.log(all_diseases);
                                    all_diseases.forEach(function(dis){
                                        //console.log(dis);
                                        var treat_terms = dis.split(":")[0].split(/[\s,]+/);
                                        //console.log(treat_terms);
                                        var cur_drug = dis.split(":")[1];
                                        //console.log(cur_drug);
                                        //console.log(clean_words);
                                        treat_terms.forEach(function(term){
                                            
                                            
                                            // need a more robust way of filtering out common terms in diseases
                                            // right now just filtering out "Diseases"
                                            if(term != "Diseases" && clean_words.indexOf(term.toLowerCase()) != -1){
                                                console.log(term);
                                                console.log("hi");
                                                console.log(extract);
                                                console.log(cur_drug);
                                                filter_out[extract] = cur_drug;
                                            }
                                        });
                                    });
                                    //console.log();
                                }
                           });

                           // $.get("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Restrictive%20lung%20disease",function(data){
                           //      console.log(data);
                           // });
                           //console.log('title', x.query.search[0].title);
                           //console.log('cond', extract);

                     }
                    });

                    //console.log(extract);
                });
                //console.log('Condition',data);
            });

            for (var key in filter_out) {
                var out = key.concat(": ");

                console.log(out.concat(filter_out[key]));
            }
            
        
        // conditions.forEach(function(cond){
        //     console.log(cond);
        // });
       


    }
});



 



        




// $.get("https://rxnav.nlm.nih.gov/REST/rxclass/class/byDrugName.json?drugName=sildenafil", function(data) {
// if (data == null) {
// return;
// }


// var diseases = [];
// var classes = data.rxclassDrugInfoList.rxclassDrugInfo;
// classes.forEach(function(disease) {
//     if(disease.relaSource == "NDFRT"){
//         if(disease.rela == "may_treat"){
//             diseases.push(disease.rxclassMinConceptItem.className);
//         }
//     }
// });


// console.log('disease', diseases);


// });


