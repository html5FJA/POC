'use strict';

angular.module('pocApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

/*function MyController($scope, $http) {
    $scope.items = [];
    $scope.getItems = function() {
        $http({method : 'GET',url : 'http://192.168.89.15:8080/worldcup/v1/results'})
            .success(function(data, status) {
                $scope.items = data;
            })
            .error(function(data, status) {
                alert("Error");
            });
    }};*/



function MyController($scope, $http) {
    $scope.items = [];
    $scope.getResults = function() {
	  	$http({method : 'GET',url : 'http://192.168.89.15:8080/worldcup/v1/results'})
	  		.success(function(data, status) {
	            $scope.items = data;
	            data.reverse();
	            })
	            .error(function(data, status) {
	                alert("Error");
	            });
	      	$scope.$apply();
  	}

  $scope.getSchedule = function() {
	  	$http({method : 'GET',url : 'http://192.168.89.15:8080/worldcup/v1/schedule'})
	  		.success(function(data, status) {
	            $scope.items = data;
	            })
	            .error(function(data, status) {
	                alert("Error");
	            });
	      $scope.$apply();
  	}

  	$scope.getLive = function() {
	  	$http({method : 'GET',url : 'http://192.168.89.15:8080/worldcup/v1/live'})
	  		.success(function(data, status) {
	            $scope.items = data;
	            data.reverse();
	            })
	            .error(function(data, status) {
	                alert("Error");
	            });
	    $scope.$apply();
  	}};


  