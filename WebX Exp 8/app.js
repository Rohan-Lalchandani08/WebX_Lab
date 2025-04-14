angular.module('bookApp', ['ngRoute'])
.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })
    .when('/library', {
      templateUrl: 'views/library.html',
      controller: 'BookController'
    })
    .otherwise({ redirectTo: '/' });
});
