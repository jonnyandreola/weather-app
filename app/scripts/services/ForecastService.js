'use strict';

weatherApp.factory('ForecastService', ['$http', function($http){
    var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily';

    var getForecast = function(params) {
        params.cnt = 7;
        return $http({
            method: 'GET',
            url: apiUrl,
            params: params
        });
    }

    return {
        get: getForecast
    }
    
}])