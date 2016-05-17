var app = angular.module("registApp", ['ngCookies']);
app.controller("registControl", ['$scope','$http','$cookies',function($scope, $http, $cookies) {
	
	$scope.validateRegist= function() {
		if($scope.password != $scope.password2) {
			alert('Nem egyenlő a két jelszó!');
		}
		else {
			$scope.user = {username:$scope.username,email:$scope.email,
				place:$scope.place,password:$scope.password,guid:'AAAAAAAA'};
			
			$http.post('/api/users', $scope.user)
	            .success(function(data) {
	                console.log(data);
	                alert('Sikerült a regisztráció! (Bár egyelőre nem tudsz bejelentkezni)');
	            })
	            .error(function(data) {
	                console.log('Error: ' + data);
	                alert('Hiba történt a regisztrációkor! Elnézést kérünk, nemsokára javítjuk a hibát.');
	            });
		}
	}
}]);