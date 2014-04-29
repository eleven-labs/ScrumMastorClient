define(['tasksView', 'taskCollection', 'taskModel'], function(TasksView, TaskCollection, TaskModel) {

    describe('Tasks View', function() {

        beforeEach(function() {
            el = $('<div></div>');
            var taskCollection = new TaskCollection();
            taskCollection.fetch();
            taskCollection.each(function(model) {
                  model.destroy();
            });
            tasksView = new TasksView(el);
            tasksView.render();
        });

        it('Initiate view', function() {
            expect(tasksView.$('li').size()).toBe(0);
        });
    });

    describe('Task view with collection', function() {
        beforeEach(function() {
            el = $('<div></div>');

            var taskCollection = new TaskCollection();
            taskCollection.fetch();
            taskCollection.each(function(model) {
                  model.destroy();
            });

            var taskModel = new TaskModel();
            taskCollection.add(taskModel);
            taskModel.save();
            tasksView = new TasksView({'el': el, 'collection': taskCollection});
            tasksView.render();
        });

        it('View collections', function() {
            expect(tasksView.$('li').size()).toBe(2);
        });
    });
});
