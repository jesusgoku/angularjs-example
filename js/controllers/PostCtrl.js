app.controller('PostCtrl', ['$scope', 'Post', function ($scope, Post) {
  var posts = Post.query(function () {
    $scope.posts = posts;
  });

  $scope.delete = function (index) {
    Post.delete({ id: $scope.posts[index].id });
    $scope.posts.splice(index, 1);
  };
}]);

app.controller('PostDetailCtrl', ['$scope', '$stateParams', 'Post', 'User', 'Comment', function ($scope, $stateParams, Post, User, Comment) {
  var post = Post.get({ id: $stateParams.id }, function () {
    $scope.post = post;

    var user = User.get({ id: post.userId }, function () {
      $scope.user = user;
    });
  });

  var comments = Comment.query({ postId: $stateParams.id }, function () {
    $scope.comments = comments;
  });
}]);
