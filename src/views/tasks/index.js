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

        events: {
          "drop #tasks-list ul": "drop",
          "dragover #tasks-list ul": "allowDrop",
        },

        drop: function(ev) {
          ev.preventDefault();
          var data = ev.originalEvent.dataTransfer.getData("text/html");          
          console.log($('li[data-id='+ data+']').first());
          $('li[data-id='+ data+']').each(function() {
            ev.target.appendChild(this);
          }); 
        },

        allowDrop: function(ev) {
                ev.preventDefault();
        },

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

                  $( "#tasks-list" ).sortable({
                    placeholder: "ui-state-highlight"
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
