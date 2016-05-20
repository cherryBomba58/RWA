var app = angular.module("loginApp", ['ngCookies', 'angular-md5']);
app.controller("loginControl", ['$scope','$http','$cookies','md5','$window',function($scope, $http, $cookies, md5, $window) {

	var myusername = $cookies.get('username');
	
	$scope.visibleOnLogon = myusername?{'visibility': 'visible'}:{'display': 'none'};
	$scope.visibleOnLogoff = myusername?{'display': 'none'}:{'visibility': 'visible'};
			
	$scope.logoff = function() {
		$cookies.remove('username');
	}
	
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
					$window.location.href = '/mydata.html';
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