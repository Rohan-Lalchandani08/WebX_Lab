angular.module('bookApp')
.factory('AuthService', function() {
  const credentials = {
    username: "Rohan 25",
    password: "1234"
  };

  return {
    login: function(username, password) {
      return username === credentials.username && password === credentials.password;
    }
  };
});
