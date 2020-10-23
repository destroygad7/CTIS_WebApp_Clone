//for home and patient
var storage = window.sessionStorage;

var account = [{"username":"admin","pass":123,"position":"officer"},
{"username":"manager","pass":"abc","position":"manager"}, 
{"username":"tester","pass":12345,"position":"tester"}, 
{"username":"wong","pass":111,"position":"patient"}, 
{"username":"beh","pass":111,"position":"patient"},
{"username":"master","pass":123,"position":"master"}]

function signin() {
    var id = document.getElementById("loginname").value;
    var pasw = document.getElementById("loginpass").value;
    for (i=0;i<account.length;i++)
    {
        if (id == account[i].username ){
            if (pasw == account[i].pass ){
                if (account[i].position == "patient"){
                    document.getElementById("login_form").action = "Patient.html";
                    storage.setItem("name",account[i].username);
                    return true;
                }
                else {
                    var position = account[i].position;
                    storage.setItem("position",position);
                    document.getElementById("login_form").action = "Dashboard.html";
                    return true;
                }
            }
            else{
                alert("Wrong password! Please try again");
                return false;
            }
        }

    }
    alert("User doesn't exist! Please try again");
    return false;
}
