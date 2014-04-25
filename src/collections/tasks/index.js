define([
    'jquery',
    'underscore',
    'backbone',
    'localstore',
    'taskModel',
    'config'
], function($, _, Backbone, localstore, TaskModel, config){
    var TasksCollection = Backbone.Collection.extend({
        model: TaskModel, 

        initialize: function()
	{
 	    if (config.store == 'local') {
	       this.localStorage = new Store("tasks");
	    } else {
	       this.url = config.store_url + '/task';
            }

	    console.log('Tasks collection Constructor');
        }
    });

    return TasksCollection;
});
