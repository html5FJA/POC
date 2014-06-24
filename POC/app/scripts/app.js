'use strict';

angular
  .module('pocApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activetab: 'results'
      })
      .when('/results', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activetab: 'results'
      })
      .when('/schedule', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activetab: 'schedule'
      })
      .when('/live', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        activetab: 'live'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

/**
 * Description:
 *     removes white space from text. useful for html values that cannot have spaces
 * Usage:
 *   {{some_text | nospace}}
 */
/*app.filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
});*/

/*var menu = document.querySelector('.nav nav-tabs');
var anchors = menu.getElementsByTagName('a');

for (var i = 0; i < anchors.length; i += 1) {
  anchors[i].addEventListener('click', function() { clickHandler(anchors[i]) }, false);
}

function clickHandler(anchor) {
  var hasClass = anchor.getAttribute('class');
  if (hasClass !== 'active') {
    anchor.setAttribute('class', 'active');
  }
}*/
