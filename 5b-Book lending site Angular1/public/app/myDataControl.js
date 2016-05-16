var app = angular.module("myDataApp", []);
app.controller("myDataControl", function($scope, $http) {
	$scope.mydata = [];
	$scope.borrowings = [];
	$scope.lendings = [];
	$scope.username = 'masvalaki';
	
	$http.get('/api/mydata/' + $scope.username)
		 .success(function(data) {
		 	$scope.mydata = data;
		 	console.log(data);
		 })
		 .error(function(data) {
		 	console.log('Error: ' + data);
		 });
		 
	$http.get('/api/borrowings/' + $scope.username)
		 .success(function(data) {
		 	$scope.borrowings = data;
		 	console.log(data);
		 })
		 .error(function(data) {
		 	console.log('Error: ' + data);
		 });
		 
	$http.get('/api/lendings/' + $scope.username)
		 .success(function(data) {
		 	$scope.lendings = data;
		 	console.log(data);
		 })
		 .error(function(data) {
		 	console.log('Error: ' + data);
		 });
	
	$scope.addLending = function() {
		// könyv felvétele a könyvek adatbázisába
		$scope.book = {writer:$scope.writer,title:$scope.title,year:$scope.year,
			publisher:$scope.publisher, p_year:$scope.p_year,ISBN:$scope.ISBN};
			
        $http.post('/api/books', $scope.book)
            .success(function(data) {
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
            
        // kölcsönadási ajánlat felvétele az ajánlatok közé
        $scope.lend = {offerid:null,lender:$scope.username,borrower:null,bookid:$scope.ISBN};
			
		$http.post('/api/offers', $scope.lend)
            .success(function(data) {
                $scope.lendings = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
	}
});