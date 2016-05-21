var app = angular.module("myDataApp", ['ngCookies']);
app.controller("myDataControl", ['$scope','$http','$cookies',function($scope, $http, $cookies) {
	$scope.mydata = [];
	$scope.borrowings = [];
	$scope.lendings = [];
	var myusername = $cookies.get('username');
	
	$scope.visibleOnLogon = myusername?{'visibility': 'visible'}:{'display': 'none'};
	$scope.visibleOnLogoff = myusername?{'display': 'none'}:{'visibility': 'visible'};
			
	$scope.logoff = function() {
		$cookies.remove('username');
	}
	
	$http.get('/api/mydata/' + myusername)
		 .success(function(data) {
		 	$scope.mydata = data;
		 	console.log(data);
		 })
		 .error(function(data) {
		 	console.log('Error: ' + data);
		 });
		 
	$http.get('/api/borrowings/' + myusername)
		 .success(function(data) {
		 	$scope.borrowings = data;
		 	console.log(data);
		 })
		 .error(function(data) {
		 	console.log('Error: ' + data);
		 });
		 
	$http.get('/api/lendings/' + myusername)
		 .success(function(data) {
		 	$scope.lendings = data;
		 	console.log(data);
		 })
		 .error(function(data) {
		 	console.log('Error: ' + data);
		 });
	
	$scope.addLending = function() {
		// könyv felvétele a könyvek adatbázisába, ha még nincs ott
		$http.get('/api/books/' + $scope.ISBN)
	    	.success(function(data) {
	        	console.log(data);
	        	if(data[0] == null) {
	        		$scope.book = {writer:$scope.writer,title:$scope.title,year:$scope.year,
						publisher:$scope.publisher,p_year:$scope.p_year,ISBN:$scope.ISBN};
						
					console.log($scope.book);
						
			        $http.post('/api/books', $scope.book)
			            .success(function(data) {
			                console.log(data);
			            })
			            .error(function(data) {
			                console.log('Error: ' + data);
			            });
	        	}
	        	
	        	$scope.lend = {offerid:null,lender:myusername,borrower:null,bookid:$scope.ISBN};
			
				$http.post('/api/offers', $scope.lend)
		            .success(function(data) {
		                $scope.lendings = data;
		                console.log(data);
		            })
		            .error(function(data) {
		                console.log('Error: ' + data);
		            });
	        })
	        .error(function(data) {
	        	console.log('Error: ' + data);
	        });
	}
}]);