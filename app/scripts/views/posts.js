/*global chocosteak, Backbone, JST*/

chocosteak.Views = chocosteak.Views || {};

(function () {
    'use strict';

    chocosteak.Views.PostsView = Backbone.View.extend({
        
        el: '#main',
        template: JST['app/scripts/templates/posts.ejs'],
        
        initialize: function() {
            this.listenTo(this.collection, 'sync reset', this.render);
            this.collection.fetch(); // Auto-load when created
          // this.render();  
        },
        
        render: function() {
            // console.log(this.collection);
            console.log(this.collection.toJSON());
            this.$el.html(this.template({posts: this.collection.toJSON()}));
            return this;
        }

    });

})();
