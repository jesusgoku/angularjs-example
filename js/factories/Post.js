app.factory('Post', ['$resource', 'API_BASE_URL', function ($resource, API_BASE_URL) {
  return $resource(API_BASE_URL + '/posts/:id');
}]);
