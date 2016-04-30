var drugs = [];
var spans = [];

var arbitraryPatientNum = 15;
var DAY = 1000 * 60 * 60 * 24;

var hideElement;

// function drawPlot() {

//     drugSubset = drugs;
//     var widthScale = 100;

//     var barHeight = 50;
//     var width = 860;
//     var margin = {
//         top: 10,
//         right: 0,
//         bottom: 40,
//         left: 40
//     };

//     var height = (drugs.length + 1) * (barHeight) + margin.top + margin.bottom;
//     var realHeight = height; //Factoring in drug subsets

//     var fixedSvg = d3.select('body').append("svg")
//         .attr("width", width)
//         .attr('class', 'chart')
//         .attr("height", height)
//         .style({
//             position: "absolute",
//             "margin-left": "20px",
//             "pointer-events" :"none"
//         });

//     var container = d3.select('body').append('div')
//         .attr({
//             id: "container"
//         })
//         .style({
//             height: height,
//             width: "100%",
//             border: "2px solid #000",
//             overflow: "scroll"
//         });

//     var svg = container.append("svg")
//         .attr("width", width*2)
//         .attr('class', 'chart')
//         .attr("height", height);


//     var color = d3.scale.category10();

//     var x = d3.time.scale()
//         .domain([
//             d3.time.day.offset(d3.min(spans, function(d) {
//                 return new Date(d.start).getTime();
//             }), -10),
//             d3.time.day.offset(d3.max(spans, function(d) {
//                 return new Date(d.start).getTime() + d.days * DAY;
//             }), 10)
//         ])
//         .rangeRound([margin.left, width*2 - margin.left - margin.right]);

//     // define the y axis
//     // var xAxis = d3.svg.axis()
//     //     .orient("bottom")
//     //     .scale(xScale);

//     var yearRange = x.domain()[1].getYear() - x.domain()[0].getYear();
//     if (yearRange < 1) {
//       var xAxis = d3.svg.axis()
//           .scale(x)
//           .orient('bottom')
//           .ticks(d3.time.month, 1)
//           .tickFormat(d3.time.format('%m/%y'))
//           .tickSize(1)
//           .tickPadding(10);
//     } else if (yearRange < 3) {
//       var xAxis = d3.svg.axis()
//           .scale(x)
//           .orient('bottom')
//           .ticks(d3.time.month, 3)
//           .tickFormat(d3.time.format('%m/%y'))
//           .tickSize(1)
//           .tickPadding(10);
//     } else {
//       var xAxis = d3.svg.axis()
//           .scale(x)
//           .orient('bottom')
//           .ticks(d3.time.year, 1)
//           .tickFormat(d3.time.format('%m/%y'))
//           .tickSize(1)
//           .tickPadding(10);
//     }

//     svg.append('g')
//         .attr('class', 'x axis')
//         .attr('transform', 'translate(0, ' + (height - margin.top - margin.bottom) + ')')
//         .call(xAxis);

//     var widthScale = (x.range()[1] - x.range()[0]) / (x.domain()[1] - x.domain()[0])


//     svg.selectAll("line.horizontalGrid").data(x.ticks(8)).enter()
//         .append("line")
//         .attr({
//             "class": "horizontalGrid",
//             "x1": function(d) {
//                 return margin.left + (new Date(d) - x.domain()[0]) * widthScale;
//             },
//             "x2": function(d) {
//                 return margin.left + (new Date(d) - x.domain()[0]) * widthScale;
//             },
//             "y1": height - margin.top - margin.bottom,
//             "y2": margin.bottom,
//             "fill": "none",
//             "shape-rendering": "crispEdges",
//             "stroke": "black",
//             "stroke-width": "1px"
//         });

//     var rects = svg.selectAll("rect")
//         .data(spans, function(d) {return d.id});

//     rects.enter().append("rect").transition()
//         .attr("rx", 2)
//         .attr("ry", 2)
//         .attr("x", function(d, i) {
//             var res = margin.left + (new Date(d.start) - x.domain()[0]) * widthScale;
//             return res;
//         })
//         .attr("y", function(d) {
//             return height - margin.top - margin.bottom - (drugSubset.indexOf(d.drug) + 1) * barHeight - ((d.z != null ? d.z : 0) + 1) * 5 + 25;
//         })
//         .attr("width", function(d) {
//             return DAY * d.days * widthScale;
//         })
//         .attr("height", barHeight - 30)
//         .style("fill", function(d) {
//             return color(d.drug)
//         })
//         .style("stroke-width", 2)
//         .style("stroke", "rgb(0,0,0)")
//         // .attr("class", "xaxis").call(xAxis);

//     fixedSvg.append('g')
//         .attr('class', 'y')
//         .selectAll('.drugName')
//         .data(drugSubset, function(d) {return d})
//         .enter()
//         .append('text')
//         .classed('drugName', true)
//         .text(function(d) {
//             console.log(d);
//             return d;
//         })
//         .attr('x', 50)
//         .attr('y', function(d, i) {
//             return height - margin.top - margin.bottom - barHeight * (i + 1) + 10;
//         });

//     hideElement = function() {
//         //var subsetList = Object.keys(drugs);

//         var removeIndex = 6;
//         drugSubset = drugs.slice(0,removeIndex).concat(drugs.slice(removeIndex+1,drugs.length)); //Remove first element

//         //Need to update the list of items to only include the subsetList of drugs

//         var subsetSpans = [];
//         for (var i = 0; i < spans.length; i++) {
//             if (drugSubset.indexOf(spans[i].drug) >= 0) {
//                 subsetSpans.push(spans[i]);
//             } else {
//                 console.log('not including', spans[i]);
//             }
//         }

//         realHeight = (drugSubset.length + 1) * (barHeight) + margin.top + margin.bottom;
//         var newRects = svg.selectAll("rect").data(subsetSpans, function(d) {return d.id});

//         newRects.exit().remove();
//         newRects.transition().attr("y", function(d) {
//             return height - margin.top - margin.bottom - (drugSubset.indexOf(d.drug) + 1) * barHeight - ((d.z != null ? d.z : 0) + 1) * 5 + 25;
//         })
        
//         var newNames = fixedSvg.selectAll(".drugName").data(drugSubset, function(d) {return d})

//         newNames.exit().remove();
//         newNames.transition().attr('y', function(d, i) {
//             return height - margin.top - margin.bottom - barHeight * (i + 1) + 10;
//         });

//         svg.selectAll("line.horizontalGrid").transition().attr({
//             "y2": height - realHeight + margin.top
//         });
//     };
// }


var demo = {
    serviceUrl: "https://open-api.fhir.me",
    patientId: "1137192"
};

// Create a FHIR client (server URL, patient id in `demo`)
var smart = FHIR.client(demo),
    pt = smart.context.patient;
//console.log(pt);


smart.api.Patient.search().then(function(allPatients) {
    var arbitraryPatientId = allPatients[arbitraryPatientNum].resourceId.id;

    smart = FHIR.client({
        serviceUrl: "https://open-api.fhir.me",
        patientId: arbitraryPatientId
    });
    pt = smart.context.patient;

    // Create a patient banner by fetching + rendering demographics
    pt.read()
        .then(function(p) {
            console.log('Raw Sandbox Data:')
            console.log('Patient', p);
            var name = p.name[0];
            //$("#test").text(name.family);
            var formatted = name.given.join(" ") + " " + name.family;
            $("#patient_name").text(formatted);
            console.log(formatted);
            //$("#patient_name").text(formatted);
        });

    //var prescript = null;
    $("#med_list").append("Prescriptions:");
    // Query for active Prescriptions, including med details
    // pt.MedicationPrescription.where
    //     //.status("active")
    //     ._include("MedicationPrescription.medication")
    //     .search()
    //     .then(function(prescriptions) {
    //         //prescript = prescriptions;
    //         console.log('MedicationPrescriptions', prescriptions);
    //         prescriptions.forEach(function(rx) {
    //             var med = smart.cachedLink(rx, rx.medication);
    //             var row = $("<li> " + med.name + "</li>");

    //             $("#med_list").append(row);
    //             //console.log(med);
    //             //$("#test").text(rx.datewritten);

    //             //      $("#disp_list").append("Prescription history:");
    //             //      dispensed = [];
    //             ///MEDICATION DISPENSE

    //         });
    //     });

    // pt.Observation.search().then(function(data) {
    //   console.log('Observation',data);
    // });

    // pt.Order.search().then(function(data) {
    //   console.log('Order',data);
    // });

    // pt.Procedure.search().then(function(data) {
    //   console.log('Procedure',data);
    // });

    // pt.AllergyIntolerance.search().then(function(data) {
    //   console.log('AllergyIntolerance',data);
    // });

    // pt.Condition.search().then(function(data) {
    //   console.log('Condition',data);
    // });

    // pt.MedicationStatement.search().then(function(data) {
    //   console.log('MedicationStatement',data);
    // });

    // pt.Other.search().then(function(data) {
    //   console.log('Other',data);
    // });

    // pt.CarePlan.search().then(function(data) {
    //   console.log('CarePlan',data);
    // });

    // pt.Encounter.search().then(function(data) {
    //   console.log('Encounter',data);
    // });

    // pt.MedicationAdministration.search().then(function(data) {
    //   console.log('MedicationAdministration',data);
    // });

    // pt.Supply.search().then(function(data) {
    //   console.log('Supply',data);
    // });

    // pt.List.search().then(function(data) {
    //   console.log('List',data);
    // });


    // pt.MedicationDispense.where.search().then(
    //     function(disp) {
    //         console.log('MedicationDispense', disp);
    //         for (var i = 0; i < disp.length; i++) {
    //             var med = disp[i];
    //             //      debugger;

    //             var alt_row = $("<ul>" +
    //                 "<li> " + med.contained[0].name + "</li>" +
    //                 "<li> <b>" + med.dispense[0].whenHandedOver + "</b> </li>" +
    //                 "<li> <i>" + med.text.div + "</i> </li></ul><br>");
    //             $("#disp_list").append(alt_row);

    //             if (drugs.indexOf(med.contained[0].name) == -1) {
    //                 drugs.push(med.contained[0].name);
    //             }

    //             spans.push({
    //                 id: i,
    //                 drug: med.contained[0].name,
    //                 start: med.dispense[0].whenHandedOver,
    //                 days: med.text.div.match(/= [^ ]+/)[0].substring(2)
    //             })
    //         }

    //         console.log('Our Interpretation:')
    //         console.log('Drugs', drugs);
    //         console.log('Bars', spans);

    //         drawPlot();
    //     });
});