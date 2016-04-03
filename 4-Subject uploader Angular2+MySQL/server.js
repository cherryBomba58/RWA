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

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	var router = express.Router();
	app.use('/api', router);

	app.listen(3000,function(){
		console.log("I'm alive at 3000 port");
	});
	
	var newSubject = new app.Subject(code, name, credit, teacher);
    con.query('INSERT INTO subjects SET ?', newSubject, function(err,result){
    	if(err) throw err;
    });
	
	con.query('UPDATE subjects SET code = ?, name = ?, credit = ?, teacher = ? ' +
	'WHERE code = ?', [code, name, credit, teacher, scode], function(err, result){
		if(err) throw err;
	});
	
	con.query('DELETE FROM subjects WHERE code = ?',[code], function(err,result) {
		if(err) throw err;
	});
	
	con.query('SELECT * FROM subjects',function(err,rows){
		if(err) throw err;
		for(var i=0; i<rows.length; i++) {
			this.subjects.push(new app.Subject(rows[i].code, rows[i].name,
			rows[i].credit, rows[i].teacher));
		};
	});
	
	con.end(function(err) {
	});