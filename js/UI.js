//for dashboard
//initialize
/** */
if (storage_position=="officer"){
    document.getElementById("testdisplay").style.display = "block";
    document.getElementById("graph").style.display="block";
    document.getElementById("posIN").innerHTML = "officer";
}
else if (storage_position=="manager"){
    document.getElementById("centredisplay").style.display = "block";
    document.getElementById("officerdisplay").style.display = "block";
    document.getElementById("testkitdisplay").style.display = "block";
    document.getElementById("posIN").innerHTML = "manager";
}
else if (storage_position=="tester"){
    document.getElementById("testdisplay").style.display = "block";
    document.getElementById("posIN").innerHTML = "tester";
}
else if (storage_position=="master"){
    document.getElementById("testdisplay").style.display = "block";
    document.getElementById("centredisplay").style.display = "block";
    document.getElementById("officerdisplay").style.display = "block";
    document.getElementById("testkitdisplay").style.display = "block";
    document.getElementById("graph").style.display="block";
    document.getElementById("posIN").innerHTML = "master";
}

ShowCentre();
ShowOfficer();
ShowTestkit();
ShowTest();

//show popups
function ShowAddCentre() {
    document.getElementById('shade').style.display = "block";
    document.getElementById('popup').style.display = "block";
    document.getElementById('addcentre').style.display = "block";
}

function ShowAddofficer() {
    document.getElementById('shade').style.display = "block";
    document.getElementById('popup').style.display = "block";
    document.getElementById('addofficer').style.display = "block";
}

function ShowAddtestkit() {
    document.getElementById('shade').style.display = "block";
    document.getElementById('popup').style.display = "block";
    document.getElementById('addtestkit').style.display = "block";
    document.getElementById('kitid').style.display="none";
}

function Showupdatekit() {
    document.getElementById('shade').style.display = "block";
    document.getElementById('popup').style.display = "block";
    document.getElementById('addtestkit').style.display = "block";
}

function ShowNewtest() {
    document.getElementById('shade').style.display = "block";
    document.getElementById('popup').style.display = "block";
    document.getElementById('recordtest').style.display = "block";
}

function ShowUpdatetest() {
    document.getElementById('shade').style.display = "block";
    document.getElementById('popup').style.display = "block";
    document.getElementById('updatetest').style.display = "block";
}

//cancel button
function cancelcentre() {
    document.getElementById('centreName').value = "";
    document.getElementById('shade').style.display = "none";
    document.getElementById('popup').style.display = "none";
    document.getElementById('centreName').value ="";
}

function cancelofficer() {
    document.getElementById('shade').style.display = "none";
    document.getElementById('popup').style.display = "none";
    document.getElementById('addofficer').style.display = "none";
    document.getElementById('testeruser').value ="";
    document.getElementById('testerpass').value ="";
    document.getElementById('testername').value ="";
}

function canceltestkit() {
    document.getElementById('shade').style.display = "none";
    document.getElementById('popup').style.display = "none";
    document.getElementById('addtestkit').style.display = "none";
    document.getElementById('kitid').style.display="noneblock";
    document.getElementById('kitid').value ="";
    document.getElementById('kitname').value ="";
    document.getElementById('kitstock').value ="";
}

function cancelupdatekit() {
    document.getElementById('shade').style.display = "none";
    document.getElementById('popup').style.display = "none";
    document.getElementById('addtestkit').style.display = "none";
    document.getElementById('kitid').value ="";
    document.getElementById('kitname').value ="";
    document.getElementById('kitstock').value ="";
 
}

function cancelNewtest() {
    document.getElementById('shade').style.display = "none";
    document.getElementById('popup').style.display = "none";
    document.getElementById('recordtest').style.display = "none";
    document.getElementById('patientuser').value ="";
    document.getElementById('patientpass').value ="";
    document.getElementById('patientname').value ="";
    document.getElementById('patientsym').value ="";
    document.getElementById('testkituse').value ="";
}

function cancelUpdatetest() {
    document.getElementById('shade').style.display = "block";
    document.getElementById('popup').style.display = "block";
    document.getElementById('updatetest').style.display = "block";
    document.getElementById('testid').value ="";
    document.getElementById('testresult').value ="";
}

