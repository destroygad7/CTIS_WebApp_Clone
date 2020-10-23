# CTIS_WebApp
(coppied from https://github.com/derrabeh/CTIS_WebApp/edit/main/README.md)
Web app for CTIS

Theme colour: #5bc0de ("Info" on Bootstrap)

View wireframes here: https://balsamiq.cloud/sk0y2rn/p1sxzpr

Project report document: https://helpliveedu-my.sharepoint.com/:w:/g/personal/b1701898_helplive_edu_my/ESzdU1Yr2Q9BlwwqZRa8JSIB7uX5N_AJ5e8d2-bgUj6m9w?e=2ktpqt

account = 
[{"username":"admin","pass":123,"position":"officer"},
{"username":"manager","pass":"abc","position":"manager"}, 
{"username":"tester","pass":12345,"position":"tester"}, 
{"username":"wong","pass":111,"position":"patient"}, 
{"username":"beh","pass":111,"position":"patient"},
{"username":"master","pass":123,"position":"master"}]

## Usecases: 

addOfficer(username, password, name, position)

addTestCentre(name) - id generated 

addTestKit(name, quantity)  - id generated 

updateTestKit(kitID, quantity) 

addNewPatientTest(username, password, name, patientType, symtoms, status) - test id, testdate generated, status = pending
	
addNewTest(username, patientType, symtoms, status) 

updateResult(testID, result, status) - resultDate generated, Status = completed

viewTestHistory() - generateTestReport

updatePatient(username, patientType, symtoms) 


