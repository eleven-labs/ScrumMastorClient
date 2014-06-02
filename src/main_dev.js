requirejs.config({
  paths: {
    jquery: '../lib/jquery/jquery.min',
    jqueryui: '../lib/jquery/jqueryui',
    underscore: '../lib/underscore/underscore.min',
    backbone: '../lib/backbone/backbone.min',
    localstore: '../lib/backbone/backbone.localStorage',
    templates: '../templates',
    taskModel: '../src/models/tasks/index',
    taskCollection: '../src/collections/tasks/index',
    githubModel: '../src/models/github/index',
    githubCollection: '../src/collections/github/index',
    githubView: '../src/views/github/index',
    taskView: '../src/views/tasks/task',
    config: '../config/config_dev'
  },
  shim: {
    'jqueryui': {
      exports: "$",
      deps: ['jquery']
  }
});

requirejs([
  // Load our app module and pass it to our definition function
  'app',

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
