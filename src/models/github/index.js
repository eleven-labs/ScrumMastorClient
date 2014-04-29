define([
    'underscore',
    'backbone',
    'config'
], function(_, Backbone, config) {

    var GitHubModel = Backbone.Model.extend({
        defaults: {
            username: "Username",
        },

        initialize: function Doc() {
            console.log('GitHub Constructor');
        },

        
    });

    return GitHubModel;
});
