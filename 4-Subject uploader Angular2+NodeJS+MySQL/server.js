var express = require("express");
var app = express();
var mysql = require("mysql");
var bodyParser = require("body-parser");

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "svzvti"
});

con.connect(function(err){
	if(err){
		console.log("Error connecting to DB");
		return;
	}
	console.log("Connection established")
});

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json());


app.post('/api/subjects', function(req, res) {
	var newSubject = {code: req.body.code, name: req.body.name,
					  credit: req.body.credit, teacher: req.body.teacher};
    con.query('INSERT INTO subjects SET ?', newSubject, function(err,result){
    	if(err) {
    		res.send(err);
    	} else {
    		res.json(result);
    	}
    });
});    

app.put('/api/subjects/:code', function(req, res) {
	con.query('UPDATE subjects SET code = ?, name = ?, credit = ?, teacher = ? ' +
	'WHERE code = ?', [req.body.code, req.body.name, req.body.credit, req.body.teacher,
	req.body.scode], function(err,result){
		if(err) {
    		res.send(err);
    	} else {
    		res.json(result);
    	}
	});
});
	
app.delete('/api/subjects/:code', function(req, res) {
	con.query('DELETE FROM subjects WHERE code = ?',[req.body.code],
	function(err,result) {
		if(err) {
    		res.send(err);
    	} else {
    		res.json(result);
    	}
	});
});
	
app.get('/api/subjects', function(req, res) {
	con.query('SELECT * FROM subjects',function(err,rows){
		if(err) {
    		res.send(err);
    	} else {
    		res.json(rows);
    	}
	});
});


app.listen(3000,function(){
	console.log("It works at 3000 port");
});
	
con.end(function(err) {
});