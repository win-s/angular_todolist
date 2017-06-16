'use strict';

var todolist = angular.module('app.todolist');

todolist
  .controller('app.todolist.PageCtrl',PageCtrl)
  .controller('app.todolist.BaseTodolistCtrl',BaseTodolistCtrl)
  .controller('app.todolist.TodayCtrl',TodayCtrl)
  .controller('app.todolist.TomorrowCtrl',TomorrowCtrl)

function PageCtrl($scope){

}

function BaseTodolistCtrl($scope){

}

function TodayCtrl($scope,$controller){
  $controller('app.todolist.BaseTodolistCtrl', {$scope: $scope});
}

function TomorrowCtrl($scope,$controller){
  $controller('app.todolist.BaseTodolistCtrl', {$scope: $scope});
}