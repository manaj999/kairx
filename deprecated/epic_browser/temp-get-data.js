console.log('hello');

var element = document.getElementById("patient_name");
//element.innerHTML = "dogs";

$.get("https://rxnav.nlm.nih.gov/REST/rxclass/class/byDrugName.json?drugName=simvastatin", function(data) {
    if (data.rxclassDrugInfoList != null) {
        var diseases = [];
        var classes = data.rxclassDrugInfoList.rxclassDrugInfo;
        for (var j = 0; j < classes.length; j++) {
            var disease = classes[j];
            if(disease.relaSource == "NDFRT"){
                if(disease.rela == "may_treat"){
                    element.innerHTML = disease.rxclassMinConceptItem.className;
                }
            }
        }
	}  
   
// need to figure out a smart way to parse out drug name
// then query rxnav for disease

});



