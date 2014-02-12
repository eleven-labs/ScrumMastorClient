var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/src',

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


    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
