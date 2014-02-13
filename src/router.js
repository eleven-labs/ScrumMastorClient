// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/tasks/index',
  'views/tasks/form',
], function($, _, Backbone, TasksView, TasksFormView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'addTask': 'addTask',
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;

    app_router.on('route:defaultAction', function (actions) {
     if (this.currentView){
        this.currentView.close();
      }
      
      var tasksView = new TasksView();
      this.currentView = tasksView;
      this.currentView.render();
    }); 

    app_router.on('route:addTask', function (actions) {
      if (this.currentView){
        this.currentView.close();
      }

      var tasksFormView = new TasksFormView();
      this.currentView = tasksFormView;
      this.currentView.render();
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
