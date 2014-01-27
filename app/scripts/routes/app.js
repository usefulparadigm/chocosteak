/*global chocosteak, Backbone*/

chocosteak.Routers = chocosteak.Routers || {};

(function () {
    'use strict';

    chocosteak.Routers.AppRouter = Backbone.Router.extend({

        routes: {
            '': 'index',
            // 'posts/:id': 'show'
        },
        
        initialize: function() {
            // create collection for cache
            this.posts = new chocosteak.Collections.PostsCollection([], {
                url: chocosteak.appConfig.apiURL+'/get_recent_posts/'
            });
            this.posts.fetch();
        },
        
        index: function() {
            new chocosteak.Views.PostsView({
                collection: this.posts 
            });
        },
        
        // show: function(id) {
        //     var post = this.posts.findWhere({id: parseInt(id)});
        //     console.log(post);
        //     new chocosteak.Views.SingleView({
        //        model: post
        //     });
        // }

    });

})();
