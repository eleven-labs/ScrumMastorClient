define([
  'jquery',
  'underscore',
  'backbone',
  'taskModel',
  'taskCollection',
  'text!templates/tasks/form.html'
], function($, _, Backbone, TaskModel, TasksCollection, TasksFormTemplate){

  var TasksFormView = Backbone.View.extend({

    events : {
        'submit form' : 'addPost'
      },
      
    addPost : function(e) {
      e.preventDefault();
        
      var tasksCollection = new TasksCollection();
      tasksCollection.fetch();
      console.log(tasksCollection);

      var taskModel = new TaskModel();
      taskModel.setTitle(this.$('#title').val());
      taskModel.setDescription(this.$('#description').val());

      tasksCollection.add(taskModel, { error : _.bind(this.error, this) });
        
      this.$('input[type="text"]').val(''); //on vide le form
      taskModel.save();        
    },

        
    error : function(model, error) {
      console.log(model, error);
      return this;
    },

    render: function(){
      this.$el.html(TasksFormTemplate); 
    },

    close: function(){
      this.undelegateEvents();
    }
  });

  return TasksFormView;
});
