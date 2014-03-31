define([
    'jquery',
    'underscore',
    'backbone',
    'models/tasks/index',
    'collections/tasks/index',
    'views/tasks/task',
    'text!templates/tasks/index.html'
], function($, _, Backbone, TaskModel, TasksCollection, TaskView, TasksTemplate) {

    var TasksView = Backbone.View.extend({
        el: $("#content"),

        render: function() {
            this.$el.html(TasksTemplate);

            var tasksCollection = new TasksCollection();
            tasksCollection.fetch();

            tasksCollection.each(this.addOne, this);
        },

        addOne: function(task) {
              var view = new TaskView({model : task})
              this.$("#tasks-list ul").append(view.render().el);
        },


        close: function() {
            // nothing
        }
    });

    return TasksView;
});
