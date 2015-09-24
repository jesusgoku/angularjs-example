app.controller('AppCtrl', ['$scope', 'Post', function($scope, Post) {
    var posts = Post.query(function () {
      $scope.posts = posts;
    });
}]);
