var app = angular.module('readingList');

app.controller('homeCtrl', function($scope, angularFire) {

	var url = "https://textualadventures.firebaseIO.com";  //connects to firebase url

	angularFire(url, $scope, "books").then(function() {
			//all functions will then go in here. the .then is basically saying to wait for the promise to return before running anything
	
	$scope.wantToRead = function(title, author) {

	}

	$scope.reading = function(title, author) {

	}

	$scope.read = function(title, author) {

	}


	})
});






// app.controller('homeCtrl', function($scope, $firebaseObject) {

// var ref = new Firebase("https://textualadventures.firebaseio.com/data");

// $scope.hello = alert("hey");


// });