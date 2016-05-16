var app = angular.module("offersApp", []);
app.controller("offersControl", function($scope, $http) {
	$scope.offers = [];
	$scope.username = 'masvalaki';
	
	$http.get('/api/offers')
		 .success(function(data) {
		 	$scope.offers = data;
		 	console.log(data);
		 })
		 .error(function(data) {
		 	console.log('Error: ' + data);
		 });
	
	$scope.borrow = function(offerid) {
		$scope.off = {offerid:offerid,borrower:$scope.username};
			
		$http.put('/api/offers/' + offerid, $scope.off)
            .success(function(data) {
                $scope.offers = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
	}
});