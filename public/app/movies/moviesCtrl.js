app.controller('MoviesCtrl', ['$scope', 'movies', function($scope, movies) {
  $scope.isDeleting = false; //button is trashcan

//array af all movies
  $scope.movies = movies.getMovies();
//getting data from one movie
  $scope.movie = $scope.movies[0];

  $scope.addMovie = function(){
    alert("This functionality will be available soon!");
  };

  $scope.deleteMovies = function(){
    $scope.isDeleting =! $scope.isDeleting; //toggle change to "done" button
  };

  $scope.doneDeleteMovies = function(){
    $scope.isDeleting = false; //button is trashcan
  };

  $scope.deleteMovie = function(index){
    movies.removeMovie(index); //invoke service app
  };

 }]);
