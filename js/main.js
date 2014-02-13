requirejs.config({
  paths: {
    jquery: 'libs/jquery/jquery.min',
    underscore: 'libs/underscore/underscore.min',
    backbone: 'libs/backbone/backbone.min',
    localstore: 'libs/backbone/backbone.localStorage',
    templates: '../templates'
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
