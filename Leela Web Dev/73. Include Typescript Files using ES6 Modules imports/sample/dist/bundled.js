define("IPost", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Post = void 0;
    class Post {
        constructor() {
            this.title = "My First Post";
            this.description = "Description";
        }
    }
    exports.Post = Post;
});
define("app", ["require", "exports", "IPost"], function (require, exports, IPost_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const post = new IPost_1.Post();
    console.log(post);
});
