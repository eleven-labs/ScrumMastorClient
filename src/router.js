// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'routes/userroutes',
  'routes/taskroutes'
], function($, _, Backbone, UserRoutes, TaskRoutes) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      // '' : 'home' => TODO
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    this._subRouters = {
        'users' : new UserRoutes(),
        'tasks' : new TaskRoutes()
    };

    Backbone.history.start();
  };

  return { 
    initialize: initialize
  };
});
