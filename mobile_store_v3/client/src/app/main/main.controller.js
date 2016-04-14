

(function () {
  'use strict';

  angular
    .module('client')
    .controller('MainController', MainController);


  function MainController($http, mainModel) {
    var vm = this;

    vm.items = [];

    mainModel.getAllItems()
      .then(function (data) {
        vm.items = data;
      }, function (reject) {
        console.log(reject);
      });
  }
})();
