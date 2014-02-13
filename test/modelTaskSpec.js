// Assertions with karma mocha adapter => https://github.com/karma-runner/karma-mocha/issues/5

define(['taskmodel', 'chai'], function(taskmodel, chai)  {

  describe('TaskModel', function() {

    it('should works ! :)', function() {
         chai.expect(true).to.equal(true);
    });

  });

});
