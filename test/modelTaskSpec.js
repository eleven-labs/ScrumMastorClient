// Assertions with karma mocha adapter => https://github.com/karma-runner/karma-mocha/issues/5

define(['taskmodel', 'chai'], function(TaskModel, chai)  {

  describe('TaskModel', function() {

    it('Test setTitle', function() {
    	var task = TaskModel();
    	task.setTitle('Test')
        
        chai.expect(task.getTitle()).to.equal('Test');
    });

  });

});
