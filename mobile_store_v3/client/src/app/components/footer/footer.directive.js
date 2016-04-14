(function() {
  'use strict';

  angular
    .module('client')
    .directive('footer', Directive);

  /** @ngInject */
  function Directive($http) {
    return {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.view.html',
      controller: FooterController,
      // controllerAs: 'ctrl'
    }
  }

  // function FooterController ($location) {
    function FooterController () {
    console.log('Footer init');
    var vm = this;

  }
})();