var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var app = express();

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "svzvti"
});

con.connect(function(err){
	if(err){
		console.log("Error connecting to DB: " + err);
		return;
	}
	console.log("Connection established");
});

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json());


	// offers oldalon lévő táblázat tartalma
	con.query('SELECT lender, borrower, writer, title, year, publisher, p_year, isbn FROM offers, books WHERE bookid=isbn', 
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get " + err);
    		//res.send(err);
    	} else {
    		console.log(rows);
    		//res.json(rows);
    	}
	});
	
	// mydata oldalon található személyes adatok tartalma
	con.query("SELECT username, email, place, point FROM users WHERE username='valaki'",
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get " + err);
    		//res.send(err);
    	} else {
    		console.log(rows);
    		//res.json(rows);
    	}
	});
	
	// mydata oldalon található kölcsönzések táblázat adatai
	con.query("SELECT lender, writer, title, year, publisher, p_year, isbn FROM offers, books WHERE borrower='valaki' and bookid=isbn", 
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get " + err);
    		//res.send(err);
    	} else {
    		console.log(rows);
    		//res.json(rows);
    	}
	});
	
	// mydata oldalon található kölcsönadások táblázat adatai
	con.query("SELECT borrower, writer, title, year, publisher, p_year, isbn FROM offers, books WHERE lender='valaki' and bookid=isbn", 
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get " + err);
    		//res.send(err);
    	} else {
    		console.log(rows);
    		//res.json(rows);
    	}
	});
	
	// amikor az offers oldalon kölcsönzök valamit, akkor ez zajlik le
	con.query("UPDATE offers SET borrower='valaki' WHERE offerid=3",
	function(err,result){
		if(err) {
			console.log("Error: server.js/app.put " + err);
    		res.send(err);
    	}
    });
    
    // ellenőrzés
	con.query('SELECT lender, borrower, writer, title, year, publisher, p_year, isbn FROM offers, books WHERE bookid=isbn', 
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get " + err);
    		//res.send(err);
    	} else {
    		console.log(rows);
    		//res.json(rows);
    	}
	});

	con.query("SELECT lender, writer, title, year, publisher, p_year, isbn FROM offers, books WHERE borrower='valaki' and bookid=isbn", 
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get " + err);
    		//res.send(err);
    	} else {
    		console.log(rows);
    		//res.json(rows);
    	}
	});
	
	// amikor a mydata oldalon új kölcsönadási ajánlatot veszek fel, akkor ez zajlik le
	con.query("INSERT INTO books(writer, title, year, publisher, p_year, isbn) VALUES('Stendhal', 'Vörös és fekete', 1830, 'Európa Könyvkiadó', 2009, '5678')", 
	function(err,result){
    	if(err) {
    		console.log("Error: server.js/app.post: " + err);
    		res.send(err);
    	}
    });

	con.query("INSERT INTO offers(lender, borrower, bookid) VALUES('valaki', null, '5678')",
	function(err,result){
    	if(err) {
    		console.log("Error: server.js/app.post: " + err);
    		res.send(err);
    	}
    });
    
    // ellenőrzés
    con.query('SELECT lender, borrower, writer, title, year, publisher, p_year, isbn FROM offers, books WHERE bookid=isbn', 
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get " + err);
    		//res.send(err);
    	} else {
    		console.log(rows);
    		//res.json(rows);
    	}
	});
	
	con.query("SELECT borrower, writer, title, year, publisher, p_year, isbn FROM offers, books WHERE lender='valaki' and bookid=isbn", 
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get " + err);
    		//res.send(err);
    	} else {
    		console.log(rows);
    		//res.json(rows);
    	}
	});
	
	// regisztráció logikája: angular nem fogja engedni, hogy két különböző jelszóval vagy rossz értékekkel regeljen valaki
	con.query("INSERT INTO users(username, password, email, place, guid, point) VALUES('iszak', 'probakprobaja', 'iszak@iszak.com', 'jozsivalszemben', 'proba4', 0)", 
	function(err,result){
    	if(err) {
    		console.log("Error: server.js/app.post: " + err);
    		//res.send(err);
    	}
    });
    
    // ellenőrzés
    con.query('SELECT * FROM users', function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get " + err);
    		//res.send(err);
    	} else {
    		console.log(rows);
    		//res.json(rows);
    	}
	});
	
	// bejelentkezés ellenőrzése
	con.query("SELECT COUNT(*) FROM users WHERE username='iszak' AND password='probakprobaja'", function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get " + err);
    		//res.send(err);
    	} else {
    		console.log(rows);
    		//res.json(rows);
    	}
	});

	

/*app.post('/api/subjects', function(req, res) {
    con.query('INSERT INTO subjects SET ?', req.body, function(err,result){
    	if(err) {
    		console.log("Error: server.js/app.post: " + err);
    		res.send(err);
    	}
    });
    
    con.query('SELECT * FROM subjects', function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get " + err);
    		res.send(err);
    	} else {
    		res.json(rows);
    	}
	});
});    

app.put('/api/subjects/:code', function(req, res) {
	con.query('UPDATE subjects SET code = ?, name = ?, credit = ?, teacher = ? WHERE code = ?',
	[req.body.code, req.body.name, req.body.credit, req.body.teacher, req.params.code],
	function(err,result){
		if(err) {
			console.log("Error: server.js/app.put " + err);
    		res.send(err);
    	}
    });
	
	con.query('SELECT * FROM subjects', function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get " + err);
    		res.send(err);
    	} else {
    		res.json(rows);
    	}
	});
});
	
app.delete('/api/subjects/:code', function(req, res) {
	con.query('DELETE FROM subjects WHERE code = ?', [req.params.code],
	function(err,result) {
		if(err) {
			console.log("Error: server.js/app.delete " + err);
    		res.send(err);
    	}
    });
	
	con.query('SELECT * FROM subjects', function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get " + err);
    		res.send(err);
    	} else {
    		res.json(rows);
    	}
	});
});
	
app.get('/api/subjects', function(req, res) {
	con.query('SELECT * FROM subjects', function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get " + err);
    		res.send(err);
    	} else {
    		res.json(rows);
    	}
	});
});

app.get('/api/subjects/:code', function(req, res) {
	con.query('SELECT * FROM subjects WHERE code = ?', [req.params.code],
	function(err,row){
		if(err) {
			console.log("Error: server.js/app.get/:code " + err);
    		res.send(err);
    	} else {
    		res.json(row);
    	}
	});
});*/


app.listen(3000,function(){
	console.log("It works at 3000 port");
});
	
con.end(function(err) {});