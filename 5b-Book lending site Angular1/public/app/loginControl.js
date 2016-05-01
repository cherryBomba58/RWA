var app = angular.module("loginApp", []);
app.controller("loginControl", function($scope) {
	$scope.users = [
		{username:'valaki',email:'valaki@valaki.hu',place:'valahol',password:'probajelszo',
		guid:'proba1'},
		{username:'masvalaki',email:'masvalaki@masvalaki.hu',place:'mashol',
		password:'masikproba',guid:'proba2'},
		{username:'bonbon',email:'bonbon@bonbonetti.hu',place:'mittudomenhol',
		password:'megegyproba',guid:'proba3'}
	];
	$scope.validateLogin = function() {
		var auth = false;
		for (i=0; i<$scope.users.length; i++) {
			if ($scope.users[i].username == $scope.username && $scope.users[i].password == $scope.password) {
				auth = true;
			}
		}
		if(auth==false) {
			alert('Nem sikerült a bejelentkezés!');
		}
		else {
			alert('Sikerült a bejelentkezés!');
		}
	}
});