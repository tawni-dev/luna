var app = angular.module("app", ['ui.router']);

angular.module("app")
  .config(function($stateProvider, $urlRouterProvider) {

    // INITIALIZE STATES

		$stateProvider

		// HOME STATE
    .state('home', {
      url: '/',
      templateUrl: './routes/home/homeTmpl.html',
      // controller: 'homeCtrl'
    })


    // ASSIGN OTHERWISE
		// ============================================================
		$urlRouterProvider.otherwise('/');
  })
