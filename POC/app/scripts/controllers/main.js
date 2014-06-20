'use strict';

angular.module('pocApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


function MyController($scope, $http) {
    $scope.items = [];
    $scope.getItems = function() {
        $http({method : 'GET',url : 'http://localhost:8080/worldcup/v1/results'})
            .success(function(data, status) {
                $scope.items = data;
            })
            .error(function(data, status) {
                alert("Error");
            });
    }};