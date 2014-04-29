define(['backbone', 'jquery'], function(Backbone, $) {

    var GitHubRoutes = Backbone.Router.extend({
        routes: {
            'github/:code': 'sendToken',
        },

        sendToken: function(code) {
            $.ajax({
                type: "post",
                url: "https://github.com/login/oauth/access_token",
                data: "client_id=bfcda35e836f13ee9d72&client_secret=4781cce7a55a180ed3ad20eeb6552562712fe0fa&code=" + code,
                success: function(msg) {
                    console.log(msg);
                }; 
            });
        },
    });

    return GitHubRoutes;
});
