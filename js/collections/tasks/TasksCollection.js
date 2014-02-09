define([
  'jquery',
  'underscore',
  'backbone',
  'models/task/TaskModel'
], function($, _, Backbone, TaskModel){
    var TasksCollection = Backbone.Collection.extend({
        model: TaskModel,
    
        initialize : function() {
            console.log('Tasks collection Constructor');
        }
  });
 
  return TasksCollection;
});
