var app = angular.module("offersApp", ['ngCookies']);
app.controller("offersControl", ['$scope','$http','$cookies',function($scope, $http, $cookies) {
	$scope.offers = [];
	var myusername = $cookies.get('username');
	
	$scope.visibleOnLogon = myusername?{'visibility': 'visible'}:{'display': 'none'};
	$scope.visibleOnLogoff = myusername?{'display': 'none'}:{'visibility': 'visible'};
			
	$scope.logoff = function() {
		$cookies.remove('username');
	}
	
	$http.get('/api/offers')
		 .success(function(data) {
		 	$scope.offers = data;
		 	console.log(data);
		 })
		 .error(function(data) {
		 	console.log('Error: ' + data);
		 });
	
	$scope.borrow = function(offerid, lender, borrower) {
		if(lender == myusername) {
			alert('Ez a saját ajánlatod, ezt nem kölcsönözheted ki!');
		}
		else if(borrower != null) {
			alert('Ez az ajánlat már foglalt, nem kölcsönözheted ki!');
		}
		else {
			$scope.off = {offerid:offerid,borrower:myusername};
				
			$http.put('/api/offers/' + offerid, $scope.off)
	            .success(function(data) {
	                $scope.offers = data;
	                console.log(data);
	            })
	            .error(function(data) {
	                console.log('Error: ' + data);
	            });
		}
	}
}]);