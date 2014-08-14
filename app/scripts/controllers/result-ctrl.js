'use strict';

weatherApp.controller('ResultCtrl', ['$scope', '$routeParams','$location', 'ForecastService', function ($scope, $routeParams, $location, ForecastService) {
    var params = $routeParams;
    $scope.units = params.units;
    $scope.forecast = {};
    var forecast = ForecastService.get(params);
    
    forecast.success(function(data){
        $scope.forecast = data;
        $scope.forecast.units = params.units;
    });

    $scope.switchUnit = function(){
        ForecastService.convertUnit($scope.forecast.list, $scope.units);
    }

    $scope.search = function(city) {
        $location.search({q: city, units: $scope.units});
    }


}]);
