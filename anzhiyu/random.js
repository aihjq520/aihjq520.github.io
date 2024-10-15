var posts=["2024/01/11/large-file-download/","2024/01/11/handwrite-promise/","2024/01/19/webpack-1/","2024/10/15/vue3-1/","2024/01/16/type-and-interface/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };