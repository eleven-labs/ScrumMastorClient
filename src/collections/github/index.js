define([
    'jquery',
    'underscore',
    'backbone',
    'localstore',
    'githubModel',
    'config'
], function($, _, Backbone, localstore, GitHubModel, config){
    var GitHubCollection = Backbone.Collection.extend({
        model: GitHubModel, 

        initialize: function()
        { 
            this.localStorage = new Store("github");
            console.log('GitHubCollection Constructor');
        }
    });

    return GitHubCollection;
});
