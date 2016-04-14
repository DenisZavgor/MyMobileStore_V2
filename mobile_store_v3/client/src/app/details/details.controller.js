(function() {
  'use strict';

  angular
    .module('client')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($http, detailsModel, $stateParams) {
    console.log("Details ctrl init")
    var vm = this;

    vm.phone = [];
    vm.imageUrl = null;
    vm.comments = [];
    vm.review = [];


    detailsModel.getPhoneItems($stateParams.id)
      .then(function (response) {
        vm.phone = response;
        vm.imageUrl = response.images[0];
      }, function (reject) {
        console.log(reject);
      });


      vm.setImage = function(url){
        vm.imageUrl = url;
      }

      detailsModel.getComment($stateParams.id)
      .then(function (response) {
        vm.comments = response;
      })

// ================================================
       vm.model = {
            "item_id": $stateParams.id,
            "author": null,
            "item_rating": null,
            "text": null
           };

      vm.setReview = function (e) {
       detailsModel.setReview(vm.model)
          .then(function (response) {
           vm.comments.push(response);
          });
        
        console.log(vm.review);
      };

  // ===============================================

}
})()