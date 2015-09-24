var app = angular.module('LnExample', ['ngResource', 'ui.router']);
// -- Constants
app.constant('API_BASE_URL', 'http://localhost:3000');
// -- Config
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'AppCtrl'
    })
    .state('posts', {
      url: '/posts',
      templateUrl: 'views/home.html',
      controller: 'PostCtrl'
    })
    .state('post_detail', {
      url: '/posts/:id',
      templateUrl: 'views/posts/detail.html',
      controller: 'PostDetailCtrl'
    })
    .state('users', {
      url: '/users',
      templateUrl: 'views/users/list.html',
      controller: 'UserCtrl'
    })
    .state('user_profile', {
      url: '/users/:id',
      templateUrl: 'views/users/profile.html',
      controller: 'UserProfileCtrl'
    })
  ;

  $urlRouterProvider.otherwise('/');
}]);
