var app = angular.module("loginApp", ['ngCookies', 'angular-md5']);
app.controller("loginControl", ['$scope','$http','$cookies','md5',function($scope, $http, $cookies, md5) {

	$scope.users = [];
	
	$scope.validateLogin = function() {
		$http.get('/api/users/' + $scope.username)
			 .success(function(data) {
			 	$scope.users = data;
				if($scope.users[0] == null) {
					$scope.successmessage = 'Nincs ilyen felhasználó!';
				}
				else if($scope.users[0].password == md5.createHash($scope.password || '')) {
					$cookies.put('username', $scope.username);
					var myusername = $cookies.get('username');
					$scope.successmessage = 'Sikerült a bejelentkezés! Üdvözöllek, kedves ' + myusername + '!';
				}
				else {
					$scope.successmessage = 'Nem jó a jelszó!';
				}
			 })
			 .error(function(data) {
			 	console.log('error: ' + data);
			 	$scope.successmessage = 'Sajnáljuk! Hiba történt. Nemsokára megoldjuk.';
			 });
	}
}]);