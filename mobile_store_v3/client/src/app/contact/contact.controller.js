(function() {
  'use strict';

  angular
    .module('client')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController($http) {
    console.log("Contact ctrl init")
  }
})();