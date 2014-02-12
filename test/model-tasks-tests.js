define(function(require) {
  var models = require('taskmodel');

  describe('Models', function() {
 
    describe('Sample Model', function() {
      it('should default "urlRoot" property to "/api/samples"', function() {
        var sample = new models.Sample();
        sample.urlRoot.should.equal('/api/samples');
      });
    });
 
  });
 
});
