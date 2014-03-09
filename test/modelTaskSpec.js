define(['taskmodel'], function(TaskModel)  {

  describe('TaskModel', function() {

    it('Test setTitle and getTitle', function() {
    	var task = new TaskModel();
    	task.setTitle('Test')
        
        expect(task.getTitle()).toEqual('Test');
    });

    it('Test setDescription and getDescription', function() {
    	var task = new TaskModel();
    	task.setDescription('Test')
        
        expect(task.getDescription()).toEqual('Test');
    });

  });

});
