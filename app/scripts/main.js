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
        this.appRouter = new this.Routers.AppRouter();
        Backbone.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    chocosteak.init();
});
