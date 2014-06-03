define([
  'jquery',
  'underscore',
  'backbone',
  'taskModel',
  'taskCollection',
  'githubModel',
  'githubCollection',
  'text!templates/tasks/form.html'
], function($, _, Backbone, TaskModel, TasksCollection, GitHubModel, GitHubCollection, TasksFormTemplate){

    var TasksFormView = Backbone.View.extend({
        events: {
            'submit form': 'addPost'
        },

        addPost: function(e) {
            e.preventDefault();

            var gitHubCollection = new GitHubCollection();
            var gitHubModel = new GitHubModel();
            gitHubCollection.fetch({
                reset: true , 
                success: function(collection, response, option) {
                    console.log(collection);
                    if (collection.length != 0) {
                        gitHubModel = collection.get(1);
                        console.log(gitHubModel);
                    }
                }
            });

            var tasksCollection = new TasksCollection();
            tasksCollection.fetch({ 
              reset: true , 
success: function(collection, response, option) {

            console.log(tasksCollection);

            var taskModel = new TaskModel();
            taskModel.setTitle(this.$('#title').val());
            taskModel.setDescription(this.$('#description').val());

            if (gitHubModel.getUsername() != undefined) {
                taskModel.setUsername(gitHubModel.getUsername());
            }
            console.log(tasksCollection.length); 
            taskModel.setPriority(tasksCollection.length);
            tasksCollection.add(taskModel);

            this.$('input[type="text"]').val(''); //on vide le form
            taskModel.save();
        
	}
});
},

        error: function(model, error) {
            console.log(model, error);
            return this;
        },

        render: function() {
            this.$el.html(TasksFormTemplate);
        },

        close: function() {
            this.undelegateEvents();
        }
    });

    return TasksFormView;
});
