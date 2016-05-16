// gettelni fog és összehasonlítani, keresni
var app = angular.module("loginApp", []);
app.controller("loginControl", function($scope, $http) {

	$scope.users = [];
	
	$scope.validateLogin = function() {
		$http.get('/api/users/' + $scope.username)
			 .success(function(data) {
			 	$scope.users = data;
			 	console.log(data);
			 	console.log($scope.users[0].password);
				var auth = false;
				if ($scope.users[0].password == $scope.password) {
					auth = true;
				}
		
				if(auth==false) {
					alert('Nem sikerült a bejelentkezés!');
				}
				else {
					alert('Sikerült a bejelentkezés!');
				}
			 		})
			 .error(function(data) {
			 	console.log('error: ' + data);
		});
	}
});