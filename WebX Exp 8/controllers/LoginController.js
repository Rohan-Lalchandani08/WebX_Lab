angular.module('bookApp')
.controller('LoginController', function($scope, AuthService) {
  $scope.user = {};
  $scope.loginSuccess = false;
  $scope.loginError = false;

  $scope.login = function() {
    if (AuthService.login($scope.user.username, $scope.user.password)) {
      $scope.loginSuccess = true;
      $scope.successMessage = "Login successful!";
      $scope.loginError = false;
    } else {
      $scope.loginError = true;
      $scope.errorMessage = "Invalid username or password.";
      $scope.loginSuccess = false;
    }
  };
});
