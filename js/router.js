// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;
    

    app_router.on('route:defaultAction', function (actions) {
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
