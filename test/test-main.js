var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files under the /base directory. So, on the server requests to files
    // will be served up under http://localhost:9876/base/*.
    // The Require.js config for baseUrl gives a starting context for modules that load with relative paths.
    // When setting this value for the Karma server it will need to start with /base. We want the baseUrl for our
    // tests to be the same folder as the base url we have in src/main.js, so that relative requires in the source won’t
    // need to change. So, as we want our base url to be at src/, we need to write /base/src.
    // (http://karma-runner.github.io/0.8/plus/RequireJS.html)
    baseUrl: '/base',

    paths: {
        text: 'src/text',
        config: 'config/config_dev',
        jquery: 'lib/jquery/jquery.min',
        underscore: 'lib/underscore/underscore.min',
        backbone: 'lib/backbone/backbone.min',
        localstore: 'lib/backbone/backbone.localStorage',
        taskModel: 'src/models/tasks/index',
        tasksFormView: 'src/views/tasks/form',
        tasksView: 'src/views/tasks/index',
        taskView: 'src/views/tasks/task',
        taskCollection: 'src/collections/tasks/index'
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
      'text' : {
        exports : 'text'
      }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
