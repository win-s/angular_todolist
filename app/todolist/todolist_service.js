'use strict';

var todolist = angular.module('app.todolist');

todolist
  .service('app.todolist.BaseTodolistCtrl',BaseTodolistCtrl)
  .service('app.todolist.TodayCtrl',TodayCtrl)
  .service('app.todolist.TomorrowCtrl',TomorrowCtrl)

function BaseTodolistCtrl($scope){

}

function TodayCtrl($scope,$controller){
  $controller('app.todolist.BaseTodolistCtrl', {$scope: $scope});
}

function TomorrowCtrl($scope,$controller){
  $controller('app.todolist.BaseTodolistCtrl', {$scope: $scope});
}