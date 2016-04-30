var drugs = [];
var spans = [];

var arbitraryPatientNum = 15;
var DAY = 1000 * 60 * 60 * 24;

var hideElement;

function drawPlot(drugs,spans) {

    drugSubset = drugs;
    var widthScale = 100;

    var barHeight = 50;
    var width = 860;
    var margin = {
        top: 10,
        right: 0,
        bottom: 40,
        left: 40
    };

    var height = (drugs.length + 1) * (barHeight) + margin.top + margin.bottom;
    var realHeight = height; //Factoring in drug subsets

    var fixedSvg = d3.select('#rx_plot').append("svg")
        .attr("width", width)
        .attr('class', 'chart')
        .attr("height", height)
        .style({
            position: "absolute",
            "margin-left": "20px",
            "pointer-events" :"none"
        });

    var container = d3.select('#rx_plot').append('div')
        .attr({
            id: "container"
        })
        .style({
            height: height,
            width: "100%",
            border: "2px solid #000",
            overflow: "scroll"
        });

    var svg = container.append("svg")
        .attr("width", width*2)
        .attr('class', 'chart')
        .attr("height", height);


    var color = d3.scale.category10();

    var x = d3.time.scale()
        .domain([
            d3.time.day.offset(d3.min(spans, function(d) {
                return new Date(d.start).getTime();
            }), -10),
            d3.time.day.offset(d3.max(spans, function(d) {
                return new Date(d.start).getTime() + d.days * DAY;
            }), 10)
        ])
        .rangeRound([margin.left, width*2 - margin.left - margin.right]);

    // define the y axis
    // var xAxis = d3.svg.axis()
    //     .orient("bottom")
    //     .scale(xScale);

    var yearRange = x.domain()[1].getYear() - x.domain()[0].getYear();
    if (yearRange < 1) {
      var xAxis = d3.svg.axis()
          .scale(x)
          .orient('bottom')
          .ticks(d3.time.month, 1)
          .tickFormat(d3.time.format('%m/%y'))
          .tickSize(1)
          .tickPadding(10);
    } else if (yearRange < 3) {
      var xAxis = d3.svg.axis()
          .scale(x)
          .orient('bottom')
          .ticks(d3.time.month, 3)
          .tickFormat(d3.time.format('%m/%y'))
          .tickSize(1)
          .tickPadding(10);
    } else {
      var xAxis = d3.svg.axis()
          .scale(x)
          .orient('bottom')
          .ticks(d3.time.year, 1)
          .tickFormat(d3.time.format('%m/%y'))
          .tickSize(1)
          .tickPadding(10);
    }

    svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom) + ')')
        .call(xAxis);

    var widthScale = (x.range()[1] - x.range()[0]) / (x.domain()[1] - x.domain()[0])


    svg.selectAll("line.horizontalGrid").data(x.ticks(8)).enter()
        .append("line")
        .attr({
            "class": "horizontalGrid",
            "x1": function(d) {
                return margin.left + (new Date(d) - x.domain()[0]) * widthScale;
            },
            "x2": function(d) {
                return margin.left + (new Date(d) - x.domain()[0]) * widthScale;
            },
            "y1": height - margin.top - margin.bottom,
            "y2": margin.bottom,
            "fill": "none",
            "shape-rendering": "crispEdges",
            "stroke": "black",
            "stroke-width": "1px"
        });

    var rects = svg.selectAll("rect")
        .data(spans, function(d) {return d.id});

    rects.enter().append("rect").transition()
        .attr("rx", 2)
        .attr("ry", 2)
        .attr("x", function(d, i) {
            var res = margin.left + (new Date(d.start) - x.domain()[0]) * widthScale;
            return res;
        })
        .attr("y", function(d) {
            return height - margin.top - margin.bottom - (drugSubset.indexOf(d.drug) + 1) * barHeight - ((d.z != null ? d.z : 0) + 1) * 5 + 25;
        })
        .attr("width", function(d) {
            return DAY * d.days * widthScale;
        })
        .attr("height", barHeight - 30)
        .style("fill", function(d) {
            return color(d.drug)
        })
        .style("stroke-width", 2)
        .style("stroke", "rgb(0,0,0)")
        // .attr("class", "xaxis").call(xAxis);

    fixedSvg.append('g')
        .attr('class', 'y')
        .selectAll('.drugName')
        .data(drugSubset, function(d) {return d})
        .enter()
        .append('text')
        .classed('drugName', true)
        .text(function(d) {
            console.log(d);
            return d;
        })
        .attr('x', 50)
        .attr('y', function(d, i) {
            return height - margin.top - margin.bottom - barHeight * (i + 1) + 10;
        });

    hideElement = function() {
        //var subsetList = Object.keys(drugs);

        var removeIndex = 6;
        drugSubset = drugs.slice(0,removeIndex).concat(drugs.slice(removeIndex+1,drugs.length)); //Remove first element

        //Need to update the list of items to only include the subsetList of drugs

        var subsetSpans = [];
        for (var i = 0; i < spans.length; i++) {
            if (drugSubset.indexOf(spans[i].drug) >= 0) {
                subsetSpans.push(spans[i]);
            } else {
                console.log('not including', spans[i]);
            }
        }

        realHeight = (drugSubset.length + 1) * (barHeight) + margin.top + margin.bottom;
        var newRects = svg.selectAll("rect").data(subsetSpans, function(d) {return d.id});

        newRects.exit().remove();
        newRects.transition().attr("y", function(d) {
            return height - margin.top - margin.bottom - (drugSubset.indexOf(d.drug) + 1) * barHeight - ((d.z != null ? d.z : 0) + 1) * 5 + 25;
        })
        
        var newNames = fixedSvg.selectAll(".drugName").data(drugSubset, function(d) {return d})

        newNames.exit().remove();
        newNames.transition().attr('y', function(d, i) {
            return height - margin.top - margin.bottom - barHeight * (i + 1) + 10;
        });

        svg.selectAll("line.horizontalGrid").transition().attr({
            "y2": height - realHeight + margin.top
        });
    };
}


var demo = {
    serviceUrl: "https://open-api.fhir.me",
    patientId: "1137192"
};

// Create a FHIR client (server URL, patient id in `demo`)
var smart = FHIR.client(demo),
    pt = smart.context.patient;
//console.log(pt);

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
        // $("#main_content").append('<h1> Hello ' + formatted +"\t" + num+ '</h1>');
        patientArr[num] = formatted;

        if(patientArr.length==50){
            dropPop(patientArr);
        }
        //console.log(patientArr);
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
        //el.onClick = "launch(4)";
        select.appendChild(el);
        (function(value){
        el.addEventListener("click", function() {
           launch(value);
        }, false);})(i);
    }
};

function launch(arbitraryPatientNum) {
    document.getElementById("rx_plot").innerHTML = "";
    document.getElementById("cond_list").innerHTML = "";
    drugs = [];
    spans = [];


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
    //$("#test").text(name.family);
    var formatted = name.given.join(" ") + " " + name.family;
    $("#patient_name").text(formatted);
    // $("#main_content").append('<h1> Hello '+formatted+'</h1>');

    // var alt_row = $("<ul>" +
    //     "<li> " + formatted+ "</li>" + "</ul><br>");
    // $("#main_content").append(alt_row);
    // //$("#patient_name").text(formatted);

    // $("#main_content").append("Prescriptions:");

    var prescriptionsLeft = allData.prescriptions.length;
    var conditionsLeft = allData.conditions.length;

    var diseasesForEachDrug = {};
    var drugsForEachDisease = {};
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
        console.log('tallied',drugsForEachCondition);
        condPop(drugsForEachCondition);
        //debugger;
    }

    all_diseases = [];
    for (var i = 0; i < allData.prescriptions.length; i++) {
        var rx = allData.prescriptions[i];
        var med = smart.cachedLink(rx, rx.medication);
        // var row = $("<li> " + med.name + "</li>");

        // $("#main_content").append(row);


        (function (name) {
            prescriptionsLeft += name.split(" ").length - 1;
            name.split(" ").forEach(function(drugName) {
                $.get("https://rxnav.nlm.nih.gov/REST/rxclass/class/byDrugName.json?drugName=" + drugName, function(data) {
                    if (data.rxclassDrugInfoList != null) {
                        var diseases = [];
                        var classes = data.rxclassDrugInfoList.rxclassDrugInfo;
                        for (var j = 0; j < classes.length; j++) {
                            var disease = classes[j];
                            if(disease.relaSource == "NDFRT"){
                                if(disease.rela == "may_treat"){
                                    diseases.push(disease.rxclassMinConceptItem.className);
                                }
                            }
                        }
                        // output drugs prescribed to and diseases they treat
                        //console.log(drugName);
                        //console.log(diseases);
             
                        // match condition
                        
                        for (var j = 0; j < diseases.length; j++) {
                            var disease = diseases[j];
                            var out = disease + " : " + drugName;
                            //console.log(out);
                            all_diseases.push(out);

                            if (diseasesForEachDrug[name] == null) {
                                diseasesForEachDrug[name] = [];
                            }
                            diseasesForEachDrug[name].push(disease);
                            //console.log(out);


                            if (drugsForEachDisease[disease] == null) {
                                drugsForEachDisease[disease] = [];
                            }
                            drugsForEachDisease[disease].push(name);
                        }
                        // don't match condition

                    }

                    prescriptionsLeft--;
//                    console.log(prescriptionsLeft);
                    if (prescriptionsLeft == 0) {
                        console.log('Diseases and the drugs that treat them', drugsForEachDisease);
                        if (conditionsLeft == 0) {
                            allInfoCollected();
                        }
                    }
                   
                // need to figure out a smart way to parse out drug name
                // then query rxnav for disease

                });
            });
        })(med.name);
        //console.log(med);
        //$("#test").text(rx.datewritten);

        //      $("#disp_list").append("Prescription history:");
        //      dispensed = [];
        ///MEDICATION DISPENSE
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
        //conditions.push(disease.text.div);
        var condition = disease.text.div.replace(/<div>/g,'').replace(/<\/div>/g,'');
        //console.log(extract);
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

                            //console.log(clean_words);
                            //console.log(all_diseases);
                            for (var i = 0; i < all_diseases.length; i++) {
                                var dis = all_diseases[i];
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
                                        // console.log(term);
                                        // console.log(extract);
                                        // console.log(cur_drug);
                                        filter_out[condition] = cur_drug;
                                    }
                                });
                            }

                            conditionsLeft--;
                            if (conditionsLeft == 0) {
                                onDone();
                            }
                            //console.log();
                        }
                    });
                } else {
                    conditionsLeft--;
                    if (conditionsLeft == 0) {
                        onDone();
                    }
                }

               // $.get("https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Restrictive%20lung%20disease",function(data){
               //      console.log(data);
               // });
               //console.log('title', x.query.search[0].title);
               //console.log('cond', extract);

         }
        });

        //console.log(extract);
    });

    var disp = allData.dispensements
//    console.log('MedicationDispense', disp);

// TEST here
    for (var i = 0; i < disp.length; i++) {
        var med = disp[i];

        // var alt_row = $("<ul>" +
        //     "<li> " + med.contained[0].name + "</li>" +
        //     "<li> <b>" + med.dispense[0].whenHandedOver + "</b> </li>" +
        //     "<li> <i>" + med.text.div + "</i> </li></ul><br>");
        // $("#main_content").append(alt_row);

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

    // console.log('Our Interpretation:')
    // console.log('Drugs', drugs);
    // console.log('Bars', spans);

    //drawPlot(drugs, spans);
    

    function condPop(p){
        var select = document.getElementById("cond_list"); 
        
        // make title
        var content = document.createTextNode("Conditions");
        select.appendChild(content);

        // make all link
        var all = document.createElement("a");
        all.textContent = "All";
        all.className= "mdl-navigation__link mdl-color-text--blue-grey-400";
        select.appendChild(all);
        (function(p){
        all.addEventListener("click", function() {
           assoc(p,"all");
        }, false);})(p);

        for (var key in p) {
          if (p.hasOwnProperty(key)) {
            var el = document.createElement("a");
            el.textContent = key;
            el.className= "mdl-navigation__link mdl-color-text--blue-grey-400";
            select.appendChild(el);
            //console.log('dogs ',key + " -> " + p[key]);
            //console.log(key);
            (function(p,key){
            el.addEventListener("click", function() {
               assoc(p,key);
            }, false);})(p,key);


            
            
          }
        }
        
    };

    function assoc(p,key){
        // var select2 = document.getElementById("cond-drug");
        // select2.innerHTML = "";

        // var content = document.createTextNode(key);
        // //select2.appendChild(content);
        console.log('test4',key);
        if(key=="all"){
            document.getElementById("rx_plot").innerHTML = "";
            drawPlot(drugs, spans);
        }
        else{
            var drugsNew = [];
            var spansNew = [];

            for(var drug in p[key]) {
                // var link = document.createElement('li');
                // link.textContent = key + "->" + drug;
                //select2.appendChild(link);


                for (var i = 0; i < disp.length; i++) {
                    var med = disp[i];
                    console.log('test1',med.contained[0].name);
                    console.log('test2',drug);
                    if(med.contained[0].name==drug){
                        console.log('worked',drugsNew);
                        if (drugsNew.indexOf(med.contained[0].name) == -1) {
                            drugsNew.push(med.contained[0].name);
                        }
                        console.log('worked2',drugsNew);
                        console.log('sporked',spansNew);
                        spansNew.push({
                            id: i,
                            drug: med.contained[0].name,
                            start: med.dispense[0].whenHandedOver,
                            days: med.text.div.match(/= [^ ]+/)[0].substring(2)
                        })
                        console.log('sporked2',spansNew);
                    }

                }
            }
            console.log('tested',drugsNew);
            console.log('spested',spansNew);
            document.getElementById("rx_plot").innerHTML = "";
            //drawPlot(drugsNew, spansNew);
            setData(drugsNew, spansNew);
        }
  
    };

    function setData(drugs, spans){
        drawPlot(drugs, spans);
    }

}







