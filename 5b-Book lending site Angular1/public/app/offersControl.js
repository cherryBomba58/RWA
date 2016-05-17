var app = angular.module("offersApp", ['ngCookies']);
app.controller("offersControl", ['$scope','$http','$cookies',function($scope, $http, $cookies) {
	$scope.offers = [];
	var myusername = $cookies.get('username');
	
	$http.get('/api/offers')
		 .success(function(data) {
		 	$scope.offers = data;
		 	console.log(data);
		 })
		 .error(function(data) {
		 	console.log('Error: ' + data);
		 });
	
	$scope.borrow = function(offerid) {
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
}]);