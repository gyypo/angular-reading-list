var app = angular.module('readingList');

app.controller('homeCtrl', function($scope, $firebaseArray, homeService) {

	var books = new Firebase("https://textualadventures.firebaseIO.com/books");
	var readingBooks = new Firebase("https://textualadventures.firebaseIO.com/readingBooks");
	var readBooks = new Firebase("https://textualadventures.firebaseIO.com/readBooks");  //endpoints

	$scope.books = $firebaseArray(books);
	$scope.readingBooks = $firebaseArray(readingBooks);
	$scope.readBooks = $firebaseArray(readBooks);




	$scope.addBook = function() {  //function to add book to want to read

	 	$scope.books.$add({
	 		author: $scope.author,
	 		title: $scope.title
	 	})

	 	$scope.author = "";
	 	$scope.title = "";
	 }

	$scope.readingBook = function(book) {
		$scope.readingBooks.$add(book);
		$scope.books.$remove(book);
	}

	$scope.readBook = function(book) {
		$scope.readBooks.$add(book);
		$scope.readingBooks.$remove(book);
	}

	





	
	

	
});




