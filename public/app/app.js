var app = angular.module("app", ['ui.router']);

angular.module("app")
  .config(function($stateProvider, $urlRouterProvider) {

    // INITIALIZE STATES

		$stateProvider

		// HOME STATE
    .state('home', {
      url: '/',
      templateUrl: './app/routes/homeTmpl.html',
      controller: 'homeCtrl'
    })

    .state('shop', {
      url: '/shop',
      templateUrl: './app/routes/shopTmpl.html',
    })

    .state('lookbook', {
      url: '/lookbook',
      templateUrl: './app/routes/lookTempl.html',
    })

    .state('cart', {
      url: '/cart',
      templateUrl: './app/routes/cartTempl.html',
    })



    // ASSIGN OTHERWISE
		// ============================================================
		$urlRouterProvider.otherwise('/');
  })
