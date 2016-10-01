preguntadosApp.config(function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise("/index");
  
  $stateProvider
    .state('index', {
      url: "/index",
      templateUrl: "templates/initial.html"
    })
    .state('geographyTest', {
      url: "/geographyTest",
      templateUrl: "templates/geographyTest.html"
    })
    .state('mathTest', {
      url: "/mathTest",
      templateUrl: "templates/mathTest.html"
    })
    .state('cineTest', {
      url: "/cineTest",
      templateUrl: "templates/cineTest.html"
    })
    .state('futbolTest', {
      url: "/futbolTest",
      templateUrl: "templates/futbolTest.html"
    });
});