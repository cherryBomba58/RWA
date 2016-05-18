var app = angular.module("loginApp", ['ngCookies', 'angular-md5']);
app.controller("loginControl", ['$scope','$http','$cookies','md5',function($scope, $http, $cookies, md5) {

	$scope.users = [];
	
	$scope.validateLogin = function() {
		$http.get('/api/users/' + $scope.username)
			 .success(function(data) {
			 	$scope.users = data;
			 	console.log(data);
			 	console.log($scope.users[0].password);
			 	console.log(md5.createHash($scope.password || ''));
				var auth = false;
				if ($scope.users[0].password == md5.createHash($scope.password || '')) {
					$cookies.put('username', $scope.username);
					auth = true;
				}
		
				if(auth==false) {
					alert('Nem jó a jelszó!');
				}
				else {
					var myusername = $cookies.get('username');
					alert('Sikerült a bejelentkezés! Üdvözöllek, kedves ' + myusername + '!');
				}
			 })
			 .error(function(data) {
			 	console.log('error: ' + data);
			 	alert('Nincs ilyen felhasználó!');
			 });
	}
}]);