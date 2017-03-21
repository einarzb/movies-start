app.controller('MoviesCtrl', ['$scope', 'movies', function($scope, movies) {
  $scope.isDeleting = false; //button is trashcan 

  $scope.movies = movies.getMovies();

  $scope.addMovie = function(){
    alert("This functionality will be available soon!");
  };
  
  $scope.deleteMovies = function(){
    $scope.isDeleting =! $scope.isDeleting; //toggle change to "done" button
  };
  
  $scope.doneDeleteMovies = function(){
    $scope.isDeleting = false; //button is trashcan
  };
  
  $scope.deleteMovie = function(){
    console.log("im in delete mode");
    // TODO: delete the movie only if the app is in "delete mode"
  };
 }]);

