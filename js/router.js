// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/tasks/TasksView',
  'views/tasks/TasksFormView',
], function($, _, Backbone, TasksView, TasksFormView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    

    app_router.on('route:defaultAction', function (actions) {
      var tasksView = new TasksView();
      tasksView.render();
    }); 

    app_router.on('route:addTask', function (actions) {
      var tasksFormView = new TasksFormView();
      tasksFormView.render();
    }); 
       // We have no matching route, lets display the home page 
    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
