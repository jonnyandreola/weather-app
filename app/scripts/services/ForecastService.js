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

    var convertUnit = function (list, unit) {
        for (var i = 0; i < list.length; i++) {
            for(var key in list[i].temp) {
                if(unit === 'imperial') {
                    list[i].temp[key] = list[i].temp[key] * 9 / 5 + 32;
                } else {
                    list[i].temp[key] = (list[i].temp[key] - 32) * 5 / 9;
                }
            }
        }
        return list
    }

    return {
        get: getForecast,
        convertUnit: convertUnit
    }
    
}])