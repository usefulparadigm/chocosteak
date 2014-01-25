/*global chocosteak, Backbone*/

chocosteak.Routers = chocosteak.Routers || {};

(function () {
    'use strict';

    chocosteak.Routers.AppRouter = Backbone.Router.extend({

        routes: {
            '': 'index'
        },
        
        index: function() {
            var posts = new chocosteak.Collections.PostsCollection([], {
                url: chocosteak.appConfig.apiURL+'/get_recent_posts/'
            });
            new chocosteak.Views.PostsView({
                collection: posts 
            });
        }

    });

})();
