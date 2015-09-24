app.directive('bsPanel', function () {
  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'partials/bs-panel.html',
    transclude: true,
    scope: {
      type: '@',
      title: '@'
    },
    compile: function (el, attrs) {
     if (!attrs.type) { attrs.type = 'success'; }
    }
  };
});
