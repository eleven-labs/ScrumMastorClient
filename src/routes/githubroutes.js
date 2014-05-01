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
		url: "/rest/github",
                data: "code=" + code,
                success: function(data) {
                     var res = data.split('&');
		     if (res[0]){
		       var access = res[0].split('=');
		if (access[0] == 'access_token') {
			console.log(access[1]);

			$.ajax({
				type: 'get',
                                url: 'https://api.github.com/user?access_token='+access[1],
 success: function(data) {
	console.log(data);
}
			});
		}
			}
		},
            });
        },
    });

    return GitHubRoutes;
});
