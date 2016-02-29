function addRow() {

	var trr = document.createElement("tr");
	
	
	var td1 = document.createElement("td");
	td1.innerHTML = document.getElementById("code").value;
		
	var td2 = document.createElement("td");
	td2.innerHTML = document.getElementById("name").value;
		
	var td3 = document.createElement("td");
	td3.innerHTML = document.getElementById("credit").value;
	
	var td4 = document.createElement("td");
	td4.innerHTML = document.getElementById("teacher").value;
		
		
	trr.appendChild(td1);
	trr.appendChild(td2);
	trr.appendChild(td3);
	trr.appendChild(td4);
	
	
	var tab = document.getElementById("tab");
	tab.appendChild(trr);
	
}