angular.module('bookApp')
.controller('BookController', function($scope) {
  $scope.searchQuery = "";

  $scope.books = [
    { title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction' },
    { title: 'Clean Code', author: 'Robert C. Martin', genre: 'Programming' },
    { title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Classic' },
    { title: 'The Pragmatic Programmer', author: 'Andrew Hunt', genre: 'Programming' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic' }
  ];
});
