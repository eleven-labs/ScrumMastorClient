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

        getURLParameter: function(sParam) {
            var sPageURL = window.location.search.substring(1);
            var sURLVariables = sPageURL.split('&');
            for (var i = 0; i < sURLVariables.length; i++) 
            {
                var sParameterName = sURLVariables[i].split('=');
                if (sParameterName[0] == sParam) 
                {
                    return sParameterName[1];
                }
            }
        },

        render: function() {
            var gitHubCollection = new GitHubCollection();
            var gitHubModel = new GitHubModel();
            var code = this.getURLParameter('code');
            gitHubCollection.fetch({
                reset: true , 
                success: function(collection, response, option) {
                    console.log(collection);
                    if (collection.length != 0) {
                        gitHubModel = collection.at(1);
                    } else {
                        if (code != undefined) {
                            gitHubModel.setAccessToken(code);

                            collection.add(gitHubModel);
                            gitHubModel.save();
                        }
                    }
                }
            });
           
            var data = {
                github: gitHubModel,
                _: _
            };

            var compiledTemplate = _.template(GitHubTemplate, data);

            this.$el.html(compiledTemplate);
        },

        close: function() {
            // nothing
        }
    });

    return GitHubView;
});
