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
                _: _
            };

            var compiledTemplate = _.template(GitHubTemplate, data);

            this.$el.html(compiledTemplate);
        },

        clear: function() {
            this.model.destroy();
            location.reload(true);
	},

        close: function() {
            // nothing
        }
    });

    return GitHubView;
});
