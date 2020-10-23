//for dashboard testing only

var storage = window.sessionStorage;
var storage_position = storage.getItem("position");

//dummy data
var centre = [{"centreID":"C1","centreName":"aaaa"},{"centreID":"C2","centreName":"bbbbbb"},{"centreID":"C3","centreName":"ccccccc"},{"centreID":"C4","centreName":"ccccccc"}];
var user = [{"username":"admin","password":"123","name":"jame"},
{"username":"manager","password":"abc","name":"bond"},
{"username":"tester","password":"12345","name":"jason"},
{"username":"wong","password":"111","name":"Wong Jun Hao"},
{"username":"beh","password":"111","name":"Derra"},
]
var officer = [{"name":"jame","username":"admin","position":"officer","centreID":"C1"},
{"name":"bond","username":"manager","position":"manager","centreID":"C1"},
{"name":"jason","username":"tester","position":"tester","centreID":"C1"},];
var testkit = [{"kitID":"K1","testName":"paper","stock":10,"centreID":"C1"},
{"kitID":"K2","testName":"water","stock":20,"centreID":"C1"},
{"kitID":"K3","testName":"stick","stock":30,"centreID":"C1"},];
var test = [
    {"username":"wong","name":"Wong Jun Hao","symptoms":"hungry","testdate":Date(),"resultdate":Date(),"testID":"001","type":"returnee","result":"Positive","tester":"Dr. Ali","status":"completed","kitID":"K1","testID":"T1"},
    {"username":"wong","name":"Wong Jun Hao","symptoms":"happy","testdate":Date(),"resultdate":Date(),"testID":"003","type":"infected","result":"Positive","tester":"Dr. Ali","status":"completed","kitID":"K1","testID":"T2"},
    {"username":"beh","name":"Derra","symptoms":"hardwork","testdate":Date(),"resultdate":Date(),"testID":"002","type":"suspected","result":"Negative","tester":"Dr. Abu","status":"completed","kitID":"K1","testID":"T3"}
]


//generate table
function ShowCentre() { 
    var centretbody = document.getElementById('centre_body');
    centretbody.innerHTML = "";
    for (var i=0; i < centre.length; i++){
        var tr = "<tr>";
        tr += "<td>" + centre[i].centreID + "</td>" + "<td>" + centre[i].centreName + "</td></tr>";
        centretbody.innerHTML += tr;
    }   
}

function ShowOfficer() { 
    var officerbody = document.getElementById('officer_body');
    officerbody.innerHTML = "";
    for (var i=0; i < officer.length; i++){
        var tr = "<tr>";
        tr += "<td>" + officer[i].name + "</td>" + "<td>" + officer[i].username +
        "<td>" + officer[i].position + "</td>" +"<td>" + officer[i].centreID + "</td></tr>";
        officerbody.innerHTML += tr;
    }   
}

function ShowTestkit() { 
    var testkitbody = document.getElementById('testkit_body');
    testkitbody.innerHTML = "";
    for (var i=0; i < testkit.length; i++){
        var tr = "<tr>";
        tr += "<td>" + testkit[i].kitID + "</td>" + "<td>" + testkit[i].testName +
        "<td>" + testkit[i].stock + "</td>" +"<td>" + testkit[i].centreID + "</td></tr>";
        testkitbody.innerHTML += tr;
    }   
}

function ShowTest() { 
    var testbody = document.getElementById('newtest_body');
    testbody.innerHTML = "";
    for (var i=0; i < test.length; i++){
        var tr = "<tr>";
        tr += "<td>" + test[i].testID + "</td>" + "<td>" + test[i].testdate +
        "<td>" + test[i].result + "</td>" +"<td>" + test[i].resultdate +
        "<td>" + test[i].status + "</td>" +"<td>" + test[i].username + "</td>" +
        "<td>" + test[i].kitID + "</td>" +"<td>" + test[i].tester + "</td>" +
        "<td>" + test[i].symptoms + "</td></tr>";
        testbody.innerHTML += tr;
    }   
}


//add data for testing only
function addCentre() {
    try{
        var i = "c" + centre.length+1;
        var name = document.getElementById('centreName').value;
        var newcentre = {"centreID":i,"centreName":name};
        centre.push(newcentre);
        alert("Successfully added!");
        document.getElementsByClassName('shade')[0].style.display = "none";
        document.getElementById('addcentre').style.display = "none";
        document.getElementById('popup').style.display = "none";
        document.getElementById('centreName').value = "";
    }
    catch (err) {

    }
    
}

function addTester() {
    try {
        var user = document.getElementById('testeruser').value;
        var pasw = document.getElementById('testerpass').value;
        var tname = document.getElementById('testername').value;
        var newaccount = {"username":user,"password":pasw,"name":tname};
        var newofficer = {"name":tname,"username":user,"position":"tester","centreID":"C1"};
        account.push(newaccount);
        officer.push(newofficer);
        alert("Successfully added!");
        document.getElementsByClassName('shade')[0].style.display = "none";
        document.getElementById('addofficer').style.display = "none";
        document.getElementById('popup').style.display = "none";
        document.getElementById('testeruser').value = "";
        document.getElementById('testerpass').value ="";
        document.getElementById('testername').value ="";
    }
    catch (err) {

    }

}

//filter table
function Centre_Filter() {
    var input = document.getElementById("centre_filter");
    
    var centretbody = document.getElementById('centre_body');
    centretbody.innerHTML = "";
    if (input !=null)
    {
        for (i = 0; i < centre.length; i++){
            var tr = "<tr>";
            if (centre[i].centreName.toUpperCase().includes(input.value.toUpperCase()) || input.value.toString() == centre[i].centreID.toString())
            {
                tr += "<td>" + centre[i].centreID + "</td>" + "<td>" + centre[i].centreName + "</td></tr>";
                centretbody.innerHTML += tr;
            }
        }
    }
    else
        ShowCentre();
}



