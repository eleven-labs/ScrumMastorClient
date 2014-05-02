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

        initialize: function() {
           this.listenTo(this.model, 'change', this.save);
           this.listenTo(this.model, 'save', this.render);
        },

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

        save: function() {
            this.collection.add(this.model);
            this.model.save();
        },

        render: function() {
            var gitHubCollection = new GitHubCollection();
            var code = this.getURLParameter('code');

            if (code != undefined && !this.model.getUsername()) {
                this.model.setAccessToken(code);
            }

            var data = {
                github: this.model,
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
