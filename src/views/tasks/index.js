define([
    'jquery',
    'jqueryui',
    'underscore',
    'backbone',
    'taskModel',
    'taskCollection',
    'taskView',
    'text!templates/tasks/index.html'
], function($, jqueryui, _, Backbone, TaskModel, TasksCollection, TaskView, TasksTemplate) {

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

                  $( "#tasks-list ul" ).sortable({
                    placeholder: "ui-state-highlight",
		                update: function(event, ui) {
                      var model = collection.get(ui.item.data('id'));
                      model.setPriority(ui.item.index());
                      model.save();
                      console.log('update: '+ui.item.index())
                    },
                    start: function(event, ui) { 
                      console.log('start: ' + ui.item.index())
                    }
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
