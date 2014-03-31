define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/tasks/task.html'
], function($, _, Backbone, TaskTemplate) {

    var TaskView = Backbone.View.extend({
        
        events: {
            "click a.destroy" : "clear",
        },

        initialize: function() {
           this.listenTo(this.model, 'destroy', this.remove);
        },

        render: function() {
            this.$el.html(TaskTemplate);

            var data = {
                task: this.model,
                _: _
            };

            var compiledTemplate = _.template(TaskTemplate, data);
            this.$("#task-item").html(compiledTemplate);
            return this;
        },

        clear: function() {
            this.model.destroy();
        }
    });

    return TaskView;
});
