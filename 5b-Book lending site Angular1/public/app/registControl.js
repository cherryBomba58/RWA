var app = angular.module("registApp", ['ngCookies']);
app.controller("registControl", ['$scope','$http','$cookies',function($scope, $http, $cookies) {
	
	var myusername = $cookies.get('username');
	
	$scope.visibleOnLogon = myusername?{'visibility': 'visible'}:{'display': 'none'};
	$scope.visibleOnLogoff = myusername?{'display': 'none'}:{'visibility': 'visible'};
			
	$scope.logoff = function() {
		$cookies.remove('username');
	}

	$scope.validateRegist= function() {
		if($scope.password != $scope.password2) {
			$scope.successmessage = 'Nem egyenlő a két jelszó!';
		}
		else {
			$http.get('/api/users/' + $scope.username)
		 		.success(function(data) {
		 			console.log(data);
		 			if(data[0] != null) {
		 				$scope.successmessage = 'Már van ilyen felhasználó! Válassz másik nevet!';
		 			}
		 			else {
		 				$scope.user = {username:$scope.username,email:$scope.email,
							place:$scope.place,password:$scope.password,guid:'AAAAAAAA'};
						
						$http.post('/api/users', $scope.user)
				            .success(function(data) {
				                console.log(data);
				                $scope.successmessage = 'Sikerült a regisztráció!\n';
				            })
				            .error(function(data) {
				                console.log('Error: ' + data);
				                $scope.successmessage = 'Hiba történt a regisztrációkor! Elnézést kérünk, nemsokára javítjuk a hibát.\n';
				            });
		 			}
		 		})
		 		.error(function(data) {
		 			console.log('Error: ' + data);
		 		});
			}
	}
}]);