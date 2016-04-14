(function () {
  'use strict';

  angular 
    .module('client')
    .service('detailsModel', DetailsModel);

  function DetailsModel ($http, $q) {
    console.log('Service enabled!');
    var items = [];

       
    this.getPhoneItems = function (id) {
      var url = "http://localhost:4001/api/v1/phones/"+id;

      return $http({
          method: 'GET',
          url: url
        }).then(function (response) {
          console.log(response);
          return response.data;
        }, function (reject) {
          console.log(reject);
        });
    }

    this.getComment = function(id){
      var url = "http://localhost:4001/api/v1/comments/"+id;

      return $http({
          method: "GET",
          url: url
        }).then(function (response){
          return response.data;
        });
    } 

// ======================================
    this.setReview = function (item) {
      return $http({
                method: 'POST',
                url: 'http://localhost:4001/api/v1/comments/',
                data: item
            }).then(function (response) {
                return response.data;
            }, function (reject) {
                console.log(reject);
            });
    };

// ==========================================
  }
})();




  