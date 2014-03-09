define(['tasksFormView'], function(TasksFormView)  {

  describe('TaskModel', function() {

    beforeEach(function() {
        el = $('<div></div>');
        tasksFormView = new TasksFormView(el);
        tasksFormView.render();
    });

    it('Initiate view', function() {
    	expect(tasksFormView.$('#title').attr('type')).toBe('text');
        expect(tasksFormView.$('#description').attr('type')).toBe('text');
    });

    it('Add post', function() {
    	tasksFormView.$('#title').val('Nouveau post');
        tasksFormView.$("#addTaskForm").trigger('submit');

        expect(tasksFormView.$('#title').val()).toBe('');
        expect(tasksFormView.$('#description').val()).toBe('');
    });

  });

});