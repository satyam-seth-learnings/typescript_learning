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
var App;
(function (App) {
    const post = new App.Post();
    console.log(post);
})(App || (App = {}));
