"use strict";
var App;
(function (App) {
    class Post {
        constructor() {
            this.title = "My First Post";
            this.description = "Description";
        }
    }
    App.Post = Post;
})(App || (App = {}));
