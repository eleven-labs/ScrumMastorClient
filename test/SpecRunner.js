require.config({
  paths: {
    jquery: '/lib/jquery/jquery.min',
    underscore: '/lib/underscore/underscore.min',
    backbone: '/lib/backbone/backbone.min',
    localstore: '/lib/backbone/backbone.localStorage',
    chai: '/lib/tests/chai',
    chaijquery: '/lib/tests/chai-jquery',
    mocha: '/lib/tests/mocha',
    taskmodel: '/src/models/tasks/index',
  },
  shim: {
    'underscore': {
      exports: '_'
    },
    'jquery': {
      exports: '$'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'chaijquery': ['jquery', 'chai']
  },
  urlArgs: 'bust=' + (new Date()).getTime()
});
 
require(['require', 'chai', 'chaijquery', 'mocha', 'jquery'], function(require, chai, chaiJquery){
 
  // Chai
  var should = chai.should();
  chai.use(chaiJquery);
  
   mocha.setup('bdd');
 
  require([
    'modelTaskSpec.js',
  ], function(require) {
    mocha.run();
  });
 
});
