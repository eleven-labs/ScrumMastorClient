define([
    'jquery',
    'underscore',
    'backbone',
    'githubModel',
    'githubCollection',
    'text!templates/github/index.html'
], function($, _, Backbone, GitHubModel, GitHubCollection, GitHubTemplate) {

    var GitHubView = Backbone.View.extend({
        el: $("#login"),

        render: function() {
            this.$el.html(GitHubTemplate);
        },

        close: function() {
            // nothing
        }
    });

    return GitHubView;
});
