angular.module('bookApp')
.filter('bookFilter', function() {
  return function(books, searchQuery) {
    if (!searchQuery) return books;

    const lowerQuery = searchQuery.toLowerCase();

    return books.filter(book =>
      book.title.toLowerCase().includes(lowerQuery) ||
      book.author.toLowerCase().includes(lowerQuery) ||
      book.genre.toLowerCase().includes(lowerQuery)
    );
  };
});
