var app = angular.module("offersApp", []);
app.controller("offersControl", function($scope) {
	$scope.offers = [
		{lender:'masvalaki',borrower:'valaki',writer:'George Orwell',title:'1984',
		year:'1948',publisher:'Európa Könyvkiadó',p_year:'1989',isbn:'1234'},
		{lender:'valaki',borrower:'masvalaki',writer:'Petőfi Sándor',
		title:'Összes költeményei',year:'1986',publisher:'Szépirodalmi Könyvkiadó',
		p_year:'1986',isbn:'2345'},
		{lender:'bonbon',borrower:'Senki',writer:'Mikszáth Kálmán',
		title:'Beszterce ostroma',year:'1896',publisher:'Szépirodalmi Könyvkiadó',
		p_year:'1988',isbn:'3456'}
	];
	$scope.borrow = function(isbn) {
	    for(i=0; i<$scope.offers.length; i++) {
	    	if($scope.offers[i].isbn == isbn && $scope.offers[i].borrower == 'Senki') {
	    		$scope.offers[i].borrower = 'valaki';
	    	}
	    }
	}
});