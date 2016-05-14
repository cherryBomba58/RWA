var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var md5 = require("md5");
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


app.get('/api/offers', function(req, res) {
	// offers oldalon lévő táblázat tartalma
	con.query('SELECT offerid, lender, borrower, writer, title, year, publisher, p_year, ISBN FROM offers, books WHERE bookid=ISBN', 
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get/api/offers " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		res.json(rows);
    	}
	});
});

app.get('/api/offers/:offerid', function(req, res) {
	// offers oldalon lévő táblázat tartalma
	con.query('SELECT lender, borrower, writer, title, year, publisher, p_year, ISBN FROM offers, books WHERE bookid=ISBN AND offerid=?', [req.params.offerid],
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get/api/offers/:offerid " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		res.json(rows);
    	}
	});
});
	
app.get('/api/mydata/:username', function(req, res) {
	// mydata oldalon található személyes adatok tartalma
	con.query("SELECT username, email, place, point FROM users WHERE username=?", [req.params.username],
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get/api/mydata/:username " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		res.json(rows);
    	}
	});
});

app.get('/api/borrowings/:username', function(req, res) {
	// mydata oldalon található kölcsönzések táblázat adatai
	con.query("SELECT lender, writer, title, year, publisher, p_year, ISBN FROM offers, books WHERE borrower=? and bookid=ISBN", [req.params.username],
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get/api/borrowings/:username " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		res.json(rows);
    	}
	});
});

app.get('/api/lendings/:username', function(req, res) {
	// mydata oldalon található kölcsönadások táblázat adatai
	con.query("SELECT borrower, writer, title, year, publisher, p_year, ISBN FROM offers, books WHERE lender=? and bookid=ISBN", [req.params.username],
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get/api/lendings/:username " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		res.json(rows);
    	}
	});
});
	
app.put('/api/offers/:offerid', function(req, res) {
	// amikor az offers oldalon kölcsönzök valamit, akkor ez zajlik le
	console.log(req.body);
	con.query('UPDATE offers SET borrower=? WHERE offerid=?', [req.body.borrower, req.params.offerid],
	function(err,result){
		if(err) {
			console.log("Error: server.js/app.put/api/offers/:offerid " + err);
    		res.send(err);
    	}
    });
    
    // ellenőrzés
	con.query('SELECT offerid, lender, borrower, writer, title, year, publisher, p_year, ISBN FROM offers, books WHERE bookid=ISBN', 
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get/api/offers/:offerid/1. ell. " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		res.json(rows);
    	}
	});
	
	con.query("SELECT lender, writer, title, year, publisher, p_year, ISBN FROM offers, books WHERE borrower=? and bookid=ISBN", [req.body.borrower],
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get/api/offers/:offerid/2. ell. " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		//res.json(rows);
    	}
	});
});

app.post('/api/books', function(req, res) {
	// amikor a mydata oldalon új kölcsönadási ajánlatot veszek fel, akkor ez zajlik le: könyvhozzáadás
	con.query("INSERT INTO books SET ?", req.body,
	function(err,result){
    	if(err) {
    		console.log("Error: server.js/app.post/api/books: " + err);
    		res.send(err);
    	}
    });
    
    // ellenőrzés
    con.query('SELECT * FROM books', 
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get/api/books " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		res.json(rows);
    	}
	});
});

app.post('/api/offers', function(req, res) {
    // amikor a mydata oldalon új kölcsönadási ajánlatot veszek fel, akkor ez zajlik le: ajánlat hozzáadás
	con.query("INSERT INTO offers(lender, borrower, bookid) VALUES(?,?,?)", [req.body.lender, req.body.borrower, req.body.bookid],
	function(err,result){
    	if(err) {
    		console.log("Error: server.js/app.post/api/offers: " + err);
    		res.send(err);
    	}
    });
    
    // ellenőrzés
    con.query('SELECT lender, borrower, writer, title, year, publisher, p_year, ISBN FROM offers, books WHERE bookid=ISBN', 
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get/api/offers " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		//res.json(rows);
    	}
	});
	
	con.query("SELECT borrower, writer, title, year, publisher, p_year, ISBN FROM offers, books WHERE lender=? and bookid=ISBN", [req.body.lender],
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get/api/offers " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		res.json(rows);
    	}
	});
});

app.post('/api/users', function(req, res) {
	// regisztráció logikája: angular nem fogja engedni, hogy két különböző jelszóval vagy rossz értékekkel regeljen valaki
	con.query("INSERT INTO users VALUES(?,?,?,?,?,?)", [req.body.username, req.body.email,
	req.body.place, md5(req.body.password), req.body.guid, 0],
	function(err,result){
    	if(err) {
    		console.log("Error: server.js/app.post/api/users: " + err);
    		res.send(err);
    	}
    });
    
    // ellenőrzés
    con.query('SELECT * FROM users',
    function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get/api/users " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		res.json(rows);
    	}
	});
});

app.get('/api/users/:username', function(req, res) {
	// bejelentkezéskor a jelszó ellenőrzése
	con.query("SELECT password FROM users WHERE username=?", [req.params.username],
	function(err,rows){
		if(err) {
			console.log("Error: server.js/app.get/api/users/:username " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		res.json(rows);
    	}
	});
});


app.listen(3000,function(){
	console.log("It works at 3000 port");
});
	
//con.end(function(err) {});