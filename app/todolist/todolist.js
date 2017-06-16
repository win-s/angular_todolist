'use strict';

angular.module('app.todolist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todolist', {
    templateUrl: 'todolist/todolist.html',
    controller: 'app.todolist.PageCtrl'
  });
}]);