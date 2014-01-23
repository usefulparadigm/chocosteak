/*global chocosteak, Backbone*/

chocosteak.Collections = chocosteak.Collections || {};

(function () {
    'use strict';

    chocosteak.Collections.PostsCollection = Backbone.Collection.extend({

        model: chocosteak.Models.PostModel,
        
        parse: function(response) {
            // console.log(response);
            return response.posts;
        }

    });

})();
