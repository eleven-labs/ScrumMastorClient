define([
    'underscore',
    'backbone',
    'config'
], function(_, Backbone, config) {

    var GitHubModel = Backbone.Model.extend({
        defaults: {
            id: '1',
            username: "Username",
            accessToken: "accessToken",
        },

        initialize: function Doc() {
            console.log('GitHub Constructor');
        },

        getUsername: function() {
            return this.get('username');
        },

        setUsername: function() {
             $.ajax({
                type: 'get',
                url: 'https://api.github.com/user?access_token='+this.getAccessToken(),
                success: function(data) {
                    console.log(data);
                    this.set({username: data.login});
                }
            });
        },

        getAccessToken: function() {
            return this.get('accessToken');
        },

        setAccessToken: function(code) {
            $.ajax({
                type: "post",
                url: "/rest/github",
                data: "code=" + code,
                success: function(data) {
                    var res = data.split('&');
                    if (res[0]) {
                        var access = res[0].split('=');
                        if (access[0] == 'access_token') {
                            this.set({accessToken: access[1]});
                            this.setUsername();
                        }
                    }
                },
            });
        },
    });

    return GitHubModel;
});
