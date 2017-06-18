'use strict';

var todolist = angular.module('app.todolist');

todolist
  .controller('TodolistPageCtrl',TodolistPageCtrl)
  .controller('BaseTodolistCtrl',BaseTodolistCtrl)
  .controller('TodayCtrl',TodayCtrl)
  .controller('TomorrowCtrl',TomorrowCtrl)

function TodolistPageCtrl($scope){

}

function BaseTodolistCtrl($scope){
  $scope.tasks = [];
  $scope.edit = false;
  $scope.startEdit = function(){
    $scope.edit = true;
  };
  $scope.onDone = function(){
    $scope.edit = false;
  };
  $scope.storeModel = function(){};// overloadding this function

  $scope.onFinishTask = function(item){
    if(!$scope.edit){
      item.finished = !item.finished;
    }

  };
  $scope.onRemove = function(item){
    $scope.remove();
  };
  $scope.remove = function(item){
    var index = $scope.tasks.indexOf(item);
    $scope.tasks.splice(index,1);
  }
}

function TodayCtrl($scope,$controller,TodayService,TomorrowService){
  $controller('BaseTodolistCtrl', {$scope: $scope});
  $scope.tasks = TodayService.getModel();
  $scope.task ="";
  
  $scope.addTask = function(task){
    $scope.tasks.unshift({
      finished:false,
      text:task
    });

    $scope.task = "";
    $scope.edit = false;

  }

  $scope.moveToTmr = function(item){

    var tmrModel= TomorrowService.getModel();
    tmrModel.push(item);

    $scope.remove(item);
  }
}

function TomorrowCtrl($scope,$controller,TomorrowService,TodayService){
  $controller('BaseTodolistCtrl', {$scope: $scope});
  $scope.tasks = TomorrowService.getModel();

  $scope.moveToToday = function(item){

    var todayModel= TodayService.getModel();
    todayModel.push(item);

    $scope.remove(item);
  }  
}