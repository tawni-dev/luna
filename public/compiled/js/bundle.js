"use strict";

var app = angular.module("app", ['ui.router']);

angular.module("app").config(function ($stateProvider, $urlRouterProvider) {

  // INITIALIZE STATES

  $stateProvider

  // HOME STATE
  .state('home', {
    url: '/',
    templateUrl: './app/routes/homeTmpl.html',
    controller: 'homeCtrl'
  }).state('shop', {
    url: '/shop',
    templateUrl: './app/routes/shopTmpl.html'
  }).state('lookbook', {
    url: '/lookbook',
    templateUrl: './app/routes/lookTempl.html'
  }).state('cart', {
    url: '/cart',
    templateUrl: './app/routes/cartTempl.html'
  });

  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('lunaLumiere').controller('shopCtrl', function ($scope, shopService) {

  $scope.getData = function () {
    $scope.items = shopService.getData();

    console.log($scope.items);
  };
  $scope.getData();
});
'use strict';

angular.module('lunaLumiere').controller('homeCtrl', function ($scope, shopService) {});
'use strict';

angular.module('lunaLumiere').service('shopService', function () {

  this.getData = function () {
    return items;
  };
});

var items = [{
  name: 'The Deathly Hallows',
  description: 'A purple quartz crystal with a Deathly Hallows Charm.',
  image: 'images/hp.jpg'
}, {
  name: 'Crystalline',
  description: 'A quartz cluster, placed on a filigree base.',
  image: 'images/crystal.jpg'
}, {
  name: 'Sea Queen',
  description: 'A single quartz crystal wrapped in faux leather cord, with an abalone shell bead.',
  image: 'images/teal.jpg'
}, {
  name: 'Crones Hand',
  description: 'A single rainbow quartz, cradled in a skeleton hand.',
  image: 'images/rainbow.jpg'
}, {
  name: 'Sly Fox',
  description: 'A simple pendant a cute fox.',
  image: 'images/fox.jpg'
}, {
  name: 'Picasso',
  description: 'A wire wrapped picasso stone cabochon.',
  image: 'images/black.jpg'
}];
//# sourceMappingURL=bundle.js.map
