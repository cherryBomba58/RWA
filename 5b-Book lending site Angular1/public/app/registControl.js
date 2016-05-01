var app = angular.module("registApp", []);
app.controller("registControl", function($scope) {
	$scope.users = [
		{username:'valaki',email:'valaki@valaki.hu',place:'valahol',password:'probajelszo',
		guid:'proba1'},
		{username:'masvalaki',email:'masvalaki@masvalaki.hu',place:'mashol',
		password:'masikproba',guid:'proba2'},
		{username:'bonbon',email:'bonbon@bonbonetti.hu',place:'mittudomenhol',
		password:'megegyproba',guid:'proba3'}
	];
	$scope.validateRegist= function() {
		if($scope.password != $scope.password2) {
			alert('Nem egyenlő a két jelszó!');
		}
		else {
			$scope.users.push({username:$scope.username,email:$scope.email,
				place:$scope.place,password:$scope.password,guid:'AAAAAAAAAAA'});
			alert('Sikerült a regisztráció! (Bár egyelőre nem tudsz bejelentkezni)');
		}
	}
});