'use strict';

angular.module('pocApp')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.currentUrl = $location.path;
  }]);

function MyController($scope, $http) {
    $scope.items = [];
    $scope.getResults = function() {
	  	$http({method : 'GET',url : 'http://wcpoc.herokuapp.com/worldcup/v1/results'})
	  		.success(function(data, status) {
	            $scope.items = data;
	            data.reverse();
	            })
	            .error(function(data, status) {
	                alert("Error");
	            });
  	}
	$scope.getResults();

  $scope.getSchedule = function() {
	  	$http({method : 'GET',url : 'http://wcpoc.herokuapp.com/worldcup/v1/schedule'})
	  		.success(function(data, status) {
	            $scope.items = data;
	            })
	            .error(function(data, status) {
	                alert("Error");
	            });
  	}

  	$scope.getLive = function() {
	  	$http({method : 'GET',url : 'http://wcpoc.herokuapp.com/worldcup/v1/live'})
	  		.success(function(data, status) {
	            $scope.items = data;
	            data.reverse();
	            })
	            .error(function(data, status) {
	                alert("Error");
	            });
  	}
    };
	

function HeaderController($scope, $location) 
{ 
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}
  