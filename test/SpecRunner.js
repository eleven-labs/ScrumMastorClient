require.config({
  paths: {
    jquery: '/js/libs/jquery/jquery.min',
    underscore: '/js/libs/underscore/underscore.min',
    backbone: '/js/libs/backbone/backbone.min',
    localstore: '/js/libs/backbone/backbone.localStorage',
    chai: '/js/libs/tests/chai',
    chaijquery: '/js/libs/tests/chai-jquery',
    mocha: '/js/libs/tests/mocha',
    taskmodel: '/js/models/task/TaskModel',
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
    'model-tasks-tests.js',
  ], function(require) {
    mocha.run();
  });
 
});
