var app = angular.module("myApp", []);
app.controller("myControl", function($scope) {
	$scope.subjects = [
		{code:'BMEVIAUA300',name:'Önálló laboratórium',credit:'6',teacher:'Gipsz Jakab'},
		{code:'BMEVIAUA350',name:'Informatikai technológiák',credit:'2',teacher:'Tóth László'},
		{code:'BMEVIAUA360',name:'Adatvezérelt alkalmazások',credit:'4',teacher:'Szabó Zoltán'},
		{code:'RXFVKBTA270',name:'Bűbájtan',credit:'2',teacher:'Perseus Piton'},
		{code:'HRVBKRTA120',name:'Történelem',credit:'5',teacher:'ifj. Henry Jones'}
	];
});