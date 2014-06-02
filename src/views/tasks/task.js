define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/tasks/task.html'
], function($, _, Backbone, TaskTemplate) {

    var TaskView = Backbone.View.extend({
        tagName: 'li',
        id: 'task-item',

        events: {
            "click a.destroy" : "clear",
            "dblclick span.edit": "edit",
            "keypress .update_title": "updateOnEnter",
       	    "dragstart #task-item": "drag",
	 },

        initialize: function() {
           this.listenTo(this.model, 'destroy', this.remove);
           this.listenTo(this.model, 'change', this.render);
        },

        drag: function(ev) {
          ev.originalEvent.dataTransfer.setData("text/html", $(ev.target).data('id'));
	},

        edit: function() {
            this.$('.update_title').show();
            this.$('.edit').hide();
        },

        updateOnEnter: function(e) {
            if (e.which === 13) {
                this.model.setTitle(this.$('.update_title').val());
                this.model.save();
            }
        },

        render: function() {
            this.$el.data('id', this.model.getId());
            this.$el.attr('draggable', true);
            
            var data = {
                task: this.model,
                _: _
            };

            var compiledTemplate = _.template(TaskTemplate, data);
            this.$el.html(compiledTemplate);
            return this;
        },

        clear: function() {
            this.model.destroy();
        }
    });

    return TaskView;
});
