define(['backbone'], function(Backbone) {

    var TaskRoutes = Backbone.Router.extend({
        routes: {
            '': 'listTasks',
            'addTask': 'addTask',
        },

        listTasks: function() {
            requirejs(['views/tasks/index'], function(TasksView) {
                if (this.currentView) {
                    this.currentView.close();
                }

                var tasksView = new TasksView();
                this.currentView = tasksView;
                this.currentView.render();
            });
        },

        addTask: function() {
            requirejs(['views/tasks/form'], function(TasksFormView) {
                if (this.currentView) {
                    this.currentView.close();
                }

                var tasksFormView = new TasksFormView();
                this.currentView = tasksFormView;
                this.currentView.render();
            });
        }
    });

    return TaskRoutes;
});
