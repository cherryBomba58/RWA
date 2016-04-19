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


app.post('/api/subjects', function(req, res) {
	console.log("Itt vagyok: server.js/app.post");
	console.log(req.body);
    con.query('INSERT INTO subjects SET ?', req.body, function(err,result){
    	if(err) {
    		console.log("Error itt: server.js/app.post " + err);
    		res.send(err);
    	} else {
    		console.log(result);
    	}
    });
    
    con.query('SELECT * FROM subjects', function(err,rows){
		if(err) {
			console.log("Error itt: server.js/app.get " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		res.json(rows);
    	}
	});
});    

app.put('/api/subjects/:code', function(req, res) {
	console.log("Itt vagyok: server.js/app.put");
	console.log(req.body);
	console.log(req.params.code);
	con.query('UPDATE subjects SET code = ?, name = ?, credit = ?, teacher = ? ' + 
	'WHERE code = ?',
	[req.body.code, req.body.name, req.body.credit, req.body.teacher, req.params.code],
	function(err,result){
		if(err) {
			console.log("Error itt: server.js/app.put " + err);
    		res.send(err);
    	} else {
    		console.log(result);
    	}
	});
	
	con.query('SELECT * FROM subjects', function(err,rows){
		if(err) {
			console.log("Error itt: server.js/app.get " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		res.json(rows);
    	}
	});
});
	
app.delete('/api/subjects/:code', function(req, res) {
    console.log("Itt vagyok: server.js/app.delete");
    console.log(req.params.code);
	con.query('DELETE FROM subjects WHERE code = ?', [req.params.code],
	function(err,result) {
		if(err) {
			console.log("Error itt: server.js/app.delete " + err);
    		res.send(err);
    	} else {
    		console.log(result);
    	}
	});
	
	con.query('SELECT * FROM subjects', function(err,rows){
		if(err) {
			console.log("Error itt: server.js/app.get " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		res.json(rows);
    	}
	});
});
	
app.get('/api/subjects', function(req, res) {
	console.log("Itt vagyok: server.js/app.get");
	con.query('SELECT * FROM subjects', function(err,rows){
		if(err) {
			console.log("Error itt: server.js/app.get " + err);
    		res.send(err);
    	} else {
    		console.log(rows);
    		res.json(rows);
    	}
	});
});

app.get('/api/subjects/:code', function(req, res) {
	console.log("Itt vagyok: server.js/app.get/:code");
	con.query('SELECT * FROM subjects WHERE code = ?', [req.params.code],
	function(err,row){
		if(err) {
			console.log("Error itt: server.js/app.get/:code " + err);
    		res.send(err);
    	} else {
    		console.log(row);
    		res.json(row);
    	}
	});
});


app.listen(3000,function(){
	console.log("It works at 3000 port");
});
	
//con.end(function(err) {});