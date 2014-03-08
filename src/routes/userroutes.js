define(['backbone'], function(Backbone) {

    var UserRoutes = Backbone.Router.extend({
        routes: {
            'list_users': 'listUsers'
        },

        listUsers: function() {
            requirejs(["views/user/index"], function(UserList) {
                if (this.currentView) {
                    this.currentView.close();
                }

                var userList = new UserList();
                this.currentView = userList;
                this.currentView.render();       //..initialize and render view
            });
        }
    });

    return UserRoutes;
});
