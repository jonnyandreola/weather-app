'use strict';

weatherApp.controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {

    $scope.type = 'metric';

    $scope.search = function(city, type) {
        if(!city) {
            alert('City can\'t be blank.');
            return false;
        }

        $location.path('/result').search({q: $scope.city, units: $scope.type})
    }

}]);
