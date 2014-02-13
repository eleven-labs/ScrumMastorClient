// Assertions with karma mocha adapter => https://github.com/karma-runner/karma-mocha/issues/5

define(['taskmodel', 'chai'], function(taskmodel, chai)  {

  describe('TaskModel', function() {

    it('Test setTitle', function() {
    	var task = taskmodel();
    	task.setTitle('Test')
        
        chai.expect(task.getTitle()).to.equal('Test');
    });

  });

});
