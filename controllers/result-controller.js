(function(){
    "use strict";
    angular.module('planetApp').controller("resultController",['$scope','AppServices',
    function($scope,appServices){
        $scope.data = "new Result";
        $scope.planet = {
            name: 'Mercury',
            carbondioxide: 'Trace Amount',
            nitrogen: 'Trace Amount',
            oxygen: '42%',
            hydrogen: '22%'
        }
        $scope.IsFeatureEnabled = appServices.IsFeatureEnabled(false);
    }]);
})();