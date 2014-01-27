/*global chocosteak, Backbone, JST*/

chocosteak.Views = chocosteak.Views || {};

(function () {
    'use strict';

    chocosteak.Views.PostsView = Backbone.View.extend({
        
        el: '#main',
        template: JST['app/scripts/templates/posts.ejs'],
        
        // events: {
        //     'click .post': 'showPost' 
        // },
        
        initialize: function() {
            this.listenTo(this.collection, 'sync reset', this.render);
            // this.collection.fetch(); // Auto-load when created
            this.render();  
        },
        
        render: function() {
            // console.log(this.collection);
            console.log(this.collection.toJSON());
            this.$el.html(this.template({posts: this.collection.toJSON()}));
            return this;
        },
        
        showPost: function(event) {
            var post = event.currentTarget,
                postId = $(post).data('postId');
            // update the URL and call the route function    
            chocosteak.appRouter.navigate("posts/"+postId, {trigger: true});
        }

    });

})();
