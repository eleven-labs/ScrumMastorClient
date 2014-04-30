define(['backbone', 'jquery'], function(Backbone, $) {

    var GitHubRoutes = Backbone.Router.extend({
        routes: {
            'github': 'sendToken',
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

        sendToken: function() {
            var code = this.getURLParameter('code');

            $.ajax({
                type: "post",
                crossDomain: true,
                url: "https://github.com/login/oauth/access_token",
                data: "client_id=bfcda35e836f13ee9d72&client_secret=4781cce7a55a180ed3ad20eeb6552562712fe0fa&code=" + code,
                dataType: 'jsonp',
                success: function(data, textStatus, jqXHR) {
                    console.log(data);
                    console.log(textStatus);
                    consoel.log(jqXHR);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(textStatus);
                    consoel.log(jqXHR);
                    console.log(errorThrown);
                },
            });
        },

        setAccessToken: function(json) {
             alert(json);
        }
    });

    return GitHubRoutes;
});
