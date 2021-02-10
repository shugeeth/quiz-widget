var app = angular.module('quizApp', ['ngRoute', 'ngAnimate']);
app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix(''); 
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/content', {
      templateUrl: "./templates/content-template.html",
      controller: "contentController"
    })
    .when('/result/score/:score/total/:total', {
      templateUrl: "./templates/result-template.html",
      controller: "resultController"
    })
    .when('/', {
      templateUrl: "./templates/content-template.html",
      controller: "contentController"
    })
    // .otherwise({  
    //     redirectTo: '/content'  
    // }); 
});