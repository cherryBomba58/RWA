var app = angular.module("indexApp", ['ngCookies']);
app.controller("indexControl", ['$scope','$cookies',function($scope, $cookies) {

	var myusername = $cookies.get('username');
	
	$scope.visibleOnLogon = myusername?{'visibility': 'visible'}:{'display': 'none'};
	$scope.visibleOnLogoff = myusername?{'display': 'none'}:{'visibility': 'visible'};
			
	$scope.logoff = function() {
		$cookies.remove('username');
	}
	
}]);