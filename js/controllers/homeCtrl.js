var app = angular.module('readingList');

app.controller('homeCtrl', function($scope, $firebaseArray) {

	var url = "https://textualadventures.firebaseIO.com"; //connection to firebase
	var fireRef = new Firebase(url);
	
	
	$scope.books = $firebaseArray(fireRef);
	// $scope.readingBooks = $firebaseArray(fireRef);
	// $scope.readBooks = $firebaseArray(fireRef);

	$scope.addBook = function() {  
		
		var title = $scope.title.trim();  //.trim removes whitespace from either side of a string 
		
		if (!title.length) {  //if no title then just return 
			return;
		}
		
		$scope.books.$add({         //add book with title/author to books in firebase
			title: title,
			author: $scope.author
		});

		$scope.title = "";  //upon submission reset both title and author to empty
		$scope.author = "";

	};

	$scope.readingBook = function() {
		$scope.readingBooks.$add({
			title: $scope.title,
			author: $scope.author
		});
	};

	$scope.readBook = function(title, author) {

	};


	
});






// app.controller('homeCtrl', function($scope, $firebaseObject) {

// var ref = new Firebase("https://textualadventures.firebaseio.com/data");

// $scope.hello = alert("hey");


// });