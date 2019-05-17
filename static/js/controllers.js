
var ConsoleModule = angular.module('ConsoleModule', ['ngRoute']);

ConsoleModule.config(['$routeProvider', '$locationProvider','$sceDelegateProvider', '$httpProvider',
    function ($routeProvider, $locationProvider, $sceDelegateProvider, $httpProvider) {
    $routeProvider.when('/', {
        templateUrl: '/partials/Byzip.html',
        controller: 'wcontroller',
        controllerAs: 'wcontroller'
    });
}]);


ConsoleModule.controller('wcontroller', ['$scope', '$http', '$routeParams', '$timeout', '$sce',
    function($scope, $http, $routeParams, $timeout, $sce) {

    $scope.somemessage = "Some weather";
    $scope.zip1City = "";
    $scope.zip1Weather = "";

    $scope.city = function(which) {

        var data = "";

        if(which === 1) {
            data = $scope.city1m;
            //markers.m1.position = 

        } else if(which === 2) {
            data = $scope.city2m;
        } else if(which === 3) {
            data = $scope.city3m;
        } else if(which === 4) {
            data = $scope.city4m;
        } 

        if(data.length > 4) {
            $http({
                method: "GET",
                url: '/api/v1/getWeather2?city=' + data
            }).then( function(response) {
                if(which === 1) {
                    $scope.zip1Weather = response.data.weather;   
                    test();                 
                } else if(which === 2) {
                    $scope.zip2Weather = response.data.weather;
                } else if(which === 3) {
                    $scope.zip3Weather = response.data.weather;
                } else if(which === 4) {
                    $scope.zip4Weather = response.data.weather;
                } 
            });
        } else {
            if(which === 1) {
                    $scope.zip1Weather = "";
                } else if(which === 2) {
                    $scope.zip2Weather = "";
                } else if(which === 3) {
                    $scope.zip3Weather = "";
                } else if(which === 4) {
                    $scope.zip4Weather = "";
                } 
        }
    };
    
}]);