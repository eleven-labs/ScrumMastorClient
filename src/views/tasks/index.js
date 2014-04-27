define([
    'jquery',
    'underscore',
    'backbone',
    'taskModel',
    'taskCollection',
    'taskView',
    'text!templates/tasks/index.html'
], function($, _, Backbone, TaskModel, TasksCollection, TaskView, TasksTemplate) {

    var TasksView = Backbone.View.extend({
        el: $("#content"),

        render: function() {
            this.$el.html(TasksTemplate);

            var tasksCollection = new TasksCollection();
            tasksCollection.fetch({ 
              reset: true , 
          	  success: function(collection, response, option) {
                  console.log(collection);
                  collection.each(function(model, index){
          			    var view = new TaskView({model : model});
          			    $("#tasks-list ul").append(view.render().el);	
          		    });
              } 
            });
        },

        close: function() {
            // nothing
        }
    });

    return TasksView;
});
