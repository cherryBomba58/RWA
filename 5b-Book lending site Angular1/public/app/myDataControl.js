var app = angular.module("myDataApp", []);
app.controller("myDataControl", function($scope) {
	$scope.mydata = [
		{username:'valaki',email:'valaki@valaki.hu',place:'valahol',point:'5'}
	];
	$scope.borrowings = [
		{lender:'masvalaki',writer:'George Orwell',title:'1984',year:'1948',
		publisher:'Európa Könyvkiadó',p_year:'1989',isbn:'1234'}
	];
	$scope.lendings = [
		{borrower:'masvalaki',writer:'Petőfi Sándor',title:'Összes költeményei',
		year:'1986',publisher:'Szépirodalmi Könyvkiadó',p_year:'1986',isbn:'2345'}
	];
	$scope.addLending = function() {
		$scope.lendings.push({borrower:'Senki',writer:$scope.writer,title:$scope.title,
			year:$scope.year, publisher:$scope.publisher, p_year:$scope.p_year,
			isbn:$scope.isbn});
	}
});