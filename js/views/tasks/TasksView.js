define([
  'jquery',
  'underscore',
  'backbone',
  'models/task/TaskModel',
  'collections/tasks/TasksCollection',
  'text!templates/tasks/tasksTemplate.html'
], function($, _, Backbone, TaskModel, TasksCollection, TasksTemplate){

  var TasksView = Backbone.View.extend({
    el: $("#page"),
    render: function(){
      this.$el.html(TasksTemplate); 
      var task0 = new TaskModel({title:'Cross Domain'}); 
      var task1 = new TaskModel({title:'Infinite Scroll'}); 
      var task2 = new TaskModel({title:'Modular Backbone'}); 
      var task3 = new TaskModel({title:'Node MongoDB Mongoose Restify'});
      var task4 = new TaskModel({title:'Todo App'});

      var tasks = [task0, 
                      task1,
                      task2,
                      task3,
                      task4];

      var tasksCollection = new TasksCollection(tasks); 

      var data = {
        tasks: tasksCollection.models,
        _: _ 
      };



      var compiledTemplate = _.template(TasksTemplate, data);
      $("#tasks-list").html( compiledTemplate );
      
    }
  });

  return TasksView;
});
