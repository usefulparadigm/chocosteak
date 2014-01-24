/*global chocosteak, $*/


window.chocosteak = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    appConfig: {
        // Your WordPress Home URL
        apiURL: 'http://cookinfacebook.com/api'
    },
    init: function () {
        'use strict';
        
        var posts = new this.Collections.PostsCollection([], {
            url: this.appConfig.apiURL+'/get_recent_posts/'
        });
        new this.Views.PostsView({
            collection: posts 
        });
    }
};

$(document).ready(function () {
    'use strict';
    chocosteak.init();
});
