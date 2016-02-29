function addRow() {
	
	var table = document.getElementById("tab");
	
	var row = table.insertRow(-1);	// inserts row at the last position
	
	var cell0 = row.insertCell(0);
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);
	
	cell0.innerHTML = document.getElementById("code").value;
	cell1.innerHTML = document.getElementById("name").value;
	cell2.innerHTML = document.getElementById("credit").value;
	cell3.innerHTML = document.getElementById("teacher").value;
	
}