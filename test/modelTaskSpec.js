// Assertions with karma mocha adapter => https://github.com/karma-runner/karma-mocha/issues/5

define(['taskmodel', 'chai'], function(TaskModel, chai)  {

  describe('TaskModel', function() {

    it('Test setTitle and getTitle', function() {
    	var task = new TaskModel();
    	task.setTitle('Test')
        
        chai.expect(task.getTitle()).to.equal('Test');
    });

    it('Test setTitle empty', function() {
    	var task = new TaskModel();
    	
        chai.expect(task.setTitle('')).to.equal('Le titre du document ne peut pas être vide !!!');
    });

    it('Test setDescription and getDescription', function() {
    	var task = new TaskModel();
    	task.setDescription('Test')
        
        chai.expect(task.getDescription()).to.equal('Test');
    });

  });

});
