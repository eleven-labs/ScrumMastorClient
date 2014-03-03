define([
  'jquery',
  'underscore',
  'backbone',
  'localstore',
  'models/tasks/index',
  'config'
], function($, _, Backbone, localstore, TaskModel, config){
    var TasksCollection = Backbone.Collection.extend({
        model: TaskModel, 

        initialize: function()
	{
 	   if (config.store == 'local') {
	   	this.localStorage = new Store("tasks");
	   } else {
	        this.url = config.store_url;
           }

	   console.log('Tasks collection Constructor');
        }
  });
 
  return TasksCollection;
});
