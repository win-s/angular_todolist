'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'app.todolist',
  'dndLists'// drag & drop list from angular-drag-and-drop-lists libary
])
.config(config);

function config($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/todolist'});
}