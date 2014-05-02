// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'routes/userroutes',
    'routes/taskroutes',
    'githubView',
], function($, _, Backbone, UserRoutes, TaskRoutes, GitHubView) {

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

        var githubView = new GitHubView({el : '#login'});
        githubView.render();

        Backbone.emulateHTTP = true;
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});
