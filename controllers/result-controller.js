(function(){
    "use strict";
    angular.module('quizApp').controller("resultController",['$scope','$location','$routeParams',
    function($scope,$location,$routeParams){
        
        $scope.percent=0;
        $scope.responseFlag = 0;
        $scope.data = $routeParams; //$routeParams or $route.current.params
        
        if($scope.data.total==0){
            $scope.result = "Give it a try.";
            $scope.smallText = "Want to improve?";
            $scope.responseFlag = 1;
        }else {
            $scope.percent = 100 * $scope.data.score/$scope.data.total;
            if($scope.percent<=35){
                $scope.result = "You can do better.";
                $scope.smallText = "Want to improve?";
                $scope.responseFlag = 2;
            }else if($scope.percent>35 & $scope.percent<=70){
                $scope.result = "Nice Score.";
                $scope.smallText = "A making of a pro indeed.";
                $scope.responseFlag = 3;
            }else if($scope.percent>70){
                $scope.result = "Great Score.";
                $scope.smallText = "A making of a pro indeed.";
                $scope.responseFlag = 4;
            } 
        }

        $('.pie').ready(function() {
            const circle = new CircularProgressBar('pie');
        });

    }]);
})();