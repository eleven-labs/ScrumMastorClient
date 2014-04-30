define(['backbone', 'jquery'], function(Backbone, $) {

    var GitHubRoutes = Backbone.Router.extend({
        routes: {
            'github/:code': 'sendToken',
        },

        sendToken: function(code) {
        $.ajax({
                type: "post",
		crossDomain: true,
                url: "https://github.com/login/oauth/access_token",
                data: "client_id=bfcda35e836f13ee9d72&client_secret=4781cce7a55a180ed3ad20eeb6552562712fe0fa&code="+code,
		dataType: 'JSONP',                
        	success: function(responseData, textStatus, jqXHR) 
    {
        console.log(responseData);
    },
    error: function (responseData, textStatus, errorThrown) 
    {
        console.warn(responseData, textStatus, errorThrown);
    }});
	},
    });

    return GitHubRoutes;
});
