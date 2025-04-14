angular.module('bookApp')
.controller('MainController', function($scope) {
  $scope.message = "This is one-way binding!";
  $scope.username = "";
});
