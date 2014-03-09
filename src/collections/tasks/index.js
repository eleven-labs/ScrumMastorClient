define([
  'jquery',
  'underscore',
  'backbone',
  'localstore',
  'taskModel'
], function($, _, Backbone, localstore, TaskModel){
    var TasksCollection = Backbone.Collection.extend({
        model: TaskModel,
    
        localStorage : new Store("tasks"),

        initialize : function() {
            console.log('Tasks collection Constructor');
        }
  });
 
  return TasksCollection;
});
