(function(){
    "use strict";
    angular.module('quizApp').controller("contentController",['$scope','$location','AppServices',
    function($scope, $location, appServices){
        $scope.currentSlide = "";
        $scope.index = 0;
        $scope.progressPercent = 0;
        $scope.resultFlag = false; //whether answered
        $scope.score = 0;
        var totalScore = 0;
        $scope.quizResponse = "";
        $scope.responseSuccess = false; //whether answer is right or wrong

        $scope.accessQuiz = function(optionIndex){
            $scope.resultFlag = true;
            if(optionIndex==$scope.currentSlide.options.correct.index){
                $scope.score += $scope.currentSlide.options.score;
                $scope.quizResponse = "Yay!!! You got it right.";
                $scope.responseSuccess = true;
            }
            else{
                $scope.quizResponse = "I'm afraid that's not quite right.";
                $scope.responseSuccess = false;
            }
        };

        //Code for Result Jump
        $scope.upNext = function(){
            $location.path('/result/score/'+$scope.score+'/total/'+totalScore);
        };

        $scope.next = function(){
            if($scope.index < $scope.data.length-1){
                $scope.index++;
                $scope.progressPercent = Math.ceil(100 * (1 + $scope.index) / $scope.data.length);
                $scope.currentSlide = $scope.data[$scope.index];
                if($scope.currentSlide.options)
                    totalScore += $scope.currentSlide.options.score;
                $scope.resultFlag = false;
            }
            else{

                // Controller Initialization
                // $scope.index = 0;
                // $scope.progressPercent = 0;
                // $scope.score = 0;
                // totalScore = 0;
                // $scope.currentSlide = $scope.data[$scope.index];
                // $scope.resultFlag = false;

                //Redirect to result page
                $location.path('/result/score/'+$scope.score+'/total/'+totalScore);
            }
            
        };

        //Using $q as a promise
        appServices.readJSON("quizPacket")
        .then(function(data){
            return data;
        })
        .then(function(data){
            $scope.data = data;
            $scope.currentSlide = data[0];
        })
        .catch(function(error){
            $scope.error = error;
        })
        .finally(function(){
            console.log("Prints whether success/failure :)");
        });

        // Implementation Using Callback Function
        // appServices.readJSON("quizPacket", function(result){
        //     $scope.data = result;
        // },function(error){
        //     $scope.error = error;
        // });
    }]);
})();