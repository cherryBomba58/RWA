function addRow() {
	var trr = document.createElement("tr");
	
	
	var td1 = document.createElement("td");
	var w1 = document.createTextNode(document.getElementById("code").value);
	td1.appendChild(w1);		
		
	var td2 = document.createElement("td");
	var w2 = document.createTextNode(document.getElementById("name").value);
	td2.appendChild(w2);
		
	var td3 = document.createElement("td");
	var w3 = document.createTextNode(document.getElementById("credit").value);
	td3.appendChild(w3);
	
	var td4 = document.createElement("td");
	var w4 = document.createTextNode(document.getElementById("teacher").value);
	td4.appendChild(w4);
	
		
	trr.appendChild(td1);
	trr.appendChild(td2);
	trr.appendChild(td3);
	trr.appendChild(td4);
	
	var tab = document.getElementById("tab");
	tab.appendChild(trr);
	
	var di = document.getElementById("di");
	di.appendChild(tab);
	
	document.appendChild(di);
}