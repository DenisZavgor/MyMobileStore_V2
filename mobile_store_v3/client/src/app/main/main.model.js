(function () {
  'use strict';

  angular
    .module('client')
    .service('mainModel', MainModel);

  function MainModel ($http, $q) {
    console.log('Service enabled!');
    var items = [];
    debugger;
   this.getAllItems = function () {
      return $http({
          method: 'GET',
          url: 'http://localhost:4001/api/v1/phones'
        }).then(function (response) {
          console.log(response);
          return response.data;
        }, function (reject) {
          console.log(reject);
        });
    }
  }


})();








