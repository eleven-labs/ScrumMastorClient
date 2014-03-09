requirejs.config({
  paths: {
    jquery: '../lib/jquery/jquery.min',
    underscore: '../lib/underscore/underscore.min',
    backbone: '../lib/backbone/backbone.min',
    localstore: '../lib/backbone/backbone.localStorage',
    templates: '../templates',
    taskModel: '../src/models/tasks/index',
    taskCollection: '../src/collections/tasks/index',
    config: '../config/config_dev'
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
