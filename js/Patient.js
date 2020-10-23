//for patient
var storage = window.sessionStorage;
var storage_username = storage.getItem("name");
storage_username = "wong";

var d = new Date().getDate();
var patient = [
    {"username":"wong","name":"Wong Jun Hao","symptoms":"hungry","testdate":Date(),"resultdate":Date(),"testID":"001","type":"returnee","result":"Positive","tester":"Dr. Ali"},
    {"username":"wong","name":"Wong Jun Hao","symptoms":"happy","testdate":Date(),"resultdate":Date(),"testID":"003","type":"infected","result":"Positive","tester":"Dr. Ali"},
    {"username":"beh","name":"Derra","symptoms":"hardwork","testdate":Date(),"resultdate":Date(),"testID":"002","type":"suspected","result":"Negative","tester":"Dr. Abu"}
]

for (i=0;i<patient.length;i++)
{
    if(patient[i].username == storage_username){ 
        var div = "<div class=\"patient_history\"><p>Test ID : "
        +patient[i].testID+"</p>"
        +"<table class=\"patient_table\"><tr><tbody><tr>"
        +"<td class=\"sidetd\">Type:</td>"
        +"<td class=\"datatd\">"+patient[i].type+"</td>"
        +"</tr>"
        +"<tr>"
        +"<td class=\"sidetd\">Symptoms:</td>"
        +"<td class=\"datatd\">"+patient[i].symptoms+"</td>"
        +"</tr>"
        +"<tr>"
        +"<td class=\"sidetd\">tested Date:</td>"
        +"<td class=\"datatd\">"+patient[i].testdate+"</td>"
        +"</tr>"
        +"<tr>"
        +"<td class=\"sidetd\">Result Date:</td>"
        +"<td class=\"datatd\">"+patient[i].resultdate+"</td>"
        +"</tr>"
        +"</tbody>"
        +"</tr>"
        +"</table>"
        +"<p>Tested by:"+patient[i].tester+"</p>"
        +"<div>"
        +"<h3>"+patient[i].result+"<h3>"
        +"</div>"
        +"</div><div class=\"endbar\"><br></div>";
        document.getElementById("patient_view").innerHTML += div;
        document.getElementById("patient_name_title").innerHTML = patient[i].name;
        document.getElementById("patient_username_title").innerHTML = patient[i].username;

    }
}