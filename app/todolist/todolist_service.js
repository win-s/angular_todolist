'use strict';

var todolist = angular.module('app.todolist');

todolist
  .factory('TodolistBaseService',TodolistBaseService)

  .factory('TodayModel',TodayModel)
  .factory('TomorrowModel',TomorrowModel)

  .factory('TodayService',TodayService)
  .factory('TomorrowService',TomorrowService)

function TodolistBaseService($q){
  
  return {
    //replace by each todolist type(today,tomorrow)
    model:{
      getModel:function(){},
      setModel:function(){}
    },
    //overload this function when loading data from server
    load:function(){
      var deferred = $q.defer();
      deferred.resolve();
      return deferred;
    },
    getModel:function(){
      return this.model.getModel();
    },
    setModel:function(model){
      this.model.setModel(model);
    }
  };
}

function TodayService(TodolistBaseService,TodayModel){
  var obj = Object.create(TodolistBaseService);
  obj.model = TodayModel;

  return obj;
}

function TomorrowService(TodolistBaseService,TomorrowModel){
  var obj = Object.create(TodolistBaseService);
  obj.model = TomorrowModel;

  return obj;  
}

function TodayModel(){
  
  // Example task object
  // {
  //   finished:false,
  //   text:"test"
  // }
  // array of object todolist
  var model = [];
  return {
    getModel:function(){
      return model;
    },
    setModel:function(model){
      model = model;
    }
  };
}
function TomorrowModel(){
  var model = [];
  return {
    getModel:function(){
      return model;
    },
    setModel:function(model){
      model = model;
    }
  };
}