define([
  'jquery',
  'underscore',
  'backbone',
  'models/task/index',
  'collections/tasks/index',
  'text!templates/tasks/index.html'
], function($, _, Backbone, TaskModel, TasksCollection, TasksTemplate){

  var TasksView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      this.$el.html(TasksTemplate); 

      var tasksCollection = new TasksCollection(); 
      tasksCollection.fetch();
      
      var data = {
        tasks: tasksCollection.models,
        _: _ 
      };

      var compiledTemplate = _.template(TasksTemplate, data);
      $("#tasks-list").html( compiledTemplate );
      
    },

	 close: function(){
    // nothing
   }
  });

  return TasksView;
});
