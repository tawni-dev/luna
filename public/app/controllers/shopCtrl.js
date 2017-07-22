angular.module('lunaLumiere').controller('shopCtrl', function($scope, shopService) {

  $scope.getData = function () {
    $scope.items = shopService.getData();

    console.log($scope.items);
  }
  $scope.getData();
});
