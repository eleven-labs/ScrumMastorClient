requirejs.config({
  paths: {
    jquery: '../lib/jquery/jquery.min',
    underscore: '../lib/underscore/underscore.min',
    backbone: '../lib/backbone/backbone.min',
    localstore: '../lib/backbone/backbone.localStorage',
    templates: '../templates',
    taskModel: 'models/tasks/index',
    taskCollection: 'collections/tasks/index'
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
