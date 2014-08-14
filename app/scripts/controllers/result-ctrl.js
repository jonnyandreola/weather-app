'use strict';

weatherApp.controller('ResultCtrl', ['$scope', '$routeParams', 'ForecastService', function ($scope, $routeParams, ForecastService) {
    var params = $routeParams;
    var forecast = ForecastService.get(params);
    
    forecast.success(function(data){
        $scope.forecast = data;
        $scope.forecast.units = params.units;
    });


}]);
