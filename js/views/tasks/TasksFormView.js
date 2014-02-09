define([
  'jquery',
  'underscore',
  'backbone',
  'models/task/TaskModel',
  'collections/tasks/TasksCollection',
  'text!templates/tasks/tasksFormTemplate.html'
], function($, _, Backbone, TaskModel, TasksCollection, TasksFormTemplate){

  var TasksFormView = Backbone.View.extend({
    el: $("#page"),

    events : {
        'submit form' : 'addPost'
      },
      
      addPost : function(e) {
        e.preventDefault();
        
        var tasksCollection = new TasksCollection();

        tasksCollection.add({
          title : this.$('.title').val(),
          description : this.$('.description').val()
        }, { error : _.bind(this.error, this) });
          TasksCollection.get(this.$('.id').val()).save();
          this.$('input[type="text"]').val(''); //on vide le form
        },
        
        error : function(model, error) {
            console.log(model, error);
            return this;
        },

    render: function(){
      this.$el.html(TasksFormTemplate); 
      
      
      $("#tasks-form").html();
    }
  });

  return TasksFormView;
});