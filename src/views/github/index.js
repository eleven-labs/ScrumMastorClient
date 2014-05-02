define([
    'jquery',
    'underscore',
    'backbone',
    'githubModel',
    'githubCollection',
    'config',
    'text!templates/github/index.html'
], function($, _, Backbone, GitHubModel, GitHubCollection, Config, GitHubTemplate) {

    var GitHubView = Backbone.View.extend({
        el: $("#login"),

        events: {
            "click #logout" : "clear",
        },

        initialize: function() {
           this.listenTo(this.model, 'change', this.save);
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
            this.render();
        },

        render: function() {
            var code = this.getURLParameter('code');

            if (code != undefined && !this.model.getUsername()) {
                this.model.setAccessToken(code);
            }

            var data = {
                github: this.model,
                redirect_uri: Config['redirect_url'],
                _: _
            };

            var compiledTemplate = _.template(GitHubTemplate, data);

            this.$el.html(compiledTemplate);
        },

        clear: function() {
            this.model.destroy();
            this.render();
        },

        close: function() {
            // nothing
        }
    });

    return GitHubView;
});
