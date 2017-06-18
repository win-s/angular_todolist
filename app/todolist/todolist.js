'use strict';

angular
  .module('app.todolist', ['ngRoute'])
  .config(config);

function config($routeProvider) {
  $routeProvider.when('/todolist', {
    templateUrl: 'todolist/todolist.html',
    controller: 'TodolistPageCtrl'
  });
}