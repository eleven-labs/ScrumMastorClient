// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'routes/userroutes',
    'routes/taskroutes',
    'githubView',
    'githubCollection',
    'githubModel',
], function($, _, Backbone, UserRoutes, TaskRoutes, GitHubView, GitHubCollection, GitHubModel) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            // '' : 'home' => TODO
        }
    });

    var initialize = function() {
        this._subRouters = {
            'users': new UserRoutes(),
            'tasks': new TaskRoutes()
        };

        var gitHubCollection = new GitHubCollection();
        var gitHubModel = new GitHubModel();
        gitHubCollection.fetch({
            reset: true , 
            success: function(collection, response, option) {
                console.log(collection);
                if (collection.length != 0) {
                    gitHubModel = collection.at(1);
                }
            })
        });

        var githubView = new GitHubView({el : '#login', model : gitHubModel, collection: gitHubCollection});
        githubView.render();

        Backbone.emulateHTTP = true;
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
