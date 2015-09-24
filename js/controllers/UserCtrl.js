app.controller('UserCtrl', ['$scope', 'User', function ($scope, User) {
  var users = User.query(function () {
    $scope.users = users;
  });
}]);

app.controller('UserProfileCtrl', ['$scope', '$stateParams', 'User', 'Post', function ($scope, $stateParams, User, Post) {
  var user = User.get({ id: $stateParams.id }, function () {
    $scope.user = user;
  });

  var posts = Post.query({ userId: $stateParams.id }, function () {
    $scope.posts = posts;
  });
}]);