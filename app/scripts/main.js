/*global chocosteak, $*/


window.chocosteak = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    appConfig: {
        baseURL: 'http://192.168.0.11:8000'
    },
    init: function () {
        'use strict';
        
        var posts = new this.Collections.PostsCollection([], {
            url: this.appConfig.baseURL+'/api/get_recent_posts/'
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
