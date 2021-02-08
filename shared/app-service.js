angular.module("planetApp").service("AppServices", [
  "$rootScope",
  "$http",
  "$q",
  function ($rootScope, $http, $q) {
    var service = {};
    service.IsFeatureEnabled = function (obj) {
      return obj ? true : false;
    };

    //Using $q as a promise
    service.readJSON = function (filename) {
      var q = $q.defer();  // creating defered object from $q  
      $http.get("../data/" + filename + ".json").then(
        function (response) {
          q.resolve(response.data); // Success response for promise
        },
        function (reason) {
          q.reject(reason.statusText); // Failure response for promise
        }
      );
      return q.promise; // Returning the promise
    };

    // Implementation using callback function
    // service.readJSON = function(filename, callback, error){
    //     $http.get('../data/'+ filename +'.json').then(function(response){
    //         callback(response.data);
    //     }, function(reason){
    //         error(reason.statusText);
    //     });
    // }

    return service;
  },
]);
